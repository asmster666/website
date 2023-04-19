import React from 'react';
import s from './styles.module.scss';

const WorkResponsibility = ({ list, trigger }) => {
    return (
        <ul className={s.workResponsibility} data-aos={trigger && "fade-down"}>
            {
                list && list.map((item, ind) => {
                    return (
                        <li 
                            className={s.workResponsibility__item} 
                            key={`responsibility_${ind}`} 
                            dangerouslySetInnerHTML={{ __html: item }} 
                        />
                    )
                })
            }
        </ul>
    )
}

export default WorkResponsibility;