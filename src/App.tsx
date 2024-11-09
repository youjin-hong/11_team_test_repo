import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const IntroTitle = styled.p`
  font-size: 1.5rem;
  color: #bf4f74;
`;

const TranslateButton = styled.button`
  background-color: antiquewhite;
  border-radius: 1rem;
  padding: 1rem;
  margin: 5px;
  border: none;
  cursor: pointer;
`;

function App() {
  const { t, i18n } = useTranslation();

  // 언어 전환 함수
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <IntroTitle>{t('hello')}</IntroTitle>
      <TranslateButton onClick={() => changeLanguage('en-US')}>English</TranslateButton>
      <TranslateButton onClick={() => changeLanguage('ko-KR')}>한국어</TranslateButton>
    </div>
  );
}

export default App;
