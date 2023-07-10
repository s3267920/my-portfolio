<script setup lang="ts">
import WorkProject from '@/components/workExperience/WorkProject.vue'
import type { ProjectProp } from '@/typings/ProjectProp';
const props = defineProps<{
	experience: ProjectProp[]
}>()
</script>


<template>
	<div class=" p-1 pl-4 text-base ">
		<WorkProject v-for="project in props.experience" :key="project.projectName" :project="project"></WorkProject>
	</div>
</template>

