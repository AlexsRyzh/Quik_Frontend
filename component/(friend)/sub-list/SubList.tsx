import {useContext} from "react";
import {Link} from "react-router-dom";
import {FriendListContext} from "../friend/Friend";
import img from '@/public/profile-img.png'
import styles from './sub-list.module.scss'

export default function SubList() {

    const {friendsInfo} = useContext(FriendListContext)

    return (
        <>
            {friendsInfo?.subscriber?.map((sub: any) => {
                return (
                    <Link
                        to={`/profiles/${sub.id}`}
                        className={styles.container}
                        key={sub.id}
                    >
                        <img src={sub.imgLink === "" ? img : sub.imgLink} alt={"Фото"} className={styles.img}/>
                        <p className={styles.fio}>{sub.name} {sub.surname}</p>
                    </Link>
                )
            })}
        </>
    )
}