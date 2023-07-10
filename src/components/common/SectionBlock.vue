<script setup lang="ts">
const props = defineProps<{
	isSection?: boolean,
}>()
</script>
<template>
	<section class='p-2 m-5 shadow-md bg-white  flex flex-col print:m-2 print:shadow-none '
		:class="{ full: !props.isSection, 'p-5': !props.isSection }">
		<slot></slot>
	</section>
</template>