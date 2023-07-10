<script setup lang="ts">
import SectionBlock from '@/components/common/SectionBlock.vue'
import SkillsView from './SkillsView.vue';
import ExperienceView from './ExperienceView.vue';
import EducationView from './EducationView.vue';
import OtherView from './OtherView.vue';
</script>

<template>
  <div>
    <Suspense>
      <div className='all-info grid row-start-2 min-h-screen'>
        <SkillsView is-section />
        <ExperienceView is-section />
        <OtherView is-section class="print-hidden " />
        <EducationView />
      </div>
      <template #fallback>
        <SectionBlock>Loading...</SectionBlock>
      </template>
    </Suspense>
  </div>
</template>
