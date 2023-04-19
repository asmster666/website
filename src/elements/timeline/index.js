import React from 'react';
import s from './styles.module.scss';

const Timeline = () => {
    return (
        <div className={s.timeline}>
            <div className={s.timelineCircle + ' ' + s.timelineTop}></div>
            <div className={s.timelineCircle + ' ' + s.timelineCentre}></div>
            <div className={s.timelineCircle + ' ' + s.timelineBottom}></div>
        </div>
    )
}

export default Timeline;