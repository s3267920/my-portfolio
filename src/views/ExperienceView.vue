<script setup lang="ts">
import SectionBlock from '@/components/common/SectionBlock.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import WorkExperienceBlock from '@/components/workExperience/WorkExperienceBlock.vue'
import type { I18NData } from '@/typings/common';
import type { Experience } from '@/typings/experience';
import { fetchData } from '@/server/fetchData';
import { useLanguageStore } from '@/stores/language';
import { computed, ref, onMounted } from 'vue';
const props = defineProps<{
  isSection?: boolean
}>()
const locale = useLanguageStore();
const experienceData = ref<I18NData<Experience[]> | null>(null);
const getInfo = async () => {
  const result: I18NData<Experience[]> = await fetchData('/data/workExperience.json')
  experienceData.value = result
}
onMounted(() => { getInfo() })
const data = computed(() => experienceData.value && experienceData.value[locale.currentLocale]);
</script>
<template>
  <SectionBlock class='experience' :is-section="props.isSection">
    <SectionTitle>Work Experience</SectionTitle>
    <div v-if="data" class="grid">
      <div class="" v-for="(item, index) in data" :key="index">
        <WorkExperienceBlock :data="item" />
      </div>
    </div>
  </SectionBlock>
</template>

<style></style>
