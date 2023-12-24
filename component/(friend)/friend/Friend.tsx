import React, {createContext} from "react";
import styles from './friend-list.module.scss'
import {FriendInfo} from "@/src/(content)/friends/Friends.tsx";

interface ContextType {
    friendsInfo?: FriendInfo
}

export const FriendListContext = createContext<ContextType>({})


interface Props {
    friendsInfo?: FriendInfo,
    children: React.ReactNode,
}

export default function Friend(props: Props) {

    const {friendsInfo, children} = props

    return (
        <FriendListContext.Provider value={{friendsInfo}}>
            <div className={styles.container}>
                {children}
            </div>
        </FriendListContext.Provider>
    )

}