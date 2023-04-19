import React from 'react'
import s from './styles.module.scss';

import { useTranslation } from "../../context";

const SkillsComponent = () => { 

    const t = useTranslation("about");
    let { skills } = t;

    return (
        <div className={s.skills}>
            <h2>{ skills.title }</h2>
            <ul>
                {
                    (skills.list).map((skill, ind) => {
                        return <li key={`skill_${ind}`}><b><i>{ skill.name }:</i></b> { skill.description }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default SkillsComponent;