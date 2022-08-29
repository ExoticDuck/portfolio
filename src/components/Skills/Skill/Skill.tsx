import React from 'react';
import style from './Skill.module.css';

type PropsType = {
    iconName: string
    title: string
    description: string
    id: number
}

function Skill(props: PropsType) {
    return (<div className={style.Skill}>
        <div className={style.Icon}>
            <i className={props.iconName}></i>
        </div>
        <h3>{props.title}</h3>
        <div className={style.Description}>{props.description}</div>
    </div>);
}

export default Skill;