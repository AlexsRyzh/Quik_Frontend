import ChatPage from "@/component/(chat)/chat-page/ChatPage";
import ChatHeader from "@/component/(chat)/chat-header/ChatHeader";
import ChatMessageList from "@/component/(chat)/chat-message-list/ChatMessageList";
import ChatInput from "@/component/(chat)/input-chat-post/ChatInput.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import $api from "@/http/api.tsx";

interface Message {
    id: number,
    text: string,
    img_link: string,
    user_id: number,
    date: Date
}

export interface ChatData {
    userTo: {
        id: number,
        name: string,
        surname: string,
        imgLink: string
    },
    messages: Message[]
}


export default function Chat() {
    const {id: chatID} = useParams();

    const [refresh, setRefresh] = useState(0)
    const [chatInfo, setChatInfo] = useState<ChatData>()

    useEffect(() => {
        let timeout: any

        const fetch = async () => {
            try {
                const res = await $api.get(`/get-chat-info/${chatID}`)
                setChatInfo(res.data)

            } catch (e) {
                console.log(e)
            }
            timeout = setTimeout(() => setRefresh(prev => prev + 1), 500)
        }
        fetch()

        return () => {
            clearTimeout(timeout)
        }
    }, [refresh]);

    console.log(chatInfo)
    return (
        <ChatPage chatData={chatInfo} chatID={chatID}>
            <ChatHeader/>
            <ChatMessageList/>
            <ChatInput/>
        </ChatPage>
    )
}