<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue'
import HeaderText from '@/components/header/HeaderText.vue'
</script>
<template>
	<header class='header grid-rows-1 grid grid-cols-5  mt-8 ml-2 mb-8 w-full'>
		<h1
			class='title p-5 max-w-[400px] text-7xl bg-white rounded-lg shadow-md relative flex flex-col col-span-2'>
			<span class="font-semibold text-cyan-950">陳柔妡</span>
			<span class="text-4xl text-right text-cyan-800">Lucy Chen</span>
		</h1>
		<HeaderText />
		<HeaderNav></HeaderNav>
	</header>
</template>
