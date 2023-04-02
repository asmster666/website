import React, { useContext } from 'react'
import content from './strings'
import { LanguageContext } from '../containers/languageProvider';

export const useTranslation = (key = "") => {
    
    const { lang } = useContext(LanguageContext);
    
    if (!key) {
      return content[lang]
    }

    return content[lang][key] || {};
}