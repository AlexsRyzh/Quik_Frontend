import {ChatListContext} from "@/component/(chat)/chats/Chats";
import {useContext} from "react";
import styles from './chat-list.module.scss'
import {Link} from "react-router-dom";

export default function ChatsList() {

    const {chatList} = useContext(ChatListContext)

    return (
        <>
            {chatList?.map((v) => {

                return (
                    <Link to={`/chats/${v.idUser}`} className={styles.container}>
                        <img src={v.img} alt={"Фото"} className={styles.img}/>
                        <div className={styles.info}>
                            <div className={styles.dateAndFio}>
                                <p>{v.name} {v.surname}</p>
                                <p>{v.lastMessage.date.getDate()}.{v.lastMessage.date.getMonth()}</p>
                            </div>
                            <p className={styles.message}>{v.lastMessage.text.slice(0, 50)}</p>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}