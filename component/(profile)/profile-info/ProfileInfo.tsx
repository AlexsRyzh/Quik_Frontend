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


    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await $api.get(`/users/${id}`)

                setUser(res.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetch()
    }, []);

    const navigate = useNavigate();

    const [settingOpen, setSettingOpen] = useState(false)

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
                        {user.id !== Number(id) && (
                            <Button onClick={() => navigate('/chats/1')}>
                                Сообщение
                            </Button>
                        )}
                        {user.id !== Number(id) && (
                            <Button className={styles.btn}>
                            <span
                                className={clsx("material-symbols-rounded", styles.icon)}
                            >
                                {true ? "person_remove" : "person_add"}
                            </span>
                            </Button>
                        )}
                        {user.id === Number(id) && (
                            <Button className={styles.btn} onClick={() => setSettingOpen(true)}>
                            <span
                                className={clsx("material-symbols-rounded", styles.icon)}
                            >
                                settings
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
