<script setup lang="ts">
import { fetchData } from '@/server/fetchData'
import SkillItem from '@/components/skills/SkillItem.vue'
export interface SkillInfoProps {
  title: string
  icon?: string
  level?: number
  detail?: SkillInfoProps[]
}
const props = defineProps<{
  isSection?: boolean,
}>()
</script>
<script lang="ts">
export default {
  data() {
    return {
      data: null as { [key: string]: SkillInfoProps } | null
    }
  },
  methods: {
    async getSkillInfo() {
      const data: { [key: string]: SkillInfoProps } = await fetchData('/data/skill.json')
      this.data = data
    }
  },
  mounted() {
    this.getSkillInfo()
  },
}
</script>
<template>
  <section v-if="data" class='skill p-2 m-5 shadow-md bg-white grid grid-cols-2 gap-4 relative'
    :class="{ full: !props.isSection, 'p-5': !props.isSection }">
    <SkillItem class="frontEnd-area" :data="data.frontEnd" />
    <SkillItem class="backEnd-area" :data="data.backEnd" />
    <SkillItem class="webLayout-area" :data="data.webLayout" />
    <SkillItem class="other-area" :data="data.other" />

  </section>
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