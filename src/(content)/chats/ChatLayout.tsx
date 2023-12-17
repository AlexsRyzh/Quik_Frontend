import styles from './chats-layout.module.scss'
import {Outlet} from "react-router-dom";


export default function ChatLayout() {


    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    )
}