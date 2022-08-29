import React from 'react';
import Project from './Project/Project';
import style from "./Works.module.css"

function Works() {
    return (<div className={style.WorksBlock} id="projects">
        <div className={style.Container}>
            <h3 className={style.Title}>My Works</h3>
            <div className={style.WorksContainer}>
                <div className={style.Item}><Project/></div>
                <div className={style.Item}><Project/></div>
                <div className={style.Item}><Project/></div>
            </div>
        </div>
    </div>);
}

export default Works;