import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ContactForm.module.css";

export function ContactForm({ funcAddContact }) {
    const navigate = useNavigate();
    const [errorValidation, setErrorValidation] = useState([]);

    function validation(name, number) {
        const resultValidation = [];
        if (!name) {
            resultValidation.push('name');
        }
        if (!number || !/^\d+$/.test(number)) {
            resultValidation.push('number')
        }
        setErrorValidation(resultValidation)
        if (resultValidation.length !== 0) {
            return false;
        }
        return true;
    }

    function handleAddContact(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name').trim();
        const number = formData.get('phone').trim();
        if (!validation(name, number)) {
            return;
        };
        funcAddContact(
            {
            id: Date.now(),
            name: name,
            phone: number
            }
        )
        e.target.reset();
        navigate('/contacts');
    }

    return (
        <div className={style.contactFormConteiner}>
            <form className={style.contactForm} onSubmit={handleAddContact}>
                <label className={style.labelForm}>
                    Имя:
                    <input type='text'
                    name="name"
                    placeholder="Введите имя"
                    style={errorValidation.includes("name") ? {outline: "3px solid red"} : {}}
                    />
                </label>
                <label className={style.labelForm}>
                    Номер:
                    <input type='tel'
                    name="phone" 
                    placeholder="Введите номер телефона"
                    style={errorValidation.includes("number") ? {outline: "3px solid red"} : {}}
                    />
                </label>
                <button className={style.buttonForm} type="submit">Сохранить</button>
            </form>
            <div style={{ visibility: errorValidation.length !== 0 ? 'visible' : 'hidden' }}>
                Заполните корректно имя и номер телефона контакта перед сохранением
            </div>
        </div>
    )
}