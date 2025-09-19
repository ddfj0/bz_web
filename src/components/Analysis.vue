<template>
  <div class="main_area" >
    <div class="ma-2" style="width: 360px">
      <div class="d-flex " >
          <span>
            <img src="@/assets/img/icon-title.png" />
          </span>
          <div >
              <span class="mx-2" style="color: white;"> 命理分析 </span>
          </div>
      </div>
      <div v-if="isLogin == false" class="mt-4">  

        <v-row class="pa-0 ma-0">
            <v-col cols="12" lg="6" class="pa-0 ma-0">
                <v-card class="mt-2 borderd" style="height: 250px;">
                    <div class="mt-1">
                        <v-row >
                            <v-col cols="10" >
                                <div class="d-flex justify-start">
                                    <div class="ml-1">
                                        <v-icon>mdi-account</v-icon>
                                    </div>
                                    <div class="ml-2">{{acc}}</div>
                                </div>
                            </v-col>
                            <v-col cols="2" >
                                <div class="d-flex justify-end">
                                    <v-icon @click="bChangePasswd=true;" class="ml-2">mdi-key-change</v-icon>
                                    <v-icon @click="fnLogout();" class="ml-2">mdi-exit-to-app</v-icon>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="mt-2">
                        <v-row class="pa-0 ma-0">
                            <v-col cols="12" lg="6" class="pa-0 ma-0">
                                <div class="d-flex mx-2" style="background-color: white;">
                                    <div style="width: 25%;">
                                    <VueScrollPicker :options="spYearOption" v-model="selYear" />
                                    </div>
                                    <div style="width: 25%;">
                                    <VueScrollPicker :options="spMonthOption" v-model="selMonth" />
                                    </div>
                                    <div style="width: 25%;">
                                    <VueScrollPicker :options="spDayOption" v-model="selDay" />
                                    </div>
                                    <div style="width: 25%;">
                                    <VueScrollPicker :options="spHourOption" v-model="selHour" />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="6" class="pa-0 ma-0">
                                <div class="mt-4">
                                    <v-row>
                                        <v-col cols="6" lg="12" class="pa-0 ma-0">
                                            <div class="mt-2 d-flex justify-center">
                                                {{selYear}}-{{selMonth}}-{{selDay}} {{selHour}}
                                            </div>
                                        </v-col>
                                        <v-col cols="3" lg="12" class="pa-0 ma-0">
                                            <div class="">
                                                <v-switch
                                                    class="d-flex justify-center"
                                                    v-model="selBoolSex"
                                                    density="compact"
                                                    hide-details
                                                    :label="selBoolSex?'女':'男'"
                                                ></v-switch> 
                                            </div>
                                        </v-col>
                                        <v-col cols="3" lg="12" class="pa-0 ma-0">
                                            <div class="d-flex justify-center">
                                                <v-btn :class="menuBar.isMobile?'mt-2 mr-3':'mt-2'" variant="outlined" style="font-size: 12px;height: 28px;"  @click="fnNewAnalysis()" >
                                                    新排盘 
                                                </v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div >
                            </v-col>
                        </v-row>
                    </div>
                    <div :style="{height: menuBar.isMobile? '30px' : '5px'}"> </div>
                </v-card>
            </v-col>
            <v-col cols="12" lg="6" class="pa-0 ma-0">
                <v-card :class="menuBar.isMobile?'mt-2':'mt-2 ml-2'" style="border: 1px solid #f1f4f6; height: 250px;">
                    <div class="ml-1">
                        <v-row>
                            <v-col cols="10" class="pa-0 ma-0">
                                <div class="mt-4 ml-3">
                                    <v-icon>mdi-list-box</v-icon>
                                    命理分析记录
                                </div>
                            </v-col>
                            <v-col cols="2" class="pa-0 ma-0">
                                <div class="mt-4 d-flex justify-center">
                                    <v-icon @click="fnGetPayList();">mdi-refresh</v-icon>
                                </div> 
                            </v-col>
                        </v-row>
                    </div>
                    <div class="mx-2 mt-4" style="width: 100%; color: white;">
                        <el-table
                            :data="payList"
                            style="width: 95%; height: 200px; background: transparent; color: white;"
                            :row-style="{color: 'white', background: 'transparent'}"
                            :header-cell-style="{color: '#6495ed', background: '#25292c ' }"
                            border
                            highlight-current-row
                            @current-change="fnPayChange"
                            >
                            <el-table-column
                                prop="birthday"
                                label="生辰"
                                width="140"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="性别"
                                width="60"
                                >
                            </el-table-column>
                            <el-table-column
                                v-if="menuBar.isMobile == false"
                                prop="fate_self"
                                label="本命"
                                >
                            </el-table-column>
                            
                            <el-table-column
                                prop="pay_time"
                                label="起算时间"
                                width="170"
                                >
                            </el-table-column>
                            <!-- el-table-column
                                prop="pay_info"
                                label="支付"
                                width="100"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="pay_order"
                                label="订单"
                                width="100"
                                >
                            </el-table-column>
                            
                            <el-table-column
                                label="操作"
                                width="90"
                                >
                                <template #default="scope">
                                    <v-btn variant="outlined" @click="fnReAnalysis(scope.row);" class="mt-1">更新</v-btn>
                                </template>
                            </el-table-column -->
                        </el-table>

                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-card class="mt-2" style="border: 1px solid #f1f4f6; " >
            <div class="ml-1">
                <v-icon>mdi-yin-yang</v-icon>
                命理详细分析  {{ selfBirthday }}
            </div>
            <div class="d-flex justify-center ma-2" >
                <div>
                    <v-row  v-for="(item, index) in textZiPing" :key="index" class="pa-0 ma-0">
                        <v-col cols="12" class="pa-0 ma-0">
                        {{ item }}
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card>

      </div>
      <div v-else > <!--  登录  -->

        <div class="d-flex justify-center" >
            <v-card theme="dark" width="320">
                <div class="mt-4 d-flex justify-center">八字为隐私信息，请不要使用真实姓名。</div>
                <div class="d-flex justify-center">
                    <div class="mt-4 d-flex" style="width: 280px;">
                        <v-text-field
                            v-model="acc"
                            variant="outlined"
                            density="compact"
                            clearable
                            hide-details
                            label="名称"
                        ></v-text-field>
                    </div>
                </div>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="密码"
                            v-model="pass"
                            variant="outlined"
                            density="compact"
                            type="password"
                            clearable
                            hide-details
                        ></v-text-field>
                    </div>
                </div>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
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

                <div style="text-align: center" class="mt-6">
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
                <div style="height: 20px;"></div>
            </v-card>
        </div>
        <v-dialog v-model="bShowReg" width="320" theme="dark" >
            <v-card >
                <div class="d-flex justify-center mt-4">
                    用户注册
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="确认密码"
                            v-model="repass"
                            variant="outlined"
                            density="compact"
                            clearable
                            hide-details
                        ></v-text-field>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="找回账号密码的验证内容"
                            v-model="rtncode"
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

        <v-dialog v-model="bChangePasswd" width="320" theme="dark" >
            <v-card >
                <div class="d-flex justify-center mt-4">
                    修改密码
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="旧密码"
                            v-model="pass"
                            variant="outlined"
                            density="compact"
                            clearable
                            hide-details
                        ></v-text-field>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="新密码"
                            v-model="newpass"
                            variant="outlined"
                            density="compact"
                            clearable
                            hide-details
                        ></v-text-field>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="width: 280px;">
                        <v-text-field
                            label="重复新密码"
                            v-model="repass"
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
                            text="修改"
                            @click="fnChangePasswd();"
                        ></v-btn>
                    </div>
                </div>
            </v-card>            
        </v-dialog>

        <v-dialog v-model="bPayQrCode" width="320" theme="dark" persistent >
            <v-card >
                <div class="d-flex justify-center mt-4">
                    捐赠一碗面(10元)
                </div>
                <div v-if="menuBar.isMobile" >
                    <div class="d-flex justify-center ">
                        (长按二维码下载图片，稍后扫码支付)
                    </div>
                    <div class="d-flex justify-center ">
                        (请使用<span style="color: red;">其他手机</span>中的微信扫码支付)
                    </div>
                </div>
                <div v-else class="d-flex justify-center ">
                    (请使用手机中的微信扫码支付)
                </div>

                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <div class="mt-6 d-flex" style="height: 300px;">
                        <Vue3NextQrcode :text="payQrText" :size="300"  />
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center my-4">
                    <div>
                        <v-btn 
                            text="支付完成"
                            @click="fnPayOk();"
                        ></v-btn>
                    </div>
                    <div>
                        <v-btn
                            text="取消"
                            @click="fnPayCancel();"
                        ></v-btn>
                    </div>
                </div>
            </v-card>            
        </v-dialog>

    </div>

    <div style="height: 80px;"></div>
  </div>
