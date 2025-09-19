<template>
    <div>
        <v-card class="login_container" theme="dark">
            <img src="@/assets/img/login.jpg" class="frame" />
            <div class="group">
                <v-card class="desc">
                    <div class="logo">
                        <img src="@/assets/img/qiuya.jpg" height="160" />
                    </div>
                    <div class=" title d-flex justify-center text-h4 mt-6">{{ title }}</div>
                </v-card>        
                <v-card class="form ml-1">
                    <div class="d-flex justify-center">
                        <div class="mt-6 d-flex" style="width: 280px;">
                            <v-text-field
                                v-model="acc"
                                variant="outlined"
                                density="compact"
                                clearable
                                hide-details
                                label="账号"
                            ></v-text-field>
                        </div>
                    </div>
                    <div class="d-flex justify-center">
                        <div class="mt-6 d-flex" style="width: 280px;">
                            <v-text-field
                                label="密码"
                                v-model="pass"
                                type="password"
                                variant="outlined"
                                density="compact"
                                clearable
                                hide-details
                                prepend-inner-icon="mdi-lock-outline"
                            ></v-text-field>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-center">
                        <div class="mt-6 d-flex" style="width: 280px; cursor: pointer;">
                        <v-row >
                            <v-col cols="6">
                                <img class="mt-0" style="width: 100%; height: 38px;" dark :src="curUrl + '/api/kaptcha?' + rnd"  @click="fnChangeKaptcha();" />
                            </v-col>
                            <v-col cols="6">
                                <v-text-field 
                                    label="验证码"
                                    v-model="kaptcha"
                                    variant="outlined"
                                    density="compact"
                                    clearable
                                    hide-details
                                >
                                </v-text-field>
                                
                            </v-col>
                        </v-row>
                        </div>
                    </div>

                    <div style="text-align: center" class="mt-8">
                        <v-btn
                            color="primary"
                            append-icon="mdi-account"
                            type="submit"
                            width="120"
                            @click="fnShowReg();"
                            >注册</v-btn
                        >
                        <v-btn
                            class="ml-10"
                            color="primary"
                            append-icon="mdi-login"
                            type="submit"
                            width="120"
                            @click="fnLogin();"
                            >登录</v-btn
                        >
                    </div>
                </v-card>
            </div>
        </v-card>
        <v-dialog v-model="bShowReg" width="400" theme="dark" >
            <v-card >
                <div class="d-flex justify-center mt-4">
                    用户注册
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="重复密码"
                            v-model="repass"
                            type="password"
                            variant="outlined"
                            density="compact"
                            clearable
                            hide-details
                        ></v-text-field>
                    </div>
                </div>

                <v-spacer></v-spacer>
                <div class="d-flex justify-center my-4">
                    <div>
                        <v-btn
                            text="注册"
                            @click="fnReg();"
                        ></v-btn>
                    </div>
                </div>
            </v-card>            
        </v-dialog>
    </div>
</template>
<script setup>
    import {ref} from "vue"
    import axios from 'axios'
    import md5 from 'js-md5';
    import { ElMessage } from 'element-plus';
    import { useRouter } from "vue-router";
    import { menuAndBar } from '@/assets/js/utils';

    import { onMounted, onBeforeUnmount } from 'vue';

    onMounted(() => {
        fnGetTitle();
    });
    onBeforeUnmount(() => {
        
    });


    const router = useRouter();
    const menuBar = menuAndBar();

    const acc = ref('');
    const rnd = ref(0);
    const pass = ref('');
    const repass = ref('');
    const kaptcha = ref('');
    const curUrl = ref(window.curUrl);
    const title = ref('微网仿真平台');
    const bShowReg = ref( false );

    const fnChangeKaptcha = () => {
        rnd.value = Math.random();
    }

    const fnLogin = () => {

        if( acc.value == '' ) {
            ElMessage('请输入账号');
            return;
        }
        if( pass.value == '' ) {
            ElMessage('请输入密码');
            return;
        }
        if( kaptcha.value == '' ) {
            ElMessage('请输入验证码');
            return;
        }

        var uuu = {};
        uuu.user = acc.value;
        uuu.passwd = md5(pass.value);
        uuu.kaptcha = kaptcha.value;
        uuu.url = curUrl.value;

        axios.post(curUrl.value + "/api/user/login",
            uuu
        ).then((res) => {
            const oo = res.data;
            if( oo.code == 1000) {
                var dd = JSON.parse(oo.result);
                menuBar.user_id = dd.user_id;
                menuBar.user_name = dd.user_name;
                menuBar.run_status = dd.run_status;

                router.push('/syssimu');
            }
            else {
                ElMessage(oo.msg);
            }
        }).catch(err => {
            console.log(err)
            ElMessage('未知错误');
        });
    }

    const fnGetTitle = () => {
        axios.get(curUrl.value + '/api/title').then((res) => {
            if (res.data) {
                const oo = res.data;
                if (oo.code == 1000) {
                    var dd = JSON.parse(oo.result);
                    title.value = dd.title;
                    document.title = dd.title;
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

    const fnShowReg = () => {
        if( acc.value == '' ) {
            ElMessage('请输入账号');
            return;
        }
        if( pass.value == '' ) {
            ElMessage('请输入密码');
            return;
        }
        if( kaptcha.value == '' ) {
            ElMessage('请输入验证码');
            return;
        }
        bShowReg.value = true;
    }

    const fnReg = () => {
        if( acc.value == '' ) {
            ElMessage('请输入账号');
            return;
        }
        if( pass.value == '' ) {
            ElMessage('请输入密码');
            return;
        }
        if( kaptcha.value == '' ) {
            ElMessage('请输入验证码');
            return;
        }
        if( pass.value != repass.value ) {
            ElMessage('两次密码不一致');
            return;
        }

        var uuu = {};
        uuu.user_name = acc.value;
        uuu.user_passwd = md5(pass.value);
        uuu.kaptcha = kaptcha.value;

        axios.post(curUrl.value + "/api/user/add",
            uuu
        ).then((res) => {
            const oo = res.data;
            if( oo.code == 1000) {
                ElMessage( '注册成功，请登录！' );
                fnChangeKaptcha();
                bShowReg.value = false;
            }
            else {
                ElMessage(oo.msg);
            }
        }).catch(err => {
            console.log(err)
            ElMessage('未知错误 ' + err);
        });

        repass.value = '';
    }

</script>

<style lang="scss" scoped>
.login_container {
    height: 100vh;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    .frame {
        position: absolute;
        left: -5%;
        top: -5%;
        width: 110%;
        height: 110%;
        filter: blur(20px);
    }
    .group {
        display: flex;
        position: relative;
        z-index: 1;
        border-radius: 20px;
        overflow: hidden;
        .form {
            width: 420px;
            margin: 0 auto;
            height: 320px;
            padding: 30px;
            .title {
                font-size: 32px;
                font-weight: 700;
                font-family: Roboto, sans-serif !important;
                margin-bottom: 20px;
            }
        }
        .desc {
            height: 100%;
            margin: 0 auto;
            width: 420px;
            height: 320px;
            padding: 60px;
            text-align: center;
            .logo {
                text-align: center;
            }
        }        
    }
}
@media only screen and (max-width: 778px) {
    .login_container {
        .group {
            .form {
                background: transparent;
            }
            .desc {
                display: none;
            }
        }
    }
}
</style>
