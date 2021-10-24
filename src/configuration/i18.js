import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'tr',
        backend: {
            loadPath: '/translations/{{lng}}.json'
        },
        fallbackLng: 'tr',
        debug: true,
        
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
      
    });
    export default i18n;