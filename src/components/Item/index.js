import { useState } from "react";
import style from "./index.module.scss";

export default function Item({ data }) {
    const { title, title_ch, badge, content, list } = data;
    const [collapse, setCollapse] = useState(true)

    const handleClickItem = () => {
        setCollapse(!collapse)
    }

    return (
        <div className={style["item-container"]}>
            <div className={style["item-header"]} onClick={handleClickItem}>
                <div>
                    <div className={style.title}>{title}</div>
                    <div className={style["title-ch"]}>{title_ch}</div>
                </div>
                <div className={style.badge}>{badge}</div>
            </div>
            <div className={style["more-content"]}>
                {
                    collapse ? <></> :
                        <>
                            <div className={style.line} />
                            {!!content && <div className={style.content}>{content}</div>}
                            {!!list && (
                                <>
                                    <ul className={style.list}>
                                        {list.map((item, index) => {
                                            return (
                                                <li className={style["list-item"]} key={`list_${index}`}>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            )}
                        </>
                }
            </div>

        </div>
    );
}
