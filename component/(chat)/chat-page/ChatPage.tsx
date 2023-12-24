import React, {createContext} from "react";
import styles from './chat-page.module.scss'
import {ChatData} from "@/src/(content)/chats/[id]/Chat.tsx";

interface ContextType {
    chatData?: ChatData
    chatID?: string
}

export const ChatPageContext = createContext<ContextType>({})

interface Props {
    chatData?: ChatData
    chatID?: string
    children: React.ReactNode
}

export default function ChatPage(props: Props) {

    const {chatData, children, chatID} = props

    return (
        <ChatPageContext.Provider value={{chatData, chatID}}>
            <div className={styles.container}>
                {children}
            </div>
        </ChatPageContext.Provider>
    )
}