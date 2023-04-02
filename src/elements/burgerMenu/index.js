import React from 'react';
import s from './styles.module.scss';
import { useTranslation } from "../../context";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const BurgerMenu = ({ isOpen }) => {

    const t = useTranslation("intro");

    return (
        <div className={isOpen ? s.burgerMenu + ' ' + s.burgerAppear : s.burgerMenu}>
            <nav className={s.burgerMenu__nav}>
                <AnchorLink href={'#home'} offset={5}>{ t.burgerMenu.home }</AnchorLink>
                <AnchorLink href={'#about'} offset={0}>{ t.burgerMenu.about }</AnchorLink>
                <AnchorLink href={'#contact'} offset={0}>{ t.burgerMenu.contact }</AnchorLink>
            </nav>
        </div>
    )
}

export default BurgerMenu;