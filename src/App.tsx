import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { useChangeLanguage } from './hooks/translation/useChangeLanguage';

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
  const { t } = useTranslation();
  const { changeLanguage } = useChangeLanguage(); // 훅을 통해 changeLanguage 가져오기

  return (
    <div>
      <IntroTitle>{t('hello')}</IntroTitle>
      <TranslateButton onClick={() => changeLanguage('en-US')}>English</TranslateButton>
      <TranslateButton onClick={() => changeLanguage('ko-KR')}>한국어</TranslateButton>
    </div>
  );
}

export default App;
