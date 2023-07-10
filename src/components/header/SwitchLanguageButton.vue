<script setup lang="ts">
import type { langKey } from '@/typings/language';
import { languages } from '@/constant/language'
import { useLanguageStore } from '@/stores/language';
const localeStore = useLanguageStore()
const toggleLanguage = (value: langKey) => {
	localeStore.setLocale(value)
}
</script>
<template>
	<div class="btn-switch-lang inline-flex border-solid border-2  border-cyan-900 rounded-md ">
		<button class="p-1 border-r-2 border-neutral-400 border-opacity-50 last:border-r-0"
			v-for="(lang, key) in languages" :key="key"
			:class="{ active: localeStore.currentLocale === key }"
			@click="toggleLanguage(key)" :aria-label="lang" :aria-details="'Switch to ' + lang">{{ lang }}</button>
	</div>
</template>
<style lang="scss">
.btn-switch-lang {
	button {
		@apply text-cyan-800;
		transition: box-shadow 0.5s ease-in-out, background-color 0.2s linear;

		&:not(.active) {
			@apply relative border-b-0 mr-0 shadow-cyan-950;

			&::after {
				@apply absolute shadow-lg w-[100%] h-[98%] left-0 top-[-1px];
				content: '';
			}

			&:first-of-type::after {
				@apply rounded-s-md;
				box-shadow: 0px 2px 0px 2px;

			}

			&:last-of-type::after {
				@apply rounded-e-md;
				box-shadow: 0 2px 0px 1px;
			}

			&:hover {
				@apply bg-cyan-600/10
			}
		}

	}

	.active {
		@apply text-white font-extrabold bg-cyan-700 shadow-inner shadow-cyan-950;
	}
}
</style>