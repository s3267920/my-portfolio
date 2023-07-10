<script setup lang="ts">
import SectionBlock from '@/components/common/SectionBlock.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AboutMe from '@/components/other/AboutMe.vue';
const props = defineProps<{
  isSection?: boolean,
}>()
</script>
<template>
  <SectionBlock class='other ' :is-section="props.isSection">
    <SectionTitle>About Me</SectionTitle>
    <AboutMe class="mt-2"></AboutMe>
    <p class=" p-2 mt-auto text-right text-neutral-400 text-lg">
      Email: s3267920@gmail.com
    </p>
  </SectionBlock>
</template>
