import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ContactForm.module.css";

export function ContactForm({ funcAddContact }) {
    const navigate = useNavigate();
    const [errorValidation, setErrorValidation] = useState(false);

    function handleAddContact(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name').trim();
        const number = formData.get('phone').trim();
        if (!name || !number || !/^\d+$/.test(number)) {
            setErrorValidation(true);
            return;
        }
        funcAddContact(
            {
            id: Date.now(),
            name: name,
            phone: number
            }
        )
        setErrorValidation(false);
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
                    />
                </label>
                <label className={style.labelForm}>
                    Номер:
                    <input type='tel'
                    name="phone" 
                    placeholder="Введите номер телефона"
                    />
                </label>
                <button className={style.buttonForm} type="submit">Сохранить</button>
            </form>
            <div style={{ visibility: errorValidation ? 'visible' : 'hidden' }}>
                Заполните корректно имя и номер телефона контакта перед сохранением
            </div>
        </div>
    )
}