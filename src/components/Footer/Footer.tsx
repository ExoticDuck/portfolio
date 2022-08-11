import React from 'react';
import style from "./Footer.module.css";

function Footer() {
    return (<div className={style.FooterBlock}>
        <div>Nikita Marchenkov</div>
        <div className={style.LinksContaier}>
            <div className={style.IconBox}>
                <a href='https://github.com/ExoticDuck?tab=overview&from=2022-08-01&to=2022-08-09'>
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <div className={style.IconBox}>
                <a href='https://www.linkedin.com/in/%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B0-%D0%BC%D0%B0%D1%80%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2-23563b194'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <div className={style.IconBox}>
                <a href='https://t.me/ExoticDuck'>
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </div>
        </div>
        <div> 2022 All rights reserved</div>
    </div>);
}

export default Footer;