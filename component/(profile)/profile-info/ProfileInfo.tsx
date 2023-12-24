'use client'

import styles from './profile-info.module.scss'
import {useEffect, useState} from "react";
import bg from '@/public/background.png'
import ProfileImage from "@/component/(profile)/profile-image/ProfileImage";
import {Button} from "@/component/button/Button";
import clsx from "clsx";
import $api from "@/http/api";
import {User} from "@/const/const";
import {useNavigate} from "react-router-dom";
import Modal from "@/component/(modals)/modal/Modal.tsx";

interface Props {
    id: string | undefined
}

export default function ProfileInfo(props: Props) {

    const {id} = props

    const [user, setUser] = useState<User>({})
    const my_id = localStorage.getItem("user_id")


    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await $api.get(`/users/${id}`)
                if (id !== my_id) {
                    const res2 = await $api.get(`/is-friend/${id}`)
                    setUser({...res.data, is_friend: res2.data['is-friend']})
                    return
                }

                setUser({...res.data, is_friend: false})
            } catch (e) {
                console.log(e)
            }
        }

        fetch()
    }, []);

    const navigate = useNavigate();

    const [settingOpen, setSettingOpen] = useState(false)

    const handleToggleFriend = async () => {
        try {
            if (!user.is_friend) {
                await $api.post(`/friends/${id}`)
            } else {
                await $api.delete(`/friends/${id}`)
            }


            setUser(prev => ({...prev, is_friend: !prev.is_friend}))
        } catch (e) {
            console.log(e)
        }
    }


    const handleGoToChat = async () => {
        try {
            const res = await $api.post(`/chats/${id}`)
            navigate(`/chats/${res.data}`)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img src={bg} alt={""} className={styles.img}/>
                <div className={styles.bthInfo}>
                    <div className={styles.info}>
                        <ProfileImage src={user.img_link}/>
                        <div className={styles.fioTag}>
                            <p>{user.name} {user.surname}</p>
                            <p className={styles.tag}>@{user.tag}</p>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        {user.id !== Number(my_id) && (
                            <Button onClick={handleGoToChat}>
                                Сообщение
                            </Button>
                        )}
                        {user.id !== Number(my_id) && (
                            <Button className={styles.btn} onClick={handleToggleFriend}>
                                <span
                                    className={clsx("material-symbols-rounded", styles.icon)}
                                >
                                    {user.is_friend ? "person_remove" : "person_add"}
                                </span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <Modal isOpen={settingOpen} onChangeOpen={setSettingOpen}>
                <div>Редактор</div>
            </Modal>
        </>

    )
}
