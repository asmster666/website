import React, { useEffect } from 'react';
import s from './styles.module.scss';

import { useTranslation } from "../../../context";
import { Timeline, WorkInfo, WorkResponsibility } from '../../../elements';
import SummaryComponent from '../../summary';
import SkillsComponent from '../../skills';

import AOS from 'aos';
import 'aos/dist/aos.css';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const About2 = () => {

    const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'tablet');

    const t = useTranslation("about");
    let { jobs } = t;

    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        }); 
    }, [])

    return (
        <div id={"about"} className={s.about}>
            {
                breakpoint === 'mobile' ? 
                    <div className={s.about__wrap}> {/* mobile */}
                        <SummaryComponent />

                        <div className={s.about__wrap_jobsMobile}>
                            <h2>{ jobs.title }</h2>

                            {/* <Timeline /> */}

                            <div className={s.about__wrap_jobsWrap}>
                                {
                                    (jobs.list).map((job, ind) => {
                                        return (
                                            <div className={s.about__wrap_jobsWrap__item} key={`job_${ind}`}>
                                                <WorkInfo company={job.company} position={job.position} start={job.start} end={job.end} city={job.city} link={job.link} />
                                                <WorkResponsibility list={job.resposibilities} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <SkillsComponent />  
                    </div> :
                        <div className={s.about__wrap}> {/* desktop */}
                            <div className={s.about__wrap_skills}>
                                <SummaryComponent />

                                <SkillsComponent />
                            </div>
                            <div className={s.about__wrap_jobsDesktop}>
                                <h2>{ jobs.title }</h2>
                                <div className={s.about__wrap_jobsDesktop__content}>
                                    <div className={s.about__wrap_jobsDesktop__content_jobs}>
                                        {
                                            (jobs.list).map((job, ind) => <WorkInfo trigger={true} key={`job-info_${ind}`} company={job.company} position={job.position} start={job.start} end={job.end} city={job.city} link={job.link}/>)
                                        }
                                    </div>

                                    <Timeline />

                                    <div className={s.about__wrap_jobsDesktop__content_skills}>
                                        {
                                            (jobs.list).map((job, ind) => <WorkResponsibility trigger={true} key={`responsibility_${ind}`} list={job.resposibilities} />)
                                        }
                                    </div>
                                </div>
                            </div>  
                        </div>
            }
        </div>
    )
}

export default About2;