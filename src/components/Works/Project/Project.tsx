import React, { useState } from 'react';
import style from './Project.module.css'

function Project() {
    const [isButtonVisible, setButtonVisible] = useState<boolean>(false);

    function onEnterHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log(e);
        if(e.type === "mouseenter") {
            setButtonVisible(true);
        }
    }
    function onLeaveHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log(e);
        if(e.type === "mouseleave") {
            setButtonVisible(false);
        }
    }
    return (
    <div className={style.ProjectBox}>
        <div className={style.PictureBlock} onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>
            <button className={isButtonVisible ? style.Button : style.InvisibleButton} onClick={() => console.log("btn")}></button>
        </div>
    </div>
);}

export default Project;