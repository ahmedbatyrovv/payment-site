import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import tk from './locales/tk.json'
import tr from './locales/tr.json'
import ru from './locales/ru.json'

i18n.use(initReactI18next).init({
  resources: {
    tk: { translation: tk },
    tr: { translation: tr },
    ru: { translation: ru },
  },
  lng: 'tk',
  fallbackLng: 'tk',
  interpolation: { escapeValue: false },
})

export default i18n
