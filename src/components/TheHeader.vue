<script setup lang="ts">
import HeaderNav from '@/components/header/HeaderNav.vue'
import HeaderText from '@/components/header/HeaderText.vue'
</script>
<template>
	<header class='header grid-rows-1 grid grid-cols-9 mt-8 ml-2 mb-8 w-full print:mb-0 print:mt-0'>
		<h1
			class='header-logo title p-5 pb-2 max-w-[370px]  bg-white rounded-lg shadow-md relative flex flex-col col-start-1 col-span-11 md:max-w-[400px]  md:col-span-4 md:min-w-[330px] order-1 print:flex-row print:flex-wrap print:items-center print:p-1 print:shadow-none print:before:content-none'>
			<span class="text-5xl sm:text-6xl font-semibold text-cyan-950">陳柔妡</span>
			<span class="text-3xl sm:text-4xl font-semibold text-right text-cyan-800 print:ml-3">Lucy Chen</span>
			<span class="text-xl text-left font-semibold text-neutral-700 mt-auto print:mt-2 ">s3267920@gmail.com</span>
		</h1>
		<Suspense>
			<HeaderText class="header-text" />
			<template #fallback>
				<div
					class="flex flex-col justify-center col-span-3 row-span-2 bg-cyan-50 bg-opacity-40 p-3 rounded-md cursor-pointer transition-colors  duration-300 hover:bg-opacity-100 ">
					Loading...</div>
			</template>
		</Suspense>
		<HeaderNav class="header-nav print-hidden"></HeaderNav>
	</header>
</template>

<style lang="scss" scoped>
.header {
	.title {
		box-shadow: 0 0 0px 2px #ffffff;
		max-height: 12rem;

		&::before {
			background-color: #2a3944;
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			left: -8px;
			bottom: -8px;
			border-radius: 0.5rem;
			z-index: -1;
			box-shadow: 0 0 4px 4px #2a3944;
		}

		@media print {
			@apply shadow-none;

			&::before {
				content: none;
			}
		}
	}
}
</style>