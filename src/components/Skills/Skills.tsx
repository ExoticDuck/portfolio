import React from 'react';
import Skill from './Skill/Skill';
import style from './Skills.module.css'

function Skills() {
    return ( 
        <div className={style.SkillsBlock}>
            <div className={style.Container}>
                <h2 className={style.Title}>Skills</h2>
                <div className={style.Skills}>
                    <Skill iconName={"fa-brands fa-react"} title={"React"} description={"Loaccusrem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore reiciendis, autem sit officia nostrum repellendus rerum optio amet maiores quisquam quidem, ut "}/>
                    <Skill iconName={"fa-brands fa-square-js"} title={"JS"} description={"Loaccusrem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore reiciendis, autem sit officia nostrum repellendus rerum optio amet maiores quisquam quidem, ut "}/>
                    <Skill iconName={"fa-solid fa-code"} title={"Typescript"} description={"Loaccusrem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore reiciendis, autem sit officia nostrum repellendus rerum optio amet maiores quisquam quidem, ut "}/>
                    <Skill iconName={"fa-brands fa-html5"} title={"HTML"} description={"Loaccusrem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore reiciendis, autem sit officia nostrum repellendus rerum optio amet maiores quisquam quidem, ut "}/>
                    <Skill iconName={"fa-brands fa-css3-alt"} title={"CSS"} description={"Loaccusrem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore reiciendis, autem sit officia nostrum repellendus rerum optio amet maiores quisquam quidem, ut "}/>
                </div>
            </div>
        </div>
     );
}

export default Skills;

