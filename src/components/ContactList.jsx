import { useSearchParams } from "react-router-dom"
import { SearchBar } from "./SearchBar"
import style from "./ContactList.module.css"

function search(state, getSearch) {
    if (!getSearch) return state 
    return(
        state.filter(
            (item) => item.name.toLowerCase().includes(getSearch.toLowerCase())
        )
    )
}

export function ContactList({ state, funcDelContact }) {

    const [searchParams, setSearchParams] = useSearchParams();

    const filtered = search(state, searchParams.get('search'));

    return(
        <>
            <div className={style.PageContainer}>
                <SearchBar />
                <div className={style.ContactListContainer}>
                    {filtered.length !== 0 ? filtered.map((item) => {
                        return(
                            <div className={style.contactBlock} key = {item.id}>
                                <p className={style.contactName}>{item.name}</p>
                                <p className={style.contactNumber}>{item.phone}</p>
                                <button className={style.contactButton} onClick={() => funcDelContact(item.id)}>
                                    Удалить
                                </button>
                            </div>
                        )
                    }) : <p className={style.contactName}>Нет контактов</p>}
                </div>
            </div>
        </>
    )
}