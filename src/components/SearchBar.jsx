import { useSearchParams } from "react-router-dom";
import style from "./SearchBar.module.css"


export function SearchBar() {

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search') || '';



    return (
        <>
            <input className={style.inputSearch} type = 'text'
                value={search}
                placeholder="Поиск"
                onChange={ (e) => {
                        setSearchParams({search: e.target.value})
                    }
                }/>
        </>
    )
}