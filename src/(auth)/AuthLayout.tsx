import styles from "./layout.module.scss"
import logo from '@/public/logo-max.png'
import {Link, Outlet} from "react-router-dom";

function AuthLayout() {
    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link
                        to={'/'}
                        className={styles.link}
                    >
                        <img
                            src={logo}
                            alt={"logo"}
                            className={styles.img}
                        />
                        <h2 className={styles.title}>Quik</h2>
                    </Link>
                </div>
                <div className={styles.mainContainer}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export {AuthLayout}