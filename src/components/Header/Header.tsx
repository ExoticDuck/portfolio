import React from 'react';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.css'

function Header() {
    return ( 
        <div className={style.Header} id="home">
            <Navigation/>
        </div>
     );
}

export default Header;