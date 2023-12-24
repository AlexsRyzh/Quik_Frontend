import React, {createContext} from "react";
import styles from './chats.module.scss'
import {ChatItem} from "@/src/(content)/chats/page.tsx";

interface ContextType {
    chatList?: ChatItem[]
}

export const ChatListContext = createContext<ContextType>({})

interface Props {
    chatList: ChatItem[],
    children: React.ReactNode
}

export default function Chats(props: Props) {

    const {
        chatList,
        children
    } = props

    return (
        <ChatListContext.Provider value={{chatList}}>
            <div className={styles.container}>
                {children}
            </div>
        </ChatListContext.Provider>
    )
}