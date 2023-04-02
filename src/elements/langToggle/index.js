import React from 'react';
import s from './styles.module.scss';

const LanguageToggle = ({ activeL, changeLangFn, closeBurger, isBurgerOpen }) => {

    const handleChangeL = (lang) => {
        changeLangFn(lang)
        isBurgerOpen && closeBurger()
    }

    return (
        <div className={s.toggle__langToggle}>
            <span 
                className={activeL === 1 ? s.toggle__langToggleName + ' ' + s.toggle__langToggleActive :  s.toggle__langToggleName}
                onClick={() => handleChangeL('eng')}
            >EN</span>
            <span style={{ color: '#092233', transform: 'rotate(15deg)' }}>|</span>
            <span 
                className={activeL === 2 ? s.toggle__langToggleName + ' ' + s.toggle__langToggleActive :  s.toggle__langToggleName}
                onClick={() => handleChangeL('ru')}
            >RU</span>
        </div>
    )
}

export default LanguageToggle;