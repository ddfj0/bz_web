<template>
  <div class="main_area" >
    <div class="ma-2" style="width: 100%;">
              <div class="d-flex ">
                  <span>
                    <img src="@/assets/img/icon-title.png" />
                  </span>
                  <div >
                      <span class="mx-2" style="color: white;"> 我的信息 </span>
                  </div>
                  <div >
                    <v-btn class="ml-4" style="font-size: 12px;height: 24px;" variant="outlined" @click="router.push('home')" >关闭页面</v-btn>
                  </div>
              </div>
      </div>
  </div>
</template>

<script setup >
import { menuAndBar } from '@/assets/js/utils';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import axios from 'axios'
import { ElMessage } from 'element-plus';
import { useRouter } from "vue-router";

onMounted(() => {
});
onBeforeUnmount(() => {
});

const router = useRouter();
const menuBar = menuAndBar();
var curUrl = ref(window.curUrl);
var userConfig;



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
        overflow: hidden;

        top: 85px;
        left: 2px;
        width: calc(100vw - 6px );
        height: calc(100vh - 90px) !important; 
    }

  .car_sys {
      overflow: hidden;
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
          height: 300px;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          overflow: hidden;
          z-index: 200;
          background: rgba(79, 87, 96, 0.5);

    }

    .el-table {
      --el-table-row-hover-bg-color: #424f57;
      --el-table-current-row-bg-color: #424f57;
    }

</style>