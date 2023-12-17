import React, {createContext} from "react";
import styles from './chat-page.module.scss'

interface Message {
    message: string,
    img?: any,
    from: number,
    date: Date,
}

interface ChatData {
    userTo: {
        name: string
        surname: string
        imgLink: any
    },
    messages: Message[]
}

interface ContextType {
    userTo?: string,
    chatData?: ChatData
}

export const ChatPageContext = createContext<ContextType>({})

interface Props {
    chatData: ChatData
    userTo?: string
    children: React.ReactNode
}

export default function ChatPage(props: Props) {

    const {chatData, children, userTo} = props

    return (
        <ChatPageContext.Provider value={{chatData, userTo}}>
            <div className={styles.container}>
                {children}
            </div>
        </ChatPageContext.Provider>
    )
}