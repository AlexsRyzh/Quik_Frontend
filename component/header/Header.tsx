import styles from './header.module.scss'
import logo from '@/public/logo.png'
import {Button} from "@/component/button/Button";
import {Link, useNavigate} from "react-router-dom";

export function Header() {

    const isAuth = localStorage.getItem('access_token')
    const naviagate = useNavigate()

    return (
        <header className={styles.container}>
            <div className={styles.innerContainer}>
                <Link
                    to={"/"}
                    className={styles.logoContainer}
                >
                    <img
                        src={logo}
                        alt={"Лого"}
                        className={styles.logo}
                    />
                    <h3 className={styles.logoText}>Quik</h3>
                </Link>
                {isAuth && (
                    <Button
                        onClick={() => {
                            localStorage.clear()
                            naviagate('/')
                        }}
                    >
                        Выйти
                    </Button>
                )}

            </div>
        </header>
    )
}