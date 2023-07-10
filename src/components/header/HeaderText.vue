<script setup lang="ts">
import message from '@/locales/aboutText.json'
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ messages: message });
</script>
<template>
	<div
		class="order-3 flex flex-col justify-center col-span-full mt-5   bg-cyan-50 bg-opacity-40 p-3 rounded-md cursor-pointer transition-colors  duration-300 hover:bg-opacity-100 lg:mt-0 lg:min-h-[230px] lg:col-start-5 lg:col-end-18 lg:row-span-2 lg:col-span-5 lg:order-2 print:mt-1 print:bg-white">
		<p class="text-2xl items-center flex mb-auto print:text-xl" v-if='t("slogan")'><b>{{ t("slogan") }}</b></p>
		<p class="about-me text-lg items-center flex mb-auto whitespace-pre-wrap" v-html="t('aboutMe')"></p>
	</div>
</template>