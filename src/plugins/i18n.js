import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesUA from '@/locales/ua.json'
import localesRU from '@/locales/ru.json'

const i18n = createI18n({
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en: localesEN,
    ua: localesUA,
    ru: localesRU,
  },
})

export default i18n
