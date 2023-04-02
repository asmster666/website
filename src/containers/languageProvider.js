import React, { createContext, useState } from 'react';
import content from '../context/strings';

export const LanguageContext = createContext({
    lang: 'eng',
    dictionary: content.lang
})

export const LanguageProvider = ({ children }) => {

    const defaultLang = sessionStorage.getItem('lang')
    const [lang, setLang] = useState(defaultLang || 'eng')

    const provider = {
        lang,
        dictionary: content[lang],
        changeLang: l => {
            const newLang = l || 'eng'
            setLang(newLang);
            sessionStorage.setItem('lang', newLang)
        }
    }

    return (
        <LanguageContext.Provider value={provider}>
            { children }
        </LanguageContext.Provider>
    )
}
