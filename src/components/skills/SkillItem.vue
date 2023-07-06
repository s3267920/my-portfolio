<script setup lang="ts">
import type { SkillInfoProps } from '@/views/SkillsView.vue';
import SkillDetail from '@/components/skills/SkillDetail.vue'
defineProps<{
	data?: SkillInfoProps
}>()
</script>
<template>
	<div class="p-2 flex flex-col flex-wrap items-start justify-start">
		<h3 class=" text-3xl font-semibold text-neutral-600 capitalize">{{ data?.title }}</h3>
		<div class="p-2 " v-if="data">
			<div v-for="item in data.detail" :key="item.title">
				<SkillDetail :data="item" />
			</div>
		</div>

	</div>
</template>