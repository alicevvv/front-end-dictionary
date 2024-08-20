import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Item from './components/Item';
import { SET_THEME_KEY } from './constants/localstorage';
import { THEME } from './constants/theme';
import { ReactComponent as DarkModeIcon } from "./image/dark-mode-icon.svg";
import { ReactComponent as LightModeIcon } from "./image/light-mode-icon.svg";
import mockData from "./json/index.json";

function App() {
    const [theme, setTheme] = useState(THEME.DARK)


    const handleTheme = () => {
        if (theme === THEME.DARK) {
            setTheme(THEME.LIGHT)
            localStorage.setItem(SET_THEME_KEY, THEME.LIGHT)
        } else {
            setTheme(THEME.DARK)
            localStorage.setItem(SET_THEME_KEY, THEME.DARK)
        }
    }

    useEffect(() => {
        var localTheme = localStorage.getItem(SET_THEME_KEY);
        if (localTheme) setTheme(localTheme)
    }, [])

    return (
        <div data-theme={theme} className={style.container}>
            <div className={style.title}>
                Front-end Dictionary
            </div>
            <button className={style["theme-button"]} onClick={handleTheme}>
                {
                    theme === THEME.LIGHT && (
                        <LightModeIcon />
                    )
                }
                {
                    theme === THEME.DARK && (
                        <DarkModeIcon />
                    )
                }
            </button>
            <input className={style["search-input"]} placeholder='search'>
            </input>

            <div className={style["dictionary-container"]}>
                {
                    mockData.map((item, index) => {
                        console.log(item);
                        return <Item data={item} key={`dictionary_${index}`} />
                    })
                }
            </div>
        </div>
    );
}

export default App;
