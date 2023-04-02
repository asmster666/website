import React, { useState, useEffect, useContext } from 'react';
import s from './styles.module.scss';

import { BurgerIcon, BurgerArrow } from '../../../assets/icons';
import { LanguageToggle } from '../../../elements';
import { LanguageContext } from '../../../containers/languageProvider';

const Header = ({ openFn, open, ...props }) => {

    const { lang, changeLang } = useContext(LanguageContext);   

    const [ activeLang, setActiveLang ] = useState(0);

    const handleChangeLang = (lang) => {
        sessionStorage.setItem("lang", lang)
        lang === 'eng' ? setActiveLang(1) : setActiveLang(2)
        changeLang(lang)
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
        <header className={s.header}>
            <h1 className={s.header__name}><b>Mariia Mashianova</b></h1>
            <div className={s.header__btnWrap}> 
                <LanguageToggle 
                    activeL={activeLang} 
                    changeLangFn={handleChangeLang} 
                    closeBurger={openFn} 
                    isBurgerOpen={open} 
                />
                {
                    !open ?
                        <BurgerIcon 
                            className={s.header__btnWrap_burgerMenu} 
                            onClick={openFn}
                        /> :
                            <BurgerArrow 
                                className={s.header__btnWrap_burgerMenu}
                                onClick={openFn}
                            />
                }
            </div>
        </header>
    )
}

export default Header;