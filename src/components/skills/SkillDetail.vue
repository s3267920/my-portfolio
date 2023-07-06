<script setup lang="ts">
import type { SkillInfoProps } from '@/views/SkillsView.vue';

defineProps<{
	data?: SkillInfoProps
}>()
</script>
<template>
	<div class="p-2 ">
		<h4 class=" text-2xl font-semibold text-cyan-800">◎ {{ data?.title }}</h4>
		<ul class=" ml-12" v-if="data">
			<li class=" list-disc text-xl" v-for="item in data.detail" :key="item.title">{{ item.title }}</li>
		</ul>
	</div>
</template>