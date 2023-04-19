import React from 'react';
import s from './styles.module.scss';

import { LinkIcon } from '../../assets/icons';

const WorkInfo = (props) => {

    const {company, position, start, end, city, link, trigger} = props;

    return (
        <div className={s.workInfo} data-aos={trigger && "fade-down"}>
            <h4 className={s.workInfo__company}>
                {company}
                {/* eslint-disable-next-line */}
                <a target={'_blank'} href={link}><LinkIcon width={20} /></a>
            </h4>
            <p><i><b>{position}</b></i></p>
            <p>{start} - {end}</p>
            <p>{city}</p>
        </div>
    )
}

export default WorkInfo;