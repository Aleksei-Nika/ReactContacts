import { Outlet, NavLink } from 'react-router-dom';
import style from './Layout.module.css';

function setStyle({ isActive }){
    return isActive ? {color: '#F7F5E6', fontWeight: 'bold', transform: 'scale(1.2) translateY(-3px)'} : {color: '#1A1110'}
}

export function Layout() {

    return (
        <>
            <header className={style.headerPanel}>
                <nav className={style.navPanel}>
                    <NavLink className={style.linkPanel} style={setStyle} to = '/'>Главная</NavLink>
                    <NavLink className={style.linkPanel} style={setStyle} to = '/add-contact'>Добавить контакт</NavLink>
                    <NavLink className={style.linkPanel} style={setStyle} to = '/contacts'>Контакты</NavLink>
                </nav>
            </header>
            <main className={style.mainConteiner}>
                <Outlet />
            </main>
            <footer>
                @Contact
            </footer>
        </>
    )
}