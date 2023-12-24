import Friend from "@/component/(friend)/friend/Friend";
import FriendList from "@/component/(friend)/friend-list/FriendList";
import {useEffect, useState} from "react";
import styles from './friend.module.scss'
import $api from "@/http/api.tsx";
import SubList from "@/component/(friend)/sub-list/SubList.tsx";

interface User {
    id: number,
    imgLink: string,
    name: string,
    surname: string,
}

export interface FriendInfo {
    subscriber: User[],
    friends: User[]
}

export default function Friends() {

    const [friendsInfo, setFriendsInfo] = useState<FriendInfo>()
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let timeout: any
        const fetch = async () => {
            try {
                const subscriberRes = await $api.get('/friend-requests')
                const friendRes = await $api.get('/friend-list')

                setFriendsInfo({
                    subscriber: subscriberRes.data,
                    friends: friendRes.data,
                })

            } catch (e) {
                console.log(e)
            }
            timeout = setTimeout(() => setRefresh(prev => prev + 1), 2000)
        }
        fetch()
        return () => {
            clearTimeout(timeout)
        }
    }, [refresh]);

    return (
        <Friend friendsInfo={friendsInfo}>
            <h1 className={styles.header}>Подписчики</h1>
            <SubList/>
            <h1 className={styles.header}>Друзья</h1>
            <FriendList/>
        </Friend>
    )
}