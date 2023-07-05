<script setup lang="ts">
defineProps<{
  isSection?: boolean
}>()
</script>
<template>
  <article class='skill p-2 m-5 shadow-md' :class="{ full: !isSection }">
    <h1>This is an skill page</h1>
  </article>
</template>

<style lang='scss'>
@media (min-width: 1024px) {
  .skill {
    display: flex;
    align-items: center;

    &.full {
      min-height: 100vh;
    }
  }
}
</style>