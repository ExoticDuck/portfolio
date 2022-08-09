import React from 'react';
import style from './Navigation.module.css'

function Navigation() {
    return (
        <div className={style.Navigation}>
            <a href="">Home</a>
            <a href="">Scills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Navigation;