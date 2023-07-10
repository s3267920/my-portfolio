<script setup lang="ts">
const props = defineProps<{
	companyName: string
	description: string[]
}>()
</script>

<template>
	<div class="p-2 pl-8 text-lg">
		<ul class="list-disc">
			<li v-for="(desc, i) in props.description" :key="props.companyName + i">
				{{ desc }}</li>
		</ul>
	</div>
</template>