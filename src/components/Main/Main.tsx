import React from 'react';
import style from './Main.module.css'

function Main() {
    return (
        <div className={style.MainBlock}>
           <div className={style.Container}>
               <div className={style.TextBlock}>
                <span>Hello,</span>
                <h1>I am Nikita Marchenkov</h1>
                <p>A front-end developer</p>
               </div>
               <div className={style.PhotoBlock}>
                
               </div>
           </div>
        </div>
    );
}

export default Main;