<script setup lang="ts">
import WorkCompanyInfo from '@/components/workExperience/WorkCompanyInfo.vue'
import WorkExperience from '@/components/workExperience/WorkExperience.vue'
import WorkExperienceDesc from '@/components/workExperience/WorkExperienceDesc.vue'
import type { Experience } from '@/typings/experience';
const props = defineProps<{
	data: Experience
}>()
</script>
<template>
	<div class="p-2 mb-2">
		<WorkCompanyInfo :companyName="data.companyName" :title="data.title" :time="data.time" />
		<WorkExperienceDesc v-if="data.description" :companyName="data.companyName"
			:description="data.description" />
		<WorkExperience v-if="data.experience" :experience="data.experience"></WorkExperience>
	</div>
</template>


