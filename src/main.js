/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import 'core-js/features/array/at'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { createPinia } from 'pinia';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import VueScrollPicker from "vue-scroll-picker";
import "vue-scroll-picker/lib/style.css";

import axios from 'axios';

const fnHref = () => {
    var url;
    var urls = window.location.href.split("?");
    if(urls.length > 1) {
        url = urls[0];
    } else {
        urls = window.location.href.split("#");
        if(urls.length > 1) {
            url = urls[0];
        } else {
            url = window.location.href;
        }
    }
    if( url.charAt(url.length - 1) == '/') url = url.substring(0, url.length - 1);
    return url;
};
window.curUrl = fnHref();

//// 获取微信的openid
window.wxAppid = 'your_wx_appid_here';
//window.wxOpenid = 'your_test_openid_here';
window.wxOpenid = 'your_wx_openid_here';

const fnIsWeChat = () =>{
    //判断是否为微信内部登录
    var ua = window.navigator.userAgent.toLowerCase();
    //console.log(ua);
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;//是微信内部
    } else {
      return false;
    }
}

const fnGetWxOpenId = () => {

    if( fnIsWeChat() == false ) {

        if( window.curUrl.indexOf('www.ddfj0.com') > 0 ) {
            //window.location.href = window.curUrl + '/weixin.jpg?' + (Math.floor(Math.random() * 100) + 1);              
        }
        else {
            //window.location.href = window.curUrl + '/weixin.png?' + (Math.floor(Math.random() * 100) + 1);              
        }
        return;
    }

    if( window.curUrl.indexOf('www.ddfj0.com') > 0 ) {
        var uuu = {};
        uuu.appid = window.wxAppid;
        uuu.code = (Math.floor(Math.random() * 1000000) + 1);;
    
        axios.post(window.curUrl + "/api/user/pay/mp/openid",
        uuu
        ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            var dd = JSON.parse(oo.result);
            window.wxOpenid = dd.openid;
            console.log('获取openid成功');
        }
        else {
            console.log(oo.msg);
        }
        }).catch(err => {
            console.log('未知错误' + err)
        });    
    }
    else {
        const local = encodeURIComponent( window.location.href);
        const urls = window.location.href.split('?');
        if( urls.length > 1 ) {
            const params = new URLSearchParams('?' + urls[1]);
            const codes = params.get('code').split('#');
            const code = codes[0];

            if( code == null || code == '' ) {
                const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.wxAppid + '&redirect_uri=' + local + '&response_type=code&scope=snsapi_base&state=bz0910#wechat_redirect';
                window.location.href = url;      
            }
            else {
                var uuu = {};
                uuu.appid = window.wxAppid;
                uuu.code = code;
            
                axios.post(window.curUrl + "/api/user/pay/mp/openid",
                uuu
                ).then((res) => {
                const oo = res.data;
                if( oo.code == 1000) {
                    var dd = JSON.parse(oo.result);
                    window.wxOpenid = dd.openid;
                    console.log('获取openid成功');
                }
                else {
                    console.log(oo.msg);
                }
                }).catch(err => {
                    console.log('未知错误' + err)
                });    
            }
        }
        else {
            const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.wxAppid + '&redirect_uri=' + local + '&response_type=code&scope=snsapi_base&state=bz0910#wechat_redirect';
            window.location.href = url;      
        }
    }
}

if( window.curUrl.indexOf('://localhost') > 0 ) { /// 本地不获取openid
    window.wxOpenid = 'oYr3t6Rjtsa80OFin7Kb92xioQjE';
}
else {
    fnGetWxOpenId();
}


if( window.timerAlive == null ) {
    console.log('启动定时器');
    window.timerAlive = setInterval(() => {
        if( window.wxOpenid == '' ) {
            return;
        }

        var uuu = {};
        uuu.appid = window.wxAppid;
        uuu.openid = window.wxOpenid;
    
        axios.post(window.curUrl + "/api/user/mp/alive",
            uuu
        ).then((res) => {
            const oo = res.data;
            console.log(oo);
        }).catch(err => {
            console.log('未知错误' + err)
        });    
    }, 1000 * 60 * 5);
}

const app = createApp(App);

app.use(VueScrollPicker);
app.use(ElementPlus, {locale: zhCn});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia());
registerPlugins(app);
app.mount('#app');
