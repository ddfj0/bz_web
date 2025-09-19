<template>
  <div class="main_area" >
    <div class="ma-2" style="width: 100%;">
              <div class="d-flex ">
                  <span>
                    <img src="@/assets/img/icon-title.png" />
                  </span>
                  <div >
                      <span class="mx-2" style="color: white;"> 智能代理 </span>
                  </div>
                  <div >
                    <v-btn class="ml-4" style="font-size: 12px;height: 24px;" variant="outlined" @click="router.push('home')" >关闭页面</v-btn>
                  </div>
              </div>
              <div>
                建设中...
                </div>
      </div>
  </div>
</template>

<script setup>
    //import {ref} from "vue"
    import { menuAndBar } from '@/assets/js/utils';
    import { useRouter } from "vue-router";

    const menuBar = menuAndBar();
    const router = useRouter();

    const fnShowMenu = () => {
        console.info(menuBar.posLeft);
        console.info(menuBar.isMobile);
    };
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

</style>