<template>

    <v-app-bar  height="80" order="-1" class="header " :style="{ 'width': menuBar.isMobile ? 'calc(100vw - 6px)': '360px'}" >
        <div style="width: 100%;" class="d-flex justify-center">
            <v-app-bar-title class="text-h5 mt-n2 d-flex justify-center" style="width: 100%;">
                命理风水分析 
            </v-app-bar-title>
        </div>
    </v-app-bar>
    
    <v-bottom-navigation
        height="60"
        class="d-flex justify-center"
        :style="{ 'width': menuBar.isMobile ? 'calc(100vw - 6px)': '360px'}"
    >
        <v-btn value="recent" @click="fnMenuClick('home')">
            <v-icon>mdi-list-box</v-icon>
            <span>排盘</span>
        </v-btn>

        <v-btn value="recent" @click="fnMenuClick('compass')">
            <v-icon>mdi-domain</v-icon>
            <span>罗盘</span>
        </v-btn>

        <!-- v-btn value="nearby" @click="fnMenuClick('analysis')">
            <v-icon>mdi-chart-box</v-icon>
            <span>我的</span>
        </v-btn -->

    </v-bottom-navigation>

</template>

<script setup>
    import {ref} from "vue"
    import { menuAndBar } from '@/assets/js/utils';
    import { useRouter } from "vue-router";
    import { onMounted, onBeforeUnmount } from 'vue';
    import { ElMessage } from 'element-plus';
    import axios from 'axios'
    import emitter from '@/assets/js/bus.js';
    //import AiSprite from '@/components/AiSprite.vue';

    onMounted(() => {

        drawTiming.value = setInterval(()=>{
            //fnGetDevList();
        },10000);

    });
    onBeforeUnmount(() => {
        emitter.off('mapdevsel');
        clearInterval(drawTiming.value);

    });

    emitter.on('mapdevsel', (para) => {
        curDeviceId.value = para;
    });

    emitter.on('devchange', (para) => {
        //fnGetDevList();
    });
    

    const router = useRouter();
    const menuBar = menuAndBar();
    var curUrl = ref(window.curUrl);
    const drawTiming = ref(null);
    const screenWidth = ref(window.screen.width);

    const bShowSelect = ref(false);

    const rightMantain = ref('test');
    var bShow = ref(false);

    const sysSimuBkColor = ref("transparent");
    const devSimuBkColor = ref("transparent");
    const sysSimuEditBkColor = ref("transparent");
    const devSimuEditBkColor = ref("transparent");
    const aiGlmBkColor = ref("transparent");
    const aiAgentBkColor = ref("transparent");
    const configBkColor = ref("transparent");
    const menuSimOpen = ref([]);
    const menuAiOpen = ref([]);

    if( router.currentRoute.value.path == "/syssimu" ) {
        sysSimuBkColor.value = "cornflowerblue";
    }
    else if( router.currentRoute.value.path == "/devsimu" ) {
        devSimuBkColor.value = "cornflowerblue";
    }
    else if( router.currentRoute.value.path == "/syssimuedit" ) {
        sysSimuEditBkColor.value = "cornflowerblue";
        menuSimOpen.value = ['sim'];
    }
    else if( router.currentRoute.value.path == "/devsimuedit" ) {
        devSimuEditBkColor.value = "cornflowerblue";
        menuSimOpen.value = ['sim'];
    }
    else if( router.currentRoute.value.path == "/aiglm" ) {
        aiGlmBkColor.value = "cornflowerblue";
        menuAiOpen.value = ['ai'];
    }
    else if( router.currentRoute.value.path == "/aiagent" ) {
        aiAgentBkColor.value = "cornflowerblue";
        menuAiOpen.value = ['ai'];
    }
    else if( router.currentRoute.value.path == "/config" ) {
        configBkColor.value = "cornflowerblue";
    }



    const searchSelect = ref("全部");
    const fnSelect = () => {
        bShowSelect.value = !bShowSelect.value;
    }
    const fnChangeSelect = () => {  //// 选择了 all, online, offline
        bShowSelect.value = !bShowSelect.value;
        curDeviceId.value = '0';

        //fnGetDevList();
    }

    const fnSearchDevice = () => {   //// 输入了数据
        //fnGetDevListByDeviceId();
    }

    const fnOpenMantain = () => {
        if( rightMantain.value == 'admin' ){
            router.push('maintain');
        }
        else {
            ElMessage('您没有权限！');
        }
    }

    const fnLogout = () => {
        /*
        axios.get(curUrl.value + '/api/user/logout').then((res) => {
            if (res.data) {
                const oo = res.data;
                if (oo.code == 1000) {
                } else {
                    ElMessage(oo.msg);
                }
            } else {
                ElMessage('返回出错2！');
            }
        }).catch((err) => {
            ElMessage(err);
        });
        */
        router.push('login');
    }

    const fnGetUserRight = () => {
        axios.get(curUrl.value + '/api/user/getright').then((res) => {
          if (res.data) {
              const oo = res.data;
              if (oo.code == 1000) {
                var bb = JSON.parse(oo.result);
                rightMantain.value = bb.user_right;
                if( router.currentRoute.value.path == "/maintain" ) {
                    if( rightMantain.value != 'admin' ){
                        fnLogout();
                    }
                }

              } else {
                ElMessage(oo.msg);
              }
          } else {
            ElMessage('返回出错2！');
          }
      }).catch((err) => {
        ElMessage(err);
      });

    }

    const curDeviceId = ref('0');
    const devList = ref([]);
    const fnGetDevList = () => {
        axios.get(curUrl.value + '/api/device/list?status=' + searchSelect.value ).then((res) => {
          if (res.data) {
              const oo = res.data;
              if (oo.code == 1000) {
                var bb = JSON.parse(oo.result);
                devList.value = bb;
                emitter.emit('device', {cur: curDeviceId.value, list: devList.value });

              } else {
                ElMessage(oo.msg);
              }
          } 
      }).catch((err) => {
        console.log('fnGetDevList', err);
      });

    };
    const fnGetDevListByDeviceId = () => {
        curDeviceId.value = '0';
        axios.get(curUrl.value + '/api/device/device_id?device_id=' + searchSelect.value ).then((res) => {
          if (res.data) {
              const oo = res.data;
              if (oo.code == 1000) {
                var bb = JSON.parse(oo.result);
                devList.value = bb;
                emitter.emit('device', {cur: curDeviceId.value, list: devList.value });
              } else {
                ElMessage(oo.msg);
              }
          } else {
            ElMessage('返回出错2！');
          }
      }).catch((err) => {
        ElMessage(err);
      });

    };

    const fnSelectDev = (item) => {
        if( curDeviceId.value == item.device_id) {
            curDeviceId.value = 0;
        }
        else {
            curDeviceId.value = item.device_id;
        }
        emitter.emit('device', {cur: curDeviceId.value, list: devList.value });
    }

    const fnMenuClick = (url) => {
        router.push(url);
        bShow.value = false;
    }


</script>

<style scoped>
    .layout_navigation {
        /* border-radius: 12px; */
        margin: 2px 0px 10px 2px; /* !important; */
        overflow: hidden;
        top: 87px !important;
        left: 8px !important;
        height: calc(100vh - 100px) !important; 
        width: 100px;
        border: 1px solid #424f57; 
    }

    .header {
        /* border-radius: 12px; */
        margin: 2px 00px 0px 2px; /* !important; */
        /* width: 100%;
        / * border: 1px solid #424f57; */ 
        background: #25292c !important;
    }

    .dev-list {
        overflow-y:scroll;
    }

    .scrollbar::-webkit-scrollbar{
        width: 5px;
        height: 1px;
        background: #535353;
    }
    .scrollbar::-webkit-scrollbar-thumb {
        border-radius: 4px;
        box-shadow   : inset 0 0 3px rgba(0, 0, 0, 0.2);
        background   : gray;

    }
    .scrollbar::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 4px;
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #535353;
    }

    .v-btn--size-default {
        font-size: 12px;
    }

    :deep( .v-list-item__spacer ) {
        width: 8px !important;
    }

    .v-list-group__items .v-list-item {
        padding-inline-start: 40px !important;
    }


</style>