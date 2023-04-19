import React from 'react';
import s from './styles.module.scss';

import { useTranslation } from "../../context";

const SummaryComponent = () => {

    const t = useTranslation("about");
    let { executeSummary } = t;

    return (
        <div className={s.summary}>
            <h2>{ executeSummary.name }</h2>
            <p dangerouslySetInnerHTML={{ __html: executeSummary.description }} />
        </div>
    )
}

export default SummaryComponent;