<template>
  <v-app theme="dark" class="d-flex justify-center">
    <AppBar />
    <FeWorld />
  </v-app>
</template>

<script setup>
  import AppBar from '@/components/AppBar.vue';
  import FeWorld from '@/components/FeWorld.vue';

  import { ref, onMounted } from 'vue';
  import { ElMessage } from 'element-plus';
  import axios from 'axios';

    onMounted(() => {
        //fnGetTitle();
    });

    var curUrl = ref(window.curUrl);


</script>
