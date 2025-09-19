<template>
  <v-app theme="dark">
    <AppBar />
    <mypay />
  </v-app>
</template>

<script setup>
  import AppBar from '@/components/AppBar.vue';
  import mypay from '@/components/MyPay.vue';

  import { ref, onMounted } from 'vue';
  import { ElMessage } from 'element-plus';
  import axios from 'axios';

    onMounted(() => {
        //fnGetTitle();
    });

    var curUrl = ref(window.curUrl);


</script>
