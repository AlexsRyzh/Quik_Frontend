import Chats from "@/component/(chat)/chats/Chats";
import ChatsList from "@/component/(chat)/chats-list/ChatsList";
import {useEffect, useState} from "react";
import $api from "@/http/api.tsx";

export interface ChatItem {
    id: number,
    idUserTo: number,
    name: string,
    imgLink: string,
    surname: string,
    lastMessage: {
        text: string,
        date: Date
    }
}

export default function ChatListPage() {

    const [chatList, setChatList] = useState<ChatItem[]>([])
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        const fetch = async () => {
            try {
                const res = await $api.get("/get-my-chat-list")

                let chatListTemp = []
                for (let chatItem of res.data) {
                    chatListTemp.push({
                        id: chatItem.id,
                        idUserTo: chatItem.idUserTo,
                        name: chatItem.name,
                        imgLink: chatItem.imgLink,
                        surname: chatItem.surname,
                        lastMessage: {
                            text: chatItem.lastMessage.text,
                            date: new Date(chatItem.lastMessage.date)
                        }
                    })
                }

                setChatList(chatListTemp)
            } catch (e) {
                console.log(e)
            }
            timeout = setTimeout(() => {
                setRefresh(prev => prev + 1)
            }, 1000)
        }
        fetch()
        return () => {
            clearTimeout(timeout)
        }
    }, [refresh]);


    return (
        <Chats chatList={chatList}>
            <ChatsList/>
        </Chats>
    )
}