<script setup lang="ts">
import SectionBlock from '@/components/common/SectionBlock.vue'
import SkillsView from './SkillsView.vue';
import ExperienceView from './ExperienceView.vue';
import EducationView from './EducationView.vue';
import OtherView from './OtherView.vue';
</script>

<template>
  <div class=''>
    <Suspense>
      <div className='all-info grid  row-start-2 min-h-screen'>
        <SkillsView is-section />
        <ExperienceView is-section />
        <EducationView />
        <OtherView is-section />
      </div>
      <template #fallback>
        <SectionBlock>Loading...</SectionBlock>
      </template>
    </Suspense>
  </div>
</template>
