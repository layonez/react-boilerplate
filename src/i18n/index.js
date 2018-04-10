import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import  ru  from './ru.json';
import  tr  from './tr.json';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    lng: 'en' | 'ru' | 'tr',
    fallbackLng: 'en',
    //console logging ON
    debug: true,

    resources: {
      ['ru-RU']: ru,
      ['tr-TR']: tr,
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });


export default i18n;