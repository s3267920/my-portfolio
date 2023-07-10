import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import type { langKey } from '@/typings/language'

export const useLanguageStore = defineStore('locale', () => {
  const { locale } = useI18n()
  const localData: langKey | null = localStorage.getItem('locale') as langKey
  const currentLocale = ref<langKey>(localData || 'zh-TW')
  function setLocale(value: 'en' | 'zh-TW') {
    currentLocale.value = value
    locale.value = value
    localStorage.setItem('locale', value)
  }

  return { currentLocale, setLocale }
})
