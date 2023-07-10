<script setup lang="ts">
import message from '@/locales/aboutMe.json'
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ messages: message });
</script>
<template>
	<div
		class="flex-col">
		<p class="text-lg items-center flex mb-auto whitespace-pre-wrap" v-html="t('aboutMe')"></p>

	</div>
</template>