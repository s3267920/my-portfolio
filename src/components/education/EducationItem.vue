<script setup lang="ts">
import { type Education } from '@/typings/education'
defineProps<{
	data: Education
}>()
</script>
<template>
	<div class="p-3 flex text-xl">
		<div class="text-cyan-900  font-bold">
			{{ data.school }} - {{ data.department }}
		</div>
		<span class="text-cyan-700  font-bold ml-2">{{ data.time.start }} ~ {{ data.time.end }}</span>
	</div>
</template>
