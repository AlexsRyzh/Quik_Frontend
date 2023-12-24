import styles from './chat-message-list.module.scss'
import {useContext, useEffect, useRef} from "react";
import {ChatPageContext} from "@/component/(chat)/chat-page/ChatPage";
import ChatMessage from "@/component/(chat)/chat-message/ChatMessage";

interface Message {
    id: number,
    text: string,
    img_link: string,
    user_id: number,
    date: Date
}

export default function ChatMessageList() {

    const {chatData} = useContext(ChatPageContext)
    const refMessageListContainer = useRef<any>()

    useEffect(() => {
        refMessageListContainer.current.scrollTo(0, refMessageListContainer.current.scrollHeight)
    }, [refMessageListContainer.current, chatData?.messages?.length]);

    return (
        <div className={styles.container} ref={refMessageListContainer}>
            {chatData?.messages?.map((message: Message) => {
                return (
                    <ChatMessage
                        key={message.id}
                        message={message.text}
                        img={message.img_link}
                        from={message.user_id}
                        date={message.date}
                    />
                )
            })}
        </div>
    )
}