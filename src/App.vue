<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main className='main grid'>
    <RouterView />
  </main>
</template>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

