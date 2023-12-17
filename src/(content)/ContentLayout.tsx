import styles from './content-layout.module.scss'
import {NavList} from "@/component/nav-list/NavList";
import MiniProfile from "@/component/mini-profile/MiniProfile";
import {Outlet} from "react-router-dom";

export default function ContentLayout() {


    return (
        <div className={styles.container}>
            <section className={styles.nav}>
                <MiniProfile/>
                <NavList/>
            </section>
            <section className={styles.content}>
                <Outlet/>
            </section>
        </div>
    )
}