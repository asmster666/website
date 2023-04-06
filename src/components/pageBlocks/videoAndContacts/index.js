import React from 'react';
import s from './styles.module.scss';
import '../../../styles/slider.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from '../../../context';

import { MailBox, PhoneIcon, Github, UpArrow } from '../../../assets/icons';

import { Carousel } from 'react-responsive-carousel';
import Img from '../../../assets/images/search_comp2.png';
import Img2 from '../../../assets/images/chrome_extension.png';


const VideoAndContacts = () => {

    const t = useTranslation("contact")

    let slides = [
        {
            src: Img,
            name: 'Search component',
            link: 'https://asmster666.github.io/deploy_test/'
        },
        {
            src: Img2,
            name: 'Chrome extension',
            link: 'https://github.com/asmster666/chrome_extension'
        },
        {
            src: '',
            name: 'Coming soon...',
            link: 'https://github.com/asmster666'
        }
    ]

    const handleRedirect = () => {

    }

    return (
        <div id={'contact'} className={s.video}>
            <div className={s.video__wrap}>
                <div className={s.video__wrap_carousel}>
                    <h2>{ t.title }</h2>
                    <Carousel
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={true}
                    >
                        {
                            slides.map((slide, ind) => {
                                return (
                                    <div className={s.video__wrap_carouselSlide} key={`slide_${ind}`}>
                                        {
                                            slide.src !== '' && <img src={slide.src} alt={slide.name} />
                                        }
                                        <a 
                                            href={slide.link} 
                                            className={slide.src === '' ? s.video__wrap_carouselSlide_default : ''}
                                        >{slide.name}</a>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>

                <div className={s.video__wrap_contact}>
                    <p><a href={'tel:6281213989947'} onClick={handleRedirect}>
                        <PhoneIcon id={'phoneIcon'} />
                        <span className={s.video__wrap_contactPhone}>+62 812 1398 9947</span>
                    </a></p>
                    <p><a href={'mailto:masha.mashianova1@gmail.com'} onClick={handleRedirect}>
                        <MailBox id={'mailIcon'} />
                        <span>masha.mashianova1@gmail.com</span>
                    </a></p>
                    <p><a href={'https://github.com/asmster666'} className={s.video__wrap_contactGithub} onClick={handleRedirect}>
                        <Github width={40} />
                        <span>github.com/asmster666</span>
                    </a></p>
                </div>
            </div>

            <div className={s.video__btnToTop}>
                <AnchorLink href={'#home'} offset={5}><UpArrow width={22} /></AnchorLink>
            </div>

            <footer className={s.video__footer}>
                <p>Copyright &#169; 2023 Masha M. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default VideoAndContacts;