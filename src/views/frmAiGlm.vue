<template>
  <v-app theme="dark">
    <AppBar />
    <AiGlm />
  </v-app>
</template>

<script setup>
  import AppBar from '@/components/AppBar.vue';
  import AiGlm from '@/components/AiGlm.vue';

  import { ref, onMounted } from 'vue';
  import { ElMessage } from 'element-plus';
  import axios from 'axios';

    onMounted(() => {
        //fnGetTitle();
    });

    var curUrl = ref(window.curUrl);

    const fnGetTitle = () => {
        axios.get(curUrl.value + '/api/title').then((res) => {
            if (res.data) {
                const oo = res.data;
                if (oo.code == 1000) {
                    var dd = JSON.parse(oo.result);
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

</script>
