import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootLayout} from "./RootLayout.tsx";
import {AuthLayout} from "@/src/(auth)/AuthLayout.tsx";
import './reset.scss'
import './global.scss'
import Greeting from "@/src/(auth)/greeting/Gretting.tsx";
import Login from "@/src/(auth)/login/Login.tsx";
import Register from "@/src/(auth)/register/Register.tsx";
import ContentLayout from "@/src/(content)/ContentLayout.tsx";
import Home from "@/src/(content)/home/Home.tsx";
import ChatLayout from "@/src/(content)/chats/ChatLayout.tsx";
import ChatListPage from "@/src/(content)/chats/page.tsx";
import Chat from "@/src/(content)/chats/[id]/Chat.tsx";
import AuthContext from "@/contex/auth/AuthContext.tsx";
import FriendList from "@/component/(friend)/friend-list/FriendList.tsx";
import ProfilesID from "@/src/(content)/profiles/[id]/page.tsx";

/// http://localhost:3000/

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthContext/>}>
                    <Route element={<RootLayout/>}>
                        <Route element={<AuthLayout/>}>
                            <Route path={'/greeting'} element={<Greeting/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'/register'} element={<Register/>}/>
                        </Route>

                        <Route element={<ContentLayout/>}>
                            <Route path={'/'} element={<Home/>}/>

                            <Route element={<ChatLayout/>}>
                                <Route path={'/chats'} element={<ChatListPage/>}/>
                                <Route path={'/chats/:id'} element={<Chat/>}/>
                            </Route>


                            <Route path={'/friends'} element={<FriendList/>}/>
                            <Route path={'/profiles/:id'} element={<ProfilesID/>}/>
                        </Route>
                    </Route>
                </Route>


            </Routes>
        </BrowserRouter>

    )
}

export default App
