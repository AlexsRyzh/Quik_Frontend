import {useContext} from "react";
import {FriendListContext} from "@/component/(friend)/friend/Friend";
import styles from './friend-list.module.scss'
import {Link} from "react-router-dom";

export default function FriendList() {

    const {friendList} = useContext(FriendListContext)

    return (
        <>
            {friendList?.map((v) => {
                return (
                    <Link
                        to={`/profiles/${v.userID}`}
                        className={styles.container}
                    >
                        <img src={v.img} alt={"Фото"} className={styles.img}/>
                        <p className={styles.fio}>{v.name} {v.surname}</p>
                    </Link>
                )
            })}
        </>
    )
}