import styles from './chat-header.module.scss'
import {useContext} from "react";
import {ChatPageContext} from "@/component/(chat)/chat-page/ChatPage";
import {ButtonLink} from "@/component/button-link/ButtonLink";
import clsx from "clsx";
import {Link} from "react-router-dom";
import img from '../../../public/profile-img.png'

export default function ChatHeader() {

    const {chatData} = useContext(ChatPageContext)

    return (
        <div className={styles.container}>
            <ButtonLink href={'/chats'} className={styles.button}>
                <span className={clsx(
                    "material-symbols-rounded",
                    styles.buttonBack
                )}>
                    arrow_back_ios_new
                </span>
                Назад
            </ButtonLink>
            <Link to={`/profiles/${chatData?.userTo.id}`} className={styles.info}>
                {chatData?.userTo.name} {chatData?.userTo.surname}
            </Link>
            <Link to={`/profiles/${chatData?.userTo.id}`}>
                <img src={chatData?.userTo.imgLink == "" ? img : chatData?.userTo.imgLink} alt={"Фото"} className={styles.img}/>
            </Link>
        </div>
    )

}