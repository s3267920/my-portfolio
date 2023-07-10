<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main class='main grid bg-white shadow-md rounded-lg print:shadow-none flex-1'>
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.page-enter-active {
  animation: pageSlide 1s ease-in 1;
  transform-style: preserve-3d;
}

.page-leave-active {
  transform-style: preserve-3d;
  animation: pageSlide 1s linear 1 reverse;
}

@keyframes pageSlide {
  0% {
    min-height: calc(100vh - 4rem);
    transform: rotateY(180deg) translate(500px, 0);
  }

  40% {
    transform: rotateY(90deg) translate(100px, 0);
  }

  100% {
    min-height: auto;
    transform: rotateY(0deg) translate(0, 0);
  }
}
</style>