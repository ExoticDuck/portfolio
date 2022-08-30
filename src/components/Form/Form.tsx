import React from 'react';
import style from './Form.module.css'

function Form() {
    return (<div className={style.FormBlock} id="contacts">
        <div className={style.Card}>
            <div className={style.Header}>
                CONTACT ME
            </div>
            <div className={style.FormContainer}>
                <form className={style.Form}>
                    <input className={style.NameInput} placeholder="Name"></input>
                    <input className={style.EmailInput} placeholder="Email"></input>
                    <textarea className={style.Textarea} placeholder="Your message"></textarea>
                    <button type='submit' className={style.Button}>Send</button>
                </form>
            </div>
        </div>
    </div>);
}

export default Form;