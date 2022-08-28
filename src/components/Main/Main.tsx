import React from 'react';
import style from './Main.module.css'

function Main() {
    return (
        <div className={style.MainBlock}>
            <div className={style.Container}>
                <div className={style.TextBlock}>
                    <span className={style.Hello}>Hello,</span>
                    <h1>I am Nikita Marchenkov</h1>
                    <span className={style.Transparent}>A FRONT-END DEVELOPER</span>
                </div>
                <div className={style.PhotoBlock}>

                </div>
            </div>
        </div>
    );
}

export default Main;