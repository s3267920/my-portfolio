<script setup lang="ts">
import { ref } from 'vue';
const slogan = '努⼒會說謊，但努⼒不會⽩費。';
const about = `
我是Lucy ，有約四年的程式開發經驗，⼤概三年左右的全端，以及⼀年左右專注於前端，技能⽐較偏向前端⽅⾯，但不排斥寫⼀點後端。<br>擅⻑畫⾯還原，注重使⽤者體驗與操作。<br>
不怕解決問題，因為更喜歡解決問題時的成就感。
`
const aboutText = ref(about)
const sloganText = ref(slogan)
</script>
<template>
	<div
		class="flex flex-col justify-center col-span-3 row-span-2 bg-cyan-50 bg-opacity-40 p-3 rounded-md cursor-pointer transition-colors  duration-300 hover:bg-opacity-100 ">
		<p class="text-2xl items-center flex mb-1"><b>{{ sloganText }}</b></p>
		<p class="text-lg items-center flex " v-html="aboutText"></p>
	</div>
</template>