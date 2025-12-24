import { ref } from 'vue';
import { defineStore } from 'pinia';

export const menuAndBar = defineStore('main', () => {
    // 初始化是否是移动端设备
    window.addEventListener('resize', () => {
        const res = getIsMobile();
        if (res !== isMobile.value) {
            isMobile.value = res;
        }
    });

    const posLeft = ref(122);
    const posWidth = ref(1280);
    const posHeight = ref(900);
   
    const { body } = document;
    const getIsMobile = () => {
        const rect = body.getBoundingClientRect();
        posLeft.value = 124;
        if (!document.hidden) {
            const res = rect.width - 1 < 1280;
            if( res == true ) {
                posLeft.value = 2;
                posWidth.value = rect.width - 6;
                posHeight.value = rect.height - 6;
            }
            else {
                //// posWidth.value = rect.width - posLeft.value - 4;
                posWidth.value = rect.width - 6;
                posHeight.value = rect.height - 6;
            }
            return res;
        } else {
            return false;
        }
        
    };
    const _isMobile = getIsMobile();
    const isMobile = ref(_isMobile);

    //// 定义其他全局变量
    const aiSpritePosx = ref(100);
    const aiSpritePosy = ref(200);
    function setAiSpritePosx(x) {
        aiSpritePosx.value = x;
    }
    function setAiSpritePosy(y) {
        aiSpritePosy.value = y;
    }
    function getAiSpritePosx() {
        return aiSpritePosx.value;
    }
    function getAiSpritePosy() {
        return aiSpritePosy.value;
    }

    //// 用户信息
    const user_id = ref(0);
    const user_name = ref("");
    const run_status = ref("");

    //// 八字日期
    var date = new Date();
    const bzYear = ref(date.getFullYear());
    const bzMonth = ref(date.getMonth() + 1);
    const bzDay = ref(date.getDate());
    const bzHour = ref(date.getHours());
    const boolSex = ref(true);

    const appid = ref("your_wx_appid_here");
    const openid = ref("your_wx_openid_here");

    return { isMobile, posLeft, posWidth, posHeight, 
        user_id, user_name, run_status,
        bzYear, bzMonth, bzDay, bzHour, boolSex,
        appid, openid,
        aiSpritePosx, aiSpritePosy, setAiSpritePosx, setAiSpritePosy, getAiSpritePosx, getAiSpritePosy };
});
