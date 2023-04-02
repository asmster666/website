import React from 'react';
import s from './styles.module.scss';

import { useTranslation } from "../../../context";

import { Header, IntroBottomMobile } from '../../pageBlocks';
import Background from '../../../assets/images/background4_22.jpg';
import BackMobile from '../../../assets/images/background_mobile.jpg';
import Img from '../../../assets/images/me.png';

const Intro = ({ openFn, open, lang }) => {
    const t = useTranslation("intro");

    return (
        <div id={'home'} className={s.intro}>

            <img className={s.intro__background} src={Background} alt={'back'} />
            <img className={s.intro__backgroundMobile} src={BackMobile} alt={'back_mobile'} />
            <div className={s.intro__img}><img src={Img} alt={"me"} /></div>

            <Header  openFn={openFn} open={open} />

            <ul className={lang !== "eng" ? s.intro__description + ' ' + s.intro__descriptionRus : s.intro__description}>
                {
                    (t.shortTitle).map((item, ind) => {
                        return (
                            <li key={`shortTitle_${ind}`}>{item}</li>
                        )
                    })
                }
            </ul>
            
            <IntroBottomMobile />
        </div>
    )
}

export default Intro;