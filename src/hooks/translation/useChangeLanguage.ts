import { useTranslation } from 'react-i18next';

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();

  // 언어 전환 함수
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return { changeLanguage };
};