</template>

<script setup>
import {ref, shallowRef, onMounted, onBeforeUnmount } from "vue";
import { menuAndBar } from '@/assets/js/utils';
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus';
import axios from 'axios';
import { Vue3NextQrcode } from 'vue3-next-qrcode';
import logo from '@/assets/img/logo.png';

import {paipan, fnComputeShishen, fnComputeDzcg, fnConvertLunarMonth, fnConvertLunarDay, fnMakeBazi} from "@/assets/js/paipan";

onMounted(() => {
    fnGetLogin();

  timer.value = setInterval(() => {
        fnTimer();
    }, 500);

});

onBeforeUnmount(() => {
    if( timer.value != null ) {
        clearInterval(timer.value);
        timer.value = null;
    }

});

const menuBar = menuAndBar();
const router = useRouter();
const curUrl = ref(window.curUrl);
const timer = ref(null);

const fnTimer = () => {

    if( bPayQrCode.value == true ) {
        /// 显示了支付二维码，查询支付状态
        //fnPayOk();
    }
}

//#region 登录 

const isLogin = ref(true);
const bShowReg = ref( false );
const bChangePasswd = ref( false );
const acc = ref('礼敬世尊');
const pass = ref('');
const repass = ref('');
const newpass = ref('');
const kaptcha = ref('');
const rtncode = ref('');
const rnd = ref(0);

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
    uuu.passwd = pass.value;
    uuu.kaptcha = kaptcha.value;

    axios.post(curUrl.value + "/api/user/login",
        uuu
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            var dd = JSON.parse(oo.result);
            reg_time.value = dd.reg_time.substring(0, 10);

            isLogin.value = false;
            pass.value = '';
            fnGetPayList();
        }
        else {
            ElMessage(oo.msg);
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
}

