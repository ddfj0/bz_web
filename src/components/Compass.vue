<template>
  <div class="main_area" :style="{ 'width': menuBar.isMobile ? 'calc(100vw - 6px)': '360px'}">
    <div class="ma-2" style="width: 100%;">
      <div class="d-flex ">
          <span>
            <img src="@/assets/img/icon-title.png" />
          </span>
          <div >
            <span class="mx-2" style="color: white;"> 风水罗盘 </span>
            <span class="mx-2" style="color: white;"> {{ orientationMsg }} {{ orientation }} </span>
          </div>
      </div>
    </div>

    <div v-if="menuBar.isMobile == false" id="divcompass" class="ma-2 d-flex justify-center" style="height: 340px; width: 340px;">
      <canvas id="compass">
      </canvas>
    </div>
    <div v-else id="divcompass" class="d-flex justify-center" style="margin-left: 1px;" >
      <div :style="{height: divcompassWh + 'px', width: divcompassWh + 'px'}">
        <canvas id="compass">
        </canvas>
      </div>
    </div>
    <div class="mx-2 d-flex justify-center">
      指南针的红色指南，蓝色指北。罗盘使用前，请旋转三个方向，每个方向用8字校正法（下图）对手机进行三次转动。三次校正后，多刷新几次页面，罗盘将会更加准确。

    </div>
    <div class="mt-2 d-flex justify-center">
      <img src="@/assets/img/Correction8.png" style="width: 300px" />
    </div>
    <div style="height: 40px;"></div>

  </div>
</template>

<script setup >
import {ref, shallowRef, onMounted, onBeforeUnmount } from "vue"
import { menuAndBar } from '@/assets/js/utils';
import { useRouter } from "vue-router";
import { ElMessage, ElTreeV2 } from 'element-plus';
import { Edit, Search, CaretBottom } from '@element-plus/icons-vue'
import axios from 'axios'
import md5 from 'js-md5';
import emitter from '@/assets/js/bus.js';
import imgDevice from '@/assets/img/dev.png';
import { nextTick } from "vue";

onMounted(() => {

  fnBrowseCompass();
  
  window.onresize = function () {
    let rect = document.body.getBoundingClientRect();
    let ww = rect.width;
    let hh = rect.height;

    if( menuBar.isMobile == true ) hh = hh - 220;
    
    divcompassWh.value = ww > hh ? hh : ww ;

    nextTick(()=>{
      if( compassType.value ) {
        fnDrawSimpleCompass();
      } else {
        fnDrawComplexCompass();
      }
    });
  }

  if( !('ondeviceorientation' in window) ) {
    orientationMsg.value = '设备不支持指南针。';
  }
  else {
    window.addEventListener('deviceorientation', function(event) {
      orientation.value = Math.floor(event.alpha * 10) / 10;
      compassAngle = Math.floor(event.alpha * 10) / 10;

      if(22.5 < event.alpha && event.alpha < 67.5) {
        orientation.value = '东南 ' + orientation.value + ' 度';
      }
      else if(67.5 < event.alpha && event.alpha < 112.5) {
        orientation.value = '正东 ' + orientation.value + ' 度';
      }
      else if(112.5 < event.alpha && event.alpha < 157.5) {
        orientation.value = '东北 ' + orientation.value + ' 度';
      }
      else if(157.5 < event.alpha && event.alpha < 202.5) {
        orientation.value = '正北 ' + orientation.value + ' 度';
      }
      else if(202.5 < event.alpha && event.alpha < 247.5) {
        orientation.value = '西北 ' + orientation.value + ' 度';
      }
      else if(247.5 < event.alpha && event.alpha < 292.5) {
        orientation.value = '正西 ' + orientation.value + ' 度';
      }
      else if(292.5 < event.alpha && event.alpha < 337.5) {
        orientation.value = '西南 ' + orientation.value + ' 度';
      }
      else {
        orientation.value = '正南 ' + orientation.value + ' 度';
      }
    });
  }

  timer.value = setInterval(() => {
        fnTimer();
    }, 400);

});

