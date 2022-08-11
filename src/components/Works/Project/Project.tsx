import React, { useState } from 'react';
import style from './Project.module.css'

type PropsType = {
    name: string
    description: string
    imageUrl: string
    projectUrl: string
}

function Project() {
    const [isButtonVisible, setButtonVisible] = useState<boolean>(false);

    function onEnterHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation()
        console.log(e);
        if(e.type === "mouseenter") {
            setButtonVisible(true);
        }
    }
    function onLeaveHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation()
        console.log(e);
        if(e.type === "mouseleave") {
            setButtonVisible(false);
        }
    }
    return (
    <div className={style.ProjectBox}>
        <div className={style.PictureBlock} onMouseEnter={onEnterHandler} onMouseLeave={onLeaveHandler}>
            <img src='https://puzzleit.ru/files/puzzles/107/107406/_original.jpg' alt='img' className={style.Image}></img>
            <button className={style.Button} onClick={() => console.log("btn")}></button>
        </div>
        <div className={style.DescriptionBlock}>
            <h3>Project name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus fuga iusto officia voluptatum dolores eligendi placeat qui voluptate tempore saepe at, voluptas illo maiores delectus quo aut similique amet?</p>
        </div>
    </div>
);}

export default Project;