const fnGetLogin = () => {
    axios.get(curUrl.value + "/api/user/getlogin"
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            var dd = JSON.parse(oo.result);
            acc.value = dd.user_name;
            reg_time.value = dd.reg_time.substring(0, 10);

            fnGetPayList();
            isLogin.value = false;
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
}

const fnShowReg = () => {
  if( acc.value == '' ) {
      ElMessage('请输入姓名');
      return;
  }
  if( pass.value == '' ) {
      ElMessage('请输入字');
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
        ElMessage('请输入名');
        return;
    }
    if( pass.value == '' ) {
        ElMessage('请输入字');
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
    if( rtncode.value == '' ) {
        ElMessage('请输入号');
        return;
    }

    var uuu = {};
    uuu.user_name = acc.value;
    uuu.user_passwd = pass.value;
    uuu.kaptcha = kaptcha.value;
    uuu.user_rtncode = rtncode.value;

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

const fnChangePasswd = () => {
    if( pass.value == '' ) {
        ElMessage('请输入密码');
        return;
    }
    if( newpass.value == '' ) {
        ElMessage('请输入新密码');
        return;
    }
    if( repass.value == '' ) {
        ElMessage('请输入重复密码');
        return;
    }
    if( newpass.value != repass.value ) {
        ElMessage('两次密码不一致');
        return;
    }

    var uuu = {};
    uuu.user_passwd  = pass.value;
    uuu.user_rtncode = newpass.value;

    axios.post(curUrl.value + "/api/user/changepasswd",
        uuu
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            ElMessage( '修改成功，请重新登录！' );
            fnChangeKaptcha();
            pass.value = '';
            newpass.value = '' ;
            repass.value = '';
            bChangePasswd.value = false;
            isLogin.value = true;
        }
        else {
            ElMessage(oo.msg);
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
    
}

const fnLogout = () => {
    axios.get(curUrl.value + "/api/user/logout"
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            acc.value = '';
            pass.value = '';
            repass.value = '';
            newpass.value = '';
        }
        else {
            ElMessage(oo.msg);
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
    isLogin.value = true;
}

//#endregion

//#region 命理分析 
const reg_time = ref('');

const boolSex = ref(true);
const selBoolSex = ref(true);

const selYear = ref(1980);
const selMonth = ref(6);
const selDay = ref(15);
const selHour = ref(12);

var   curPayList = [];
const payList = ref([]);

const selfBirthday = ref('');

const textZiPing = ref([]);

const spYearOption = ref([
  { name: '1930 年', value: 1930},
  { name: '1931 年', value: 1931},
  { name: '1932 年', value: 1932},
  { name: '1933 年', value: 1933},
  { name: '1934 年', value: 1934},
  { name: '1935 年', value: 1935},
  { name: '1936 年', value: 1936},
  { name: '1937 年', value: 1937},
  { name: '1938 年', value: 1938},
  { name: '1939 年', value: 1939},
  { name: '1940 年', value: 1940},
  { name: '1941 年', value: 1941},
  { name: '1942 年', value: 1942},
  { name: '1943 年', value: 1943},
  { name: '1944 年', value: 1944},
  { name: '1945 年', value: 1945},
  { name: '1946 年', value: 1946},
  { name: '1947 年', value: 1947},
  { name: '1948 年', value: 1948},
  { name: '1949 年', value: 1949},
  { name: '1950 年', value: 1950},
  { name: '1951 年', value: 1951},
  { name: '1952 年', value: 1952},
  { name: '1953 年', value: 1953},
  { name: '1954 年', value: 1954},
  { name: '1955 年', value: 1955},
  { name: '1956 年', value: 1956},
  { name: '1957 年', value: 1957},
  { name: '1958 年', value: 1958},
  { name: '1959 年', value: 1959},
  { name: '1960 年', value: 1960},
  { name: '1961 年', value: 1961},
  { name: '1962 年', value: 1962},
  { name: '1963 年', value: 1963},
  { name: '1964 年', value: 1964},
  { name: '1965 年', value: 1965},
  { name: '1966 年', value: 1966},
  { name: '1967 年', value: 1967},
  { name: '1968 年', value: 1968},
  { name: '1969 年', value: 1969},
  { name: '1970 年', value: 1970},
  { name: '1971 年', value: 1971},
  { name: '1972 年', value: 1972},
  { name: '1973 年', value: 1973},
  { name: '1974 年', value: 1974},
  { name: '1975 年', value: 1975},
  { name: '1976 年', value: 1976},
  { name: '1977 年', value: 1977},
  { name: '1978 年', value: 1978},
  { name: '1979 年', value: 1979},
  { name: '1980 年', value: 1980},
  { name: '1981 年', value: 1981},
  { name: '1982 年', value: 1982},
  { name: '1983 年', value: 1983},
  { name: '1984 年', value: 1984},
  { name: '1985 年', value: 1985}, 
  { name: '1986 年', value: 1986}, 
  { name: '1987 年', value: 1987}, 
  { name: '1988 年', value: 1988}, 
  { name: '1989 年', value: 1989}, 
  { name: '1990 年', value: 1990}, 
  { name: '1991 年', value: 1991}, 
  { name: '1992 年', value: 1992}, 
  { name: '1993 年', value: 1993}, 
  { name: '1994 年', value: 1994}, 
  { name: '1995 年', value: 1995}, 
  { name: '1996 年', value: 1996}, 
  { name: '1997 年', value: 1997}, 
  { name: '1998 年', value: 1998}, 
  { name: '1999 年', value: 1999}, 
  { name: '2000 年', value: 2000}, 
  { name: '2001 年', value: 2001}, 
  { name: '2002 年', value: 2002}, 
  { name: '2003 年', value: 2003}, 
  { name: '2004 年', value: 2004}, 
  { name: '2005 年', value: 2005}, 
  { name: '2006 年', value: 2006}, 
  { name: '2007 年', value: 2007}, 
  { name: '2008 年', value: 2008}, 
  { name: '2009 年', value: 2009}, 
  { name: '2010 年', value: 2010}, 
  { name: '2011 年', value: 2011}, 
  { name: '2012 年', value: 2012}, 
  { name: '2013 年', value: 2013}, 
  { name: '2014 年', value: 2014}, 
  { name: '2015 年', value: 2015}, 
  { name: '2016 年', value: 2016}, 
  { name: '2017 年', value: 2017}, 
  { name: '2018 年', value: 2018}, 
  { name: '2019 年', value: 2019}, 
  { name: '2020 年', value: 2020}, 
  { name: '2021 年', value: 2021}, 
  { name: '2022 年', value: 2022}, 
  { name: '2023 年', value: 2023}, 
  { name: '2024 年', value: 2024}, 
  { name: '2025 年', value: 2025}, 
  { name: '2026 年', value: 2026}, 
  { name: '2027 年', value: 2027}, 
  { name: '2028 年', value: 2028}, 
  { name: '2029 年', value: 2029}, 
  { name: '2030 年', value: 2030}, 
  { name: '2031 年', value: 2031}, 
  { name: '2032 年', value: 2032}, 
  { name: '2033 年', value: 2033}, 
  { name: '2034 年', value: 2034}, 
  { name: '2035 年', value: 2035}, 
  { name: '2036 年', value: 2036}, 
  { name: '2037 年', value: 2037}, 
  { name: '2038 年', value: 2038}, 
  { name: '2039 年', value: 2039}, 
  { name: '2040 年', value: 2040}, 
  { name: '2041 年', value: 2041}, 
  { name: '2042 年', value: 2042}, 
  { name: '2043 年', value: 2043}, 
  { name: '2044 年', value: 2044}, 
  { name: '2045 年', value: 2045}, 
  { name: '2046 年', value: 2046}, 
  { name: '2047 年', value: 2047}, 
  { name: '2048 年', value: 2048}, 
  { name: '2049 年', value: 2049}, 
  { name: '2050 年', value: 2050}, 
  { name: '2051 年', value: 2051}, 
  { name: '2052 年', value: 2052}, 
  { name: '2053 年', value: 2053}, 
  { name: '2054 年', value: 2054}, 
  { name: '2055 年', value: 2055}, 
  { name: '2056 年', value: 2056}, 
  { name: '2057 年', value: 2057}, 
  { name: '2058 年', value: 2058}, 
  { name: '2059 年', value: 2059}, 
  { name: '2060 年', value: 2060}, 
  { name: '2061 年', value: 2061}, 
  { name: '2062 年', value: 2062}, 
  { name: '2063 年', value: 2063}, 
  { name: '2064 年', value: 2064}, 
  { name: '2065 年', value: 2065}, 
  { name: '2066 年', value: 2066}, 
  { name: '2067 年', value: 2067}, 
  { name: '2068 年', value: 2068}, 
  { name: '2069 年', value: 2069}, 
  { name: '2070 年', value: 2070}, 
]);
const spMonthOption = ref([
  { name: '1 月', value: 1}, 
  { name: '2 月', value: 2}, 
  { name: '3 月', value: 3}, 
  { name: '4 月', value: 4}, 
  { name: '5 月', value: 5}, 
  { name: '6 月', value: 6}, 
  { name: '7 月', value: 7}, 
  { name: '8 月', value: 8}, 
  { name: '9 月', value: 9}, 
  { name: '10月', value: 10}, 
  { name: '11月', value: 11}, 
  { name: '12月', value: 12}, 
]);
const spDayOption = ref([
  { name: '1 日', value: 1}, 
  { name: '2 日', value: 2}, 
  { name: '3 日', value: 3}, 
  { name: '4 日', value: 4}, 
  { name: '5 日', value: 5}, 
  { name: '6 日', value: 6}, 
  { name: '7 日', value: 7}, 
  { name: '8 日', value: 8}, 
  { name: '9 日', value: 9}, 
  { name: '10日', value: 10}, 
  { name: '11日', value: 11}, 
  { name: '12日', value: 12}, 
  { name: '13日', value: 13}, 
  { name: '14日', value: 14}, 
  { name: '15日', value: 15}, 
  { name: '16日', value: 16}, 
  { name: '17日', value: 17}, 
  { name: '18日', value: 18}, 
  { name: '19日', value: 19}, 
  { name: '20日', value: 20}, 
  { name: '21日', value: 21}, 
  { name: '22日', value: 22}, 
  { name: '23日', value: 23}, 
  { name: '24日', value: 24}, 
  { name: '25日', value: 25}, 
  { name: '26日', value: 26}, 
  { name: '27日', value: 27}, 
  { name: '28日', value: 28}, 
  { name: '29日', value: 29}, 
  { name: '30日', value: 30}, 
  { name: '31日', value: 31}, 
]);
const spHourOption = ref([
  { name: '0 时', value: 0}, 
  { name: '1 时', value: 1}, 
  { name: '2 时', value: 2}, 
  { name: '3 时', value: 3}, 
  { name: '4 时', value: 4}, 
  { name: '5 时', value: 5}, 
  { name: '6 时', value: 6}, 
  { name: '7 时', value: 7}, 
  { name: '8 时', value: 8}, 
  { name: '9 时', value: 9}, 
  { name: '10时', value: 10}, 
  { name: '11时', value: 11}, 
  { name: '12时', value: 12},
  { name: '13时', value: 13}, 
  { name: '14时', value: 14}, 
  { name: '15时', value: 15}, 
  { name: '16时', value: 16}, 
  { name: '17时', value: 17}, 
  { name: '18时', value: 18}, 
  { name: '19时', value: 19}, 
  { name: '20时', value: 20}, 
  { name: '21时', value: 21}, 
  { name: '22时', value: 22},
  { name: '23时', value: 23}, 
]);

const bPayQrCode = ref(false);
const payQrText = ref('');
const payOrder = ref('');

const fnNewAnalysis = () => {
    var uuu = {};
    uuu.birthday = selYear.value + '-' + selMonth.value + '-' + selDay.value + ' ' + selHour.value;
    uuu.sex = selBoolSex.value?'女':'男';

    let bazi = fnMakeBazi(uuu.birthday, uuu.sex)
    uuu.bazi = JSON.stringify(bazi);

    axios.post(curUrl.value + "/api/user/pay/add",
        uuu
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {

            if( curUrl.value.indexOf('www.ddfj0.com') > 0  && acc.value == '礼敬世尊' ) {
                fnGetPayList();
            }
            else {
                var dd = JSON.parse(oo.result);

                payQrText.value = dd.qr;
                payOrder.value = dd.order;
                bPayQrCode.value = true;
                fnGetPayList();
            }
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

const fnPayOk = () => {

    let birthday = selYear.value + '-' + selMonth.value + '-' + selDay.value + ' ' + selHour.value;
    let sex = selBoolSex.value?'女':'男';

    let bazi = fnMakeBazi(birthday, sex)
    fnAnalysisSelfPay(bazi, birthday, sex, payOrder.value);
    bPayQrCode.value = false;
}

const fnPayCancel = () => {

    var uuu = {};
    uuu.user_pay_id = payOrder.value;

    axios.post(curUrl.value + "/api/user/pay/close",
        uuu
    ).then((res) => {
        const oo = res.data;
        ElMessage(oo.msg);
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });

    bPayQrCode.value = false;
}

const fnGetPayList = () => {
    curPayList = null;
    selfBirthday.value = '';

    axios.get(curUrl.value + "/api/user/pay/list"
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            payList.value = JSON.parse(oo.result);
            //console.log(payList.value);
        }
        else {
            ElMessage(oo.msg);
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
}

const fnPayChange = (row) => {
    if( row == null ) return;
    curPayList = row;
    selfBirthday.value = curPayList.birthday + ", " + curPayList.sex;
    let bazi = fnMakeBazi(curPayList.birthday, curPayList.sex)
    fnAnalysisSelfPay(bazi, curPayList.birthday, curPayList.sex, curPayList.user_pay_id );
}

const fnReAnalysis = () => {
    var uuu = {};
    uuu.user_name = acc.value;
    uuu.user_passwd = pass.value;
    uuu.kaptcha = kaptcha.value;
    uuu.user_rtncode = rtncode.value;

    axios.post(curUrl.value + "/api/user/pay/analysis",
        uuu
    ).then((res) => {
        const oo = res.data;
        ElMessage(oo.msg);
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误 ' + err);
    });

    repass.value = '';

}

const fnAnalysisSelfPay = (bazi, birthday, sex, id) => {

    var uuu = {};
    uuu.bazi = JSON.stringify(bazi);
    uuu.birthday = birthday;
    uuu.sex = sex;
    uuu.user_pay_id = id;

    axios.post(curUrl.value + "/api/analysis/selfpay",
        uuu
    ).then((res) => {
    const oo = res.data;
    if( oo.code == 1000) {
        if( oo.result != '未分析') {
            var dd = JSON.parse(oo.result);
            textZiPing.value = dd;
        }
    }
    else {
        ElMessage(oo.msg);
    }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });

}


//#endregion


</script>

<style scoped>
  .cornerbox { /* 定位div 边界，测试用 */
    color: transparent;
    position: relative;
    border-radius: 4px;
    border: 1px solid #424f57;
    /* background: #25292c; */
  }

  
  .v-container { /* 替换默认设置 */
    max-width: calc(100vw);
  }  
  
  .main_area {
        /* margin: 86px 0px 0px 106px; !important; */
        border-radius: 4px; 
        border: 1px solid #424f57; 
        background: #25292c;
        position: absolute;
        /* overflow-y: auto; */ 

        top: 85px;
        left: 2px;
        width: 360px;
        height: calc(100vh - 90px) !important; 
    }

    .el-table {
      --el-table-row-hover-bg-color: #424f57;
      --el-table-current-row-bg-color: #424f57;
    }

    .borderd {
        border: 1px solid #f1f4f6;
    }

</style>