<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SwitchLanguageButton from '@/components/header/SwitchLanguageButton.vue'
</script>
<template>
	<div class="wrapper flex  order-2 col-start-1 md:col-start-5 col-end-13   lg:col-start-1 lg:col-end-5">
		<nav>
			<RouterLink aria-label="All Info" class="rounded-sm" to="/">All</RouterLink>
			<RouterLink aria-label="Skills" class="rounded-sm" to="/skills">Skills</RouterLink>
			<RouterLink aria-label="Experience" class="rounded-sm" to="/experience">Experience</RouterLink>
			<RouterLink aria-label="Other" class="rounded-sm" to="/other">Other</RouterLink>
			<SwitchLanguageButton />
		</nav>
	</div>
</template>
<style scoped lang="scss">
nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
	height: 2.5rem;

	a {
		text-decoration: none;
		color: var(--color-cyan-light);
		font-weight: bold;
		transition: color 0.3s ease-in-out, background-color 0.5s ease-in-out, font-size 0.5s ease-in-out;
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-left: 1px solid var(--color-border);
		position: relative;
		cursor: pointer;

		&[aria-label]:after {
			opacity: 0;
			content: attr(aria-label);
			color: var(--vt-c-white);
			font-size: 1rem;
			padding: 4px 8px;
			position: absolute;
			left: 0;
			bottom: -2.5rem;
			white-space: nowrap;
			z-index: 20;
			background: var(--color-cyan);
			transition: opacity 0.5s;
			border-radius: 5px;
			pointer-events: none;
		}

		&[aria-label]:hover:after {
			opacity: 1;
			transition-delay: 0.5s;
		}

		&:first-of-type {
			border: 0;
		}

		&:hover {
			color: var(--vt-c-white);
			background-color: var(--color-cyan-06);
		}

		&.router-link-exact-active {
			color: var(--color-text);
			font-size: 1.25rem;
		}

		&.router-link-exact-active:hover {
			background-color: transparent;
		}
	}
}

@media (min-width: 1024px) {
	.wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;
		margin-top: 1rem;
	}
}
</style>