import ChatPage from "@/component/(chat)/chat-page/ChatPage";
import img from '@/public/profile-img.png'
import ChatHeader from "@/component/(chat)/chat-header/ChatHeader";
import ChatMessageList from "@/component/(chat)/chat-message-list/ChatMessageList";
import PostChatInput from "@/component/(chat)/input-chat-post/PostChatInput.tsx";
import {useParams} from "react-router-dom";

const chatData = {
    userTo: {
        name: "Piter",
        surname: "Jackson",
        imgLink: img
    },
    messages: [
        {
            message: "дат, хватает и кидает в жопу Быстрого Гонзалеса.",
            from: 1,
            date: new Date(),
        },
        {
            message: "Идет Первая мировая война. На холме со своей свитой стоит царь Николай II и наблюдает за маневрами своих войск. Вдруг возле царя падает снаряд и шипит. Все опешили. Подбегает солдат, хватает и кидает в жопу Быстрого Гонзалеса.",
            img: img,
            from: 2,
            date: new Date(),
        },
        {
            message: "Идет Первая мировая война. На холме со своей свитой стоит царь Николай II и наблюдает за маневрами своих войск. Вдруг возле царя падает снаряд и шипит. Все опешили. Подбегает солдат, хватает и кидает в жопу Быстрого Гонзалеса.",
            img: img,
            from: 2,
            date: new Date(),
        },
        {
            message: "Идет Первая мировая война. На холме со своей свитой стоит царь Николай II и наблюдает за маневрами своих войск. Вдруг возле царя падает снаряд и шипит. Все опешили. Подбегает солдат, хватает и кидает в жопу Быстрого Гонзалеса.",
            img: img,
            from: 1,
            date: new Date(),
        },
    ]
}


export default function Chat() {

    let {id} = useParams();

    return (
        <ChatPage userTo={id} chatData={chatData}>
            <ChatHeader/>
            <ChatMessageList/>
            <PostChatInput/>
        </ChatPage>
    )
}