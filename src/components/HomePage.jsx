import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";

export function HomePage({state}) {

    const navigate = useNavigate();

    return(
        <>
            <div className={style.titleConteiner}>
                <h1 className={style.title}>Приложение "Contact"</h1>
                <h2 className={style.title}>Приложение для хранения контактов</h2>
                <h3 className={style.title}>Контактов сохранено - {state.length}</h3>
            </div>
            <div className={style.conteinerButton}>
                <button className={style.button} onClick={() => navigate('/contacts')}>
                    <span>Список</span><span>контактов</span> 
                </button>
                <button className={style.button} onClick={() => navigate('/add-contact')}>
                    <span>Добавить</span><span>контакт</span>
                </button>
            </div>
        </>
    )
}