onBeforeUnmount(() => {
  window.onresize = null;
  window.addEventListener("deviceorientation", null);

  if( timer.value != null ) {
      clearInterval(timer.value);
      timer.value = null;
  }

});


const router = useRouter();
const menuBar = menuAndBar();
const timer = ref(null);
const curUrl = ref(window.curUrl);

var compassKey = '';
const divcompassWh = ref(400);
const compassType = ref(true); //// 1 简单罗盘， 2 高级罗盘
const orientation = ref(0);
const orientationMsg = ref('');
var compassAngle = 0;

var direction = [ "兌", "乾", "坎", "艮", "震", "巽", "離", "坤" ];
var directionSIM = [ "兑", "乾", "坎", "艮", "震", "巽", "离", "坤" ];
var directionEN = [ "W", "NW", "N", "NE", "E", "SE", "S", "SW" ];
var mname = [ 
        "酉", "辛", "戌", "乾", "亥", "壬", "子", "癸", "丑", "艮", 
        "寅", "甲", "卯", "乙", "辰", "巽", "巳", "丙", "午", "丁", 
        "未", "坤", "申", "庚" ];
var TENs = [ "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸" ];
var TWEs = [ "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥" ];
var hname = [ 
        "遯", "咸", "旅", "小過", "漸", "蹇", "艮", "謙", "否", "萃", 
        "晉", "豫", "觀", "比", "剝", "坤", "復", "頤", "屯", "益", 
        "震", "噬嗑", "隨", "無妄", "明夷", "賁", "既濟", "家人", "豐", "離", 
        "革", "同人", "臨", "損", "節", "中孚", "歸妹", "睽", "兌", "履", 
        "泰", "大畜", "需", "小畜", "大壯", "大有", "夬", "乾", "姤", "大過", 
        "鼎", "恆", "巽", "井", "蠱", "升", "訟", "困", "未濟", "解", 
        "渙", "坎", "蒙", "師" ];
var hnameSIM = [ 
        "遯", "咸", "旅", "小过", "渐", "蹇", "艮", "谦", "否", "萃", 
        "晋", "豫", "观", "比", "剥", "坤", "复", "颐", "屯", "益", 
        "震", "噬嗑", "随", "无妄", "明夷", "贲", "既济", "家人", "丰", "离", 
        "革", "同人", "临", "损", "节", "中孚", "归妹", "睽", "兑", "履", 
        "泰", "大畜", "需", "小畜", "大壮", "大有", "夬", "干", "姤", "大过", 
        "鼎", "恒", "巽", "井", "蛊", "升", "讼", "困", "未济", "解", 
        "涣", "坎", "蒙", "师" ];
var hphase = [ "九", "四", "三", "八", "二", "七", "六", "一" ];
var hfate = [ 
        "四", "九", "八", "三", "七", "二", "一", "六", "九", "四", 
        "三", "八", "二", "七", "六", "一", "八", "三", "四", "九", 
        "一", "六", "七", "二", "三", "八", "九", "四", "六", "一", 
        "二", "七" ];
var red = [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ], [ 1, 2, 4, 5 ], [ 2, 3, 5, 6 ] ];
var lhole = [ 2, 3, 0, 2, 0, 3, 4, 1, 
              4, 2, 2, 0, 1, 4, 2, 0,
              0, 2, 2, 3, 4, 1, 0, 2,
              2, 0, 3, 2, 2, 0, 1, 4,
              2, 3, 4, 2, 0, 3, 4, 1,
              4, 2, 2, 0, 1, 4, 2, 0,
              0, 2, 2, 3, 4, 1, 0, 2,
              2, 0, 3, 2, 2, 0, 1, 4];

