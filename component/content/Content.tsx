import styles from './content.module.scss'
import React from "react";

export default function Content({
    children
}: {
    children: React.ReactNode
}) {


    return (
        <main className={styles.container}>
            <div className={styles.innerContainer}>
                {children}
            </div>
        </main>
    )
}