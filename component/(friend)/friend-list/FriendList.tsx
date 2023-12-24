import {useContext} from "react";
import {FriendListContext} from "@/component/(friend)/friend/Friend";
import styles from './friend-list.module.scss'
import {Link} from "react-router-dom";
import img from "@/public/profile-img.png";

export default function FriendList() {

    const {friendsInfo} = useContext(FriendListContext)

    return (
        <>
            {friendsInfo?.friends?.map((fri) => {
                return (
                    <Link
                        to={`/profiles/${fri.id}`}
                        className={styles.container}
                        key={fri.id}
                    >
                        {fri.imgLink}
                        <img src={fri.imgLink === "" ? img : fri.imgLink} alt={"Фото"} className={styles.img}/>
                        <p className={styles.fio}>{fri.name} {fri.surname}</p>
                    </Link>
                )
            })}
        </>
    )
}