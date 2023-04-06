import React, { useEffect } from 'react';
import s from './styles.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslation } from "../../../context";
import { LinkIcon } from '../../../assets/icons';

const About = () => {

    const t = useTranslation("about");
    let { general, skills, jobs } = t;

    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        }); 
    }, [])

    return (
        <div id={'about'} className={s.about}>
            <div className={s.about__infoAndSkills}>
                <div data-aos={'fade-right'} data-aos-delay={'500'} className={s.about__infoAndSkills_general}>
                    <div>
                        <p>{general.aboutName} <span>{general.fullName}</span></p>
                        <p>{general.aboutNationality} <span>{general.nationality}</span></p>
                        {/* <p>{general.aboutLocation} <span>{general.location}</span></p> */}
                        <p><span><a href={`mailto:${general.email}`}>{general.email}</a></span></p>
                    </div>
                </div>
                <div data-aos={'fade-right'} data-aos-delay={'700'} className={s.about__infoAndSkills_skills}>
                    <h2 className={s.about__title}>Skills</h2>
                    <ul>
                        {
                            (skills.development).map((item, key) => {
                                return <li key={`devTool_${key}`}>{item}</li>
                            })
                        }
                    </ul>
                    <ul>
                        {
                            (skills.tools).map((item, key) => {
                                return <li key={`tool_${key}`}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div data-aos={'fade-left'} data-aos-delay={'500'} className={s.about__experience}>
                <h2 className={s.about__title}>{jobs.title}</h2>
                    <div className={s.about__experience_jobItem + ' ' + s.about__experience_jobItem_payture}>
                        <div className={s.about__experience_jobItem_info}>
                            <h4>
                                {jobs.payture.title}
                                {/* eslint-disable-next-line */}
                                <a target={'_blank'} href={'https://payture.com'}><LinkIcon width={20} /></a>
                            </h4>
                            <p className={s.about__experience_jobItem_infoPosition}>{jobs.payture.position}</p>
                            <p>{jobs.payture.start} 2022 - {jobs.payture.end} 2023</p>
                            <p>{jobs.payture.city}</p>
                        </div>
                        <ul>
                            {
                                (jobs.payture.resposibilities).map((item, key) => {
                                    return <li key={`responsibility_${key}`}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={s.about__experience_jobItem + ' ' + s.about__experience_jobItem_mirvracha}>
                        <div className={s.about__experience_jobItem_info}>
                            <h4>
                                {jobs.mirvracha.title}
                                {/* eslint-disable-next-line */}
                                <a target={'_blank'}  href={'https://mirvracha.ru'}><LinkIcon width={20} height={20} /></a>
                            </h4>
                            <p className={s.about__experience_jobItem_infoPosition}>{jobs.mirvracha.position}</p>
                            <p>{jobs.mirvracha.start} 2021 - {jobs.mirvracha.end} 2022</p>
                            <p>{jobs.mirvracha.city}</p>
                        </div>
                        <ul>
                            {
                                (jobs.mirvracha.resposibilities).map((item, key) => {
                                    return <li key={`responsibility_${key}`}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={s.about__experience_jobItem + ' ' + s.about__experience_jobItem_roomgram}>
                        <div className={s.about__experience_jobItem_info}>
                            <h4>
                                {jobs.roomgram.title}
                                {/* eslint-disable-next-line */}
                                <a target={'_blank'} href={'https://roomgram.com'}><LinkIcon width={20} /></a>
                            </h4>
                            <p className={s.about__experience_jobItem_infoPosition}>{jobs.roomgram.position}</p>
                            <p>{jobs.roomgram.start} - {jobs.roomgram.end} 2021</p>
                            <p>{jobs.roomgram.city}</p>
                        </div>
                        <ul>
                            {
                                (jobs.roomgram.resposibilities).map((item, key) => {
                                    return <li key={`responsibility_${key}`}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default About;