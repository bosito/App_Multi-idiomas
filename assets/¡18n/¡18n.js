
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import hi from './hi.json';
import es from './es.json';

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'en',
    resources: {
        en: en,
        hi: hi,
        es: es
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;