<script setup lang="ts">
import type { ProjectProp } from '@/typings/ProjectProp';
const props = defineProps<{
	project: ProjectProp
}>()
</script>

<template>
	<div class="text-base text-neutral-800 print:break-after-all">
		<div class="text-lg font-bold mb-1">{{ project.projectName }}</div>
		<ul class="pl-2 ">
			<li class="mb-1 text-lg " v-for="(projectDesc, i) in props.project.description"
				:key="props.project.projectName + i">
				◆ {{ projectDesc }}
			</li>
		</ul>

	</div>
</template>

