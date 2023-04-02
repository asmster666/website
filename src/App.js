import React from 'react';
import './styles/fonts.module.scss' 

import { LanguageProvider } from './containers/languageProvider';
import Website from './pages';

function App() {
  return (
    <LanguageProvider>
      <div className={'app'}>
        <Website />
      </div>
    </LanguageProvider>
  );
}

export default App;
