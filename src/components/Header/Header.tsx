import React from 'react';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.css'

function Header() {
    return ( 
        <div className={style.Header}>
            <Navigation/>
        </div>
     );
}

export default Header;