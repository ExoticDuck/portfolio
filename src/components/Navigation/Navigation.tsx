import React from 'react';
import style from './Navigation.module.css'

function Navigation() {
    return (
        <div className={style.Navigation}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
}

export default Navigation;