const fnDrawSimpleCompass = () => {

  var divcompass = document.getElementById('divcompass');
  var compass = document.getElementById('compass');
  let ww = divcompass.clientWidth;
  let hh = divcompass.clientHeight;

  let rr = ( ww > hh ? hh : ww ) / 2 - 4;
  let xx0 = rr + 2;
  let yy0 = rr + 2;

  compass.width  = rr * 2 + 4;
  compass.height = rr * 2 + 4;

  var ctx=compass.getContext("2d");

  //// 画外框
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.strokeRect( 0, 0, rr * 2 + 4, rr * 2 + 4 );
  ctx.closePath();
  ctx.stroke();

//#region 画圆 
  //// 画最底层圆
  ctx.beginPath();
  ctx.arc( xx0, yy0, rr, 0, 2 * Math.PI );
  ctx.fillStyle="white";
  ctx.fill();
  ctx.strokeStyle = "#020e00";
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.arc( xx0, yy0, rr * 0.9, 0, 2 * Math.PI );
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.arc( xx0, yy0, rr * 0.8, 0, 2 * Math.PI );
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.arc( xx0, yy0, rr * 0.7, 0, 2 * Math.PI );
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.arc( xx0, yy0, rr * 0.45, 0, 2 * Math.PI );
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.arc( xx0, yy0, rr * 0.3, 0, 2 * Math.PI );
  ctx.closePath();
  ctx.stroke();
//#endregion
  
//#region 画十字星 竖线  
  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.moveTo( xx0 - rr * 0.3 / 18, yy0 );
  ctx.lineTo( xx0 + rr * 0.3 / 18, yy0 );
  ctx.closePath();
  ctx.stroke();

  //// 画十字星 横线
  ctx.beginPath();
  ctx.strokeStyle = "#020e00";
  ctx.moveTo( xx0, yy0 - rr * 0.3 / 18 );
  ctx.lineTo( xx0, yy0 + rr * 0.3 / 18 );
  ctx.closePath();
  ctx.stroke();

  //// 子午线
  ctx.beginPath();
  ctx.strokeStyle = "#ff0000";
  ctx.moveTo( xx0 + rr * 0.15, yy0 );
  ctx.lineTo( xx0 + rr * 0.5, yy0 );
  ctx.closePath();
  ctx.stroke();

  //// 子午线
  ctx.beginPath();
  ctx.strokeStyle = "#ff0000";
  ctx.moveTo( xx0 - rr * 0.15, yy0 );
  ctx.lineTo( xx0 - rr * 0.5, yy0 );
  ctx.closePath();
  ctx.stroke();

  //// 子午线
  ctx.beginPath();
  ctx.strokeStyle = "#ff0000";
  ctx.moveTo( xx0, yy0 + rr * 0.15 );
  ctx.lineTo( xx0, yy0 + rr * 0.5 );
  ctx.closePath();
  ctx.stroke();

  //// 子午线
  ctx.beginPath();
  ctx.strokeStyle = "#ff0000";
  ctx.moveTo( xx0, yy0 - rr * 0.15 );
  ctx.lineTo( xx0, yy0 - rr * 0.5 );
  ctx.closePath();
  ctx.stroke();

//#endregion

//#region 指南针 
  let angs = rr * 0.25 * Math.sin(compassAngle * 0.017453292519943295);
  let angc = rr * 0.25 * Math.cos(compassAngle * 0.017453292519943295);
  ctx.beginPath();
  ctx.strokeStyle = "#ff0000";
  ctx.moveTo( xx0 + angs, yy0 - angc );
  ctx.lineTo( xx0 , yy0 );
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#0000ff";
  ctx.moveTo( xx0, yy0 );
  ctx.lineTo( xx0 - angs, yy0 + angc );
  ctx.closePath();
  ctx.stroke();
//#endregion

  //// 画最里层八个
  let fntSz = fnGetFontSize8(rr);
  for( var ii = 0 ; ii < 8 ; ii++ ) {
    ctx.beginPath();
    ctx.strokeStyle = "#020e00";
    ctx.moveTo( (rr * 0.3) * Math.cos((22.5 + (ii * 45)) * 0.017453292519943295) + xx0, 
                (rr * 0.3) * Math.sin((22.5 + (ii * 45)) * 0.017453292519943295) + yy0);
    ctx.lineTo( (rr * 0.45) * Math.cos((22.5 + (ii * 45)) * 0.017453292519943295) + xx0,
                (rr * 0.45) * Math.sin((22.5 + (ii * 45)) * 0.017453292519943295) + yy0);
    ctx.closePath();
    ctx.stroke();

    ctx.save();
    ctx.translate(xx0, yy0);
    ctx.rotate((ii + 6) * 45.25 * 0.017453292519943295 );
    ctx.translate(-xx0, -yy0);
    ctx.fillStyle = "#3396f3";
    ctx.font= fntSz + "px arial";
    ctx.fillText( directionSIM[ii], xx0 - 12, yy0 - rr * 0.33 );
    ctx.restore();
  }

  fntSz = fnGetFontSize24(rr);
  for( ii = 0 ; ii < 24 ; ii++ ) {
    ctx.beginPath();
    ctx.strokeStyle = "#020e00";
    ctx.moveTo( (rr * 0.45) * Math.cos((7.5 + (ii * 15)) * 0.017453292519943295) + xx0, 
                (rr * 0.45) * Math.sin((7.5 + (ii * 15)) * 0.017453292519943295) + yy0);
    ctx.lineTo( (rr * 0.7) * Math.cos((7.5 + (ii * 15)) * 0.017453292519943295) + xx0,
                (rr * 0.7) * Math.sin((7.5 + (ii * 15)) * 0.017453292519943295) + yy0);
    ctx.closePath();
    ctx.stroke();

    ctx.save();
    ctx.translate(xx0, yy0);
    ctx.rotate((ii + 18) * 15.12 * 0.017453292519943295 );
    ctx.translate(-xx0, -yy0);
    let jj = Math.floor(ii / 3);
    if ( (jj % 2) == 0) {
      ctx.fillStyle = "#000000";
    } else {
      ctx.fillStyle = "#ff0000";
    } 
    ctx.font= fntSz + "px arial";
    ctx.fillText( mname[ii], xx0 - 14, yy0 - rr * 0.55 );
    ctx.restore();
  
  }
  
  fntSz = fnGetFontSize72();
  for( ii = 0 ; ii < 72 ; ii++ ) {
    ctx.beginPath();
    ctx.strokeStyle = "#020e00";
    ctx.moveTo( (rr * 0.7) * Math.cos((2.5 + (ii * 5)) * 0.017453292519943295) + xx0, 
                (rr * 0.7) * Math.sin((2.5 + (ii * 5)) * 0.017453292519943295) + yy0);
    ctx.lineTo( (rr * 0.8) * Math.cos((2.5 + (ii * 5)) * 0.017453292519943295) + xx0,
                (rr * 0.8) * Math.sin((2.5 + (ii * 5)) * 0.017453292519943295) + yy0);
    ctx.closePath();
    ctx.stroke();

    if ( (ii % 6) != 0) {
      ctx.save();
      ctx.translate(xx0, yy0);
      ctx.rotate((ii - 3) * 5 * 0.017453292519943295 );
      ctx.translate(-xx0, -yy0);
      ctx.fillStyle = "#000000";
      ctx.font= fntSz + "px arial";
      let jj = Math.floor(ii/6);
      ctx.fillText( TWEs[jj], xx0 - 5, yy0 - rr * 0.71 );
      ctx.restore();

      ctx.save();
      ctx.translate(xx0, yy0);
      ctx.rotate((ii - 3) * 5 * 0.017453292519943295 );
      ctx.translate(-xx0, -yy0);
      ctx.fillStyle = "#000000";
      ctx.font= fntSz + "px arial";
      if( ii % 6 == 1 ) {
        ctx.fillText( TENs[ Math.floor(ii / 6) % 10], xx0 - 5, yy0 - rr * 0.76 );
      }
      else {
        jj = (Math.floor(ii / 6) % 10) + ((ii % 6) - 1) * 2;
        ctx.fillText( TENs[ jj % 10], xx0 - 5, yy0 - rr * 0.76 );
      }
      ctx.restore();
    } 
  }

  fntSz = fnGetFontSize72();
  for( ii = 0 ; ii < 120 ; ii++ ) {
    ctx.beginPath();
    ctx.strokeStyle = "#020e00";
    ctx.moveTo( (rr * 0.8) * Math.cos((1.5 + (ii * 3)) * 0.017453292519943295) + xx0, 
                (rr * 0.8) * Math.sin((1.5 + (ii * 3)) * 0.017453292519943295) + yy0);
    ctx.lineTo( (rr * 0.9) * Math.cos((1.5 + (ii * 3)) * 0.017453292519943295) + xx0,
                (rr * 0.9) * Math.sin((1.5 + (ii * 3)) * 0.017453292519943295) + yy0);
    ctx.closePath();
    ctx.stroke();

    let mm = Math.floor(ii/10);
    let nn = ii % 10;
    if( nn == 1 || nn == 3 || nn == 6 || nn == 8 ) {
      ctx.save();
      ctx.translate(xx0, yy0);
      ctx.rotate((ii - 2) * 3 * 0.017453292519943295 );
      ctx.translate(-xx0, -yy0);
      ctx.fillStyle = "#000000";
      ctx.font= fntSz + "px arial";
      ctx.fillText( TWEs[mm], xx0 - 5, yy0 - rr * 0.81 );

      //// 
      if( nn == 1 ) {
        if( mm % 2 == 0 ) {
          ctx.fillText( '丙', xx0 - 5, yy0 - rr * 0.86 );
        }
        else {
          ctx.fillText( '丁', xx0 - 5, yy0 - rr * 0.86 );
        }
      }
      if( nn == 3 ) {
        if( mm % 2 == 0 ) {
          ctx.fillText( '庚', xx0 - 5, yy0 - rr * 0.86 );
        }
        else {
          ctx.fillText( '辛', xx0 - 5, yy0 - rr * 0.86 );
        }
      }
      if( nn == 6 ) {
        if( mm % 2 == 0 ) {
          ctx.fillText( '丙', xx0 - 5, yy0 - rr * 0.86 );
        }
        else {
          ctx.fillText( '丁', xx0 - 5, yy0 - rr * 0.86 );
        }
      }
      if( nn == 8 ) {
        if( mm % 2 == 0 ) {
          ctx.fillText( '庚', xx0 - 5, yy0 - rr * 0.86 );
        }
        else {
          ctx.fillText( '辛', xx0 - 5, yy0 - rr * 0.86 );
        }
      }
      ctx.restore();

    }
   
  }

  fntSz = fnGetFontSize72();
  for( ii = 0 ; ii < 360 ; ii++ ) {
    if( ii % 5 == 0 ) {
      if( ii % 10 == 0 ) {
        
        ctx.beginPath();
        ctx.strokeStyle = "#020e00";
        ctx.moveTo( (rr * 0.96) * Math.cos(ii * 0.017453292519943295) + xx0, 
                (rr * 0.96) * Math.sin(ii * 0.017453292519943295) + yy0);
        ctx.lineTo( (rr ) * Math.cos(ii * 0.017453292519943295) + xx0,
                (rr ) * Math.sin(ii * 0.017453292519943295) + yy0);
        ctx.closePath();
        ctx.stroke();

        ctx.save();
        ctx.translate(xx0, yy0);
        ctx.rotate(ii * 0.017453292519943295 );
        ctx.translate(-xx0, -yy0);
        ctx.fillStyle = "#000000";
        ctx.font= fntSz + "px arial";
        ctx.fillText( ii, xx0 - 5, yy0 - rr * 0.92 );
        ctx.restore();
        
      }
      else {
        
        ctx.beginPath();
        ctx.strokeStyle = "#020e00";
        ctx.moveTo( (rr * 0.97) * Math.cos(ii * 0.017453292519943295) + xx0, 
                (rr * 0.97) * Math.sin(ii * 0.017453292519943295) + yy0);
        ctx.lineTo( (rr ) * Math.cos(ii * 0.017453292519943295) + xx0,
                (rr ) * Math.sin(ii * 0.017453292519943295) + yy0);
        ctx.closePath();
        ctx.stroke();
        
      }
    }
    else {
      ctx.beginPath();
      ctx.strokeStyle = "#020e00";
      ctx.moveTo( (rr * 0.98) * Math.cos(ii * 0.017453292519943295) + xx0, 
                (rr * 0.98) * Math.sin(ii * 0.017453292519943295) + yy0);
      ctx.lineTo( (rr ) * Math.cos(ii * 0.017453292519943295) + xx0,
                (rr ) * Math.sin(ii * 0.017453292519943295) + yy0);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

const fnDrawComplexCompass = () => {

}

const fnGetFontSize8 = ( ww ) => {
  let rtn = '28';
  rtn =  Math.floor(ww * 0.1).toString();
  return rtn;
} 

const fnGetFontSize24 = ( ww ) => {
  let rtn = '20';
  rtn =  Math.floor(ww * 0.08).toString();
  return rtn;
} 

const fnGetFontSize72 = ( ww ) => {
  let rtn = '14';
  rtn =  Math.floor(ww * 0.05).toString();
  return rtn;
} 

const fnTimer = () => {

  if( compassType.value ) {
    fnDrawSimpleCompass();
  } else {
    fnDrawComplexCompass();
  }

}

const fnBrowseCompass = () => {
  //// 访问 /api/user/browse  获取用户浏览记录
  axios.get(curUrl.value + "/api/user/browse/compass"
    ).then((res) => {
        const oo = res.data;
        if( oo.code == 1000) {
            var dd = JSON.parse(oo.result);
            compassKey = dd.key;
        }
    }).catch(err => {
        console.log(err)
        ElMessage('未知错误');
    });
}

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
        overflow-y: auto;

        top: 85px;
        left: 2px;
        /* width: calc(100vw - 6px); */
        height: calc(100vh - 90px) !important; 

    }

    .car_sys {
      /* overflow: hidden; */
      height: calc(100vh - 92px);
      background: #212121;
      border-radius: 4px;
      z-index: 1;
     }

    .search_bar {
        /* position: absolute; */
        position: relative;
        /* left: 50px;
        top: 30px; */

        width: 300px;
        background: rgba(79, 87, 96, 0.5);
        z-index: 3;
        border-radius: 8px;
        .v-field--single-line {
            background: rgba(0, 0, 0, 0.2);
        }
        .cur {
            background-image: linear-gradient(to right, #4eebe4, #4eebe4);
        }
        .de {
            background-image: linear-gradient(to right, #bc78f2, #bc78f2);
        }
    }

    .bottom_bar {
          height: calc(100vh / 3);
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          /* overflow: hidden; */
          z-index: 200;
          background: rgba(79, 87, 96, 0.9);

    }

    :deep(.el-tree-node:focus > .el-tree-node__content) {
        background-color: #66b1ff87 !important;
    }
    :deep(.el-tree-node__content:hover) {
        background-color: #66b1ff87 !important;
    } 
    :deep(.el-tree--highlight-current .el-tree-node__content.is-current > .el-tree-node__content) {
        background-color: #66b1ff87 !important;
    }

    .el-table {
      --el-table-row-hover-bg-color: #424f57;
      --el-table-current-row-bg-color: #424f57;
    }

    :deep(.el-input__wrapper) {
      border: none !important;
      background: rgba(79, 87, 96, 0.9);
    }
    :deep(.el-input__inner) {
      border: none !important;
      color: white;
      background: rgba(79, 87, 96, 0.9);
    }

</style>