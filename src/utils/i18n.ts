// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import koKR from '../assets/locales/ko-KR/translation.json';
import enUS from '../assets/locales/en-US/translation.json';

// 번역 리소스를 설정
const resources = {
  'ko-KR': { translation: koKR },
  'en-US': { translation: enUS },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ko-KR', // 초기 언어는 한국어로 설정
  interpolation: {
    escapeValue: false, // React에서는 기본적으로 XSS 방지 처리가 되어 있으므로 false로 설정
  },
});

export default i18n;
