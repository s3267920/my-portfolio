<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue'
import HeaderText from '@/components/header/HeaderText.vue'
</script>
<template>
	<header class='header grid-rows-1 grid grid-cols-9 mt-8 ml-2 mb-8 w-full'>
		<h1
			class='header-logo title p-5 text-7xl bg-white rounded-lg shadow-md relative flex flex-col col-start-1 col-span-11 md:max-w-[400px]  md:col-span-4 md:min-w-[330px] order-1'>
			<span class="font-semibold text-cyan-950">陳柔妡</span>
			<span class="text-4xl text-right text-cyan-800">Lucy Chen</span>
		</h1>
		<Suspense>
			<HeaderText class="header-text" />
			<template #fallback>
				<div
					class="flex flex-col justify-center col-span-3 row-span-2 bg-cyan-50 bg-opacity-40 p-3 rounded-md cursor-pointer transition-colors  duration-300 hover:bg-opacity-100 ">
					Loading...</div>
			</template>
		</Suspense>
		<HeaderNav class="header-nav"></HeaderNav>
	</header>
</template>

<style lang="scss" scoped></style>