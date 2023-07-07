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
			@click="toggleLanguage(key)">{{ lang }}</button>
	</div>
</template>
<style lang="scss">
.btn-switch-lang {
	button {
		@apply text-cyan-800;

		&:not(.active) {
			@apply relative shadow-lg shadow-cyan-950;

			&:first-of-type {
				@apply rounded-s-md;
				box-shadow: 0px 3px 1px 1px;
			}

			&:last-of-type {
				@apply rounded-e-md;
				box-shadow: 0 3px 0px 1px;
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