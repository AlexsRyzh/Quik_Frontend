import styles from './mini-profile.module.scss'
import img from '@/public/profile-img.png'
import {useEffect, useState} from "react";
import $api from "@/http/api";
import {User} from "@/const/const";
import {Link} from "react-router-dom";


export default function MiniProfile() {

    const [user, setUser] = useState<User>({})
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let timeout: any
        const fetch = async () => {
            try {
                const res = await $api.get(`/users-me`)


                setUser({...res.data})

            } catch (e) {
                console.log(e)
            }

            timeout = setTimeout(() => {
                if (refresh == 1000) {
                    setRefresh(0)
                } else {
                    setRefresh(prev => prev + 1)
                }
            }, 1000)
        }
        fetch()

        return () => {
            clearTimeout(timeout)
        }
    }, [refresh]);

    return (
        <div className={styles.container}>
            <Link to={`/profiles/${user.id}`}>
                <div className={styles.contactContainer}>
                    <img className={styles.img} src={img} alt={"Фото профиля"}/>
                    <div className={styles.contact}>
                        <h3 className={styles.fio}>{user.name} {user.surname}</h3>
                        <p className={styles.tag}>@{user.tag}</p>
                    </div>
                </div>
            </Link>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <p>{user.amount_posts}</p>
                    <p className={styles.infoName}>Посты</p>
                </div>
                <div className={styles.info}>
                    <p>{user.amount_subscribers}</p>
                    <p className={styles.infoName}>Подписчиков</p>
                </div>
                <div className={styles.info}>
                    <p>{user.amount_subscribe}</p>
                    <p className={styles.infoName}>Подписки</p>
                </div>
            </div>
        </div>
    )
}