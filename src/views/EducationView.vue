<script setup lang="ts">
import SectionBlock from '@/components/common/SectionBlock.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import EducationItem from '@/components/education/EducationItem.vue';
import { fetchData } from '@/server/fetchData';
import { useLanguageStore } from '@/stores/language';
import type { I18NData } from '@/typings/common';
import type { Education } from '@/typings/education';
import { computed } from 'vue';
const locale = useLanguageStore()
const result: I18NData<Education[]> = await fetchData('/data/education.json')
const data = computed(() => result[locale.currentLocale])
</script>
<template>
  <SectionBlock class='education' :is-section="true">
    <SectionTitle>Education</SectionTitle>
    <div class='flex flex-col w-full' v-for="(item, index) in data" :key='index'>
      <EducationItem :data='item' />
    </div>
  </SectionBlock>
</template>
<style></style>
