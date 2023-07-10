<script setup lang="ts">
import { fetchData } from '@/server/fetchData'
import SectionBlock from '@/components/common/SectionBlock.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import SkillItem from '@/components/skills/SkillItem.vue'
import { onMounted, ref } from 'vue'
export interface SkillInfoProps {
  title: string
  icon?: string
  level?: number
  detail?: SkillInfoProps[]
}
const props = defineProps<{
  isSection?: boolean,
}>()
const data = ref<{ [key: string]: SkillInfoProps } | null>(null);
const getSkillInfo = async () => {
  const result: { [key: string]: SkillInfoProps } = await fetchData('/data/skill.json')
  data.value = result
}
onMounted(() => {
  getSkillInfo()
})
</script>
<template>
  <SectionBlock class='relative' :is-section="props.isSection">
    <SectionTitle>SKILLS</SectionTitle>
    <div v-if="data" class='skill w-full bg-white grid grid-cols-2 grid-rows-2 gap-2'>
      <SkillItem class="frontEnd-area" :data="data.frontEnd" />
      <SkillItem class="backEnd-area" :data="data.backEnd" />
      <SkillItem class="webLayout-area" :data="data.webLayout" />
      <SkillItem class="other-area" :data="data.other" />
    </div>

  </SectionBlock>
</template>

<style lang='scss'>
@media (min-width: 1024px) {
  .skill {
    grid-template-areas:
      'front-end back-end'
      'webLayout other';

    .frontEnd-area {
      grid-area: front-end;
    }

    .backEnd-area {
      grid-area: back-end;
    }

    .webLayout-area {
      grid-area: webLayout;
    }

    .other-area {
      grid-area: other;
    }
  }

}
</style>