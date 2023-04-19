import React, { useState, Suspense, useContext } from 'react';
import '../styles/main.scss';

import { Intro, VideoAndContacts, About2 } from '../components/pageBlocks';
import { BurgerMenu } from '../elements';
import Loader from '../components/loader';

import { LanguageContext } from '../containers/languageProvider';

const Website = () => {
    const { lang } = useContext(LanguageContext);

    const [openBurger, setOpenBurger] = useState(false);

    const handleOpenBurgerMenu = () => {
        setOpenBurger(!openBurger)
    }

    return (
        <Suspense fallback={<Loader />}>
            <div className={'main'}>
                <BurgerMenu isOpen={openBurger} />

                <Intro 
                    openFn={handleOpenBurgerMenu} 
                    open={openBurger} 
                    lang={lang}
                />

                <About2 />

                <VideoAndContacts lang={lang} />

            </div>
        </Suspense>
    )
}

export default Website;