
<script setup lang="ts">
const props = defineProps<{
	companyName: string;
	title: string;
	time: {
		start: string;
		end: string;
	};
}>()
</script>
<template>
	<div
		class="font-semibold text-xl lg:text-2xl text-neutral-700 flex flex-wrap md:justify-between print:justify-between print:flex-nowrap">
		<span class="font-semibold order-1 w-full mr-4 md:w-auto  print:w-auto">{{ title }}</span>
		<span class="font-semibold ml-2 order-3 md:order-2  print:order-2">{{ time.start }} - {{
			time.end }}</span>
		<span class="order-2 text-xl ml-auto font-semibold text-cyan-900  md:font-normal print:font-normal">{{ companyName
		}}</span>
	</div>
</template>

