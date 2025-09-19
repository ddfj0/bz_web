<template>
    <div id="menu-activator" class="ai_sprite" @mousedown="fnDrag($event)" ref="feedbackRef" >
      <img src="@/assets/img/ai_sprite.gif" style="height: 50px; width: 50px; position: absolute; left: -25px; top: -25px;" @click="fnShowMenu" alt="AI 操作"/>
    </div>
    <v-menu activator="#menu-activator" theme="dark" style="position: absolute; top: -25px;" >
      <v-list>
        <v-list-item >
          <div class="d-flex justify-start" @click="fnMenuClick('aiglm')" style="cursor: pointer;" >
              <v-icon icon="mdi-chart-box"></v-icon>
              <div class="ml-2 ">AI 对话</div>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item >
          <div class="d-flex justify-start" @click="fnMenuClick('aiagent')" style="cursor: pointer;" >
              <v-icon icon="mdi-chart-box"></v-icon>
              <div class="ml-2 ">光伏测算 Agent</div>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item >
          <div class="d-flex justify-start" @click="fnMenuClick('aiagent')" style="cursor: pointer;" >
              <v-icon icon="mdi-chart-box"></v-icon>
              <div class="ml-2 ">储能测算 Agent</div>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script setup>
    import {ref, onMounted} from "vue"
    import { menuAndBar } from '@/assets/js/utils';
    import { useRouter } from "vue-router";

    const menuBar = menuAndBar();
    const router = useRouter();
    const feedbackRef = ref();

    var xPos = 0;
    var yPos = 0;
    var bMove = false;

    
    onMounted(() => {
      feedbackRef.value.style.left = menuBar.getAiSpritePosx();
      feedbackRef.value.style.top = menuBar.getAiSpritePosy();
    });

    const fnShowMenu = () => {
      if( bMove ){
        return;
      }
    };

    const fnDrag = (e) => {
        const Left = feedbackRef.value;
        xPos = Left.style.left;
        yPos = Left.style.top;
        bMove = false;
        document.onmousemove = function (e) {
          e.preventDefault();
          const distx = e.clientX;
          const disty = e.clientY;

          if( distx < 20 || disty < 100 ){
            return;
          }

          const rect = document.body.getBoundingClientRect();
          if( distx > (rect.width - 20) || disty > (rect.height - 20) ){
            return;
          }
          
          Left.style.top = disty + "px";
          Left.style.left = distx + "px";
          menuBar.setAiSpritePosx(Left.style.left);
          menuBar.setAiSpritePosy(Left.style.top);
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          if( Left.style.left != xPos || Left.style.top != yPos ){
            bMove = true;
          }
        }; 
    };

    const fnMenuClick = (url) => {
        router.push(url);
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
 
  .ai_sprite {
    position: absolute;
    top: calc( 20% );
    left: 20px; 
    width: 8px;
    height: 8px;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
  }

</style>