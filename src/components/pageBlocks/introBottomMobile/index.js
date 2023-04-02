import React, { useState, useEffect, useContext } from 'react';

import s from './styles.module.scss';

import { LanguageToggle } from '../../../elements';
import { LanguageContext } from '../../../containers/languageProvider';

const IntroBottomMobile = () => {

    const { lang, changeLang } = useContext(LanguageContext);
    const [ activeLang, setActiveLang ] = useState(0);

    const handleChangeLang = (lang) => {
        changeLang(lang)

        lang === 'eng' ? setActiveLang(1) : setActiveLang(2)
    };

    useEffect(() => {
        if(lang === null) {
            changeLang("eng")
            setActiveLang(1)
        } else {
            lang === 'eng' ? setActiveLang(1) : setActiveLang(2)
        }
    }, [])

    return (
        <div className={s.introBottom}>
            <LanguageToggle activeL={activeLang} changeLangFn={handleChangeLang} />
        </div>
    )
}

export default IntroBottomMobile;