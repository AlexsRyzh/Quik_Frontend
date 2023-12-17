import React, {useEffect} from "react";
import {motion} from "framer-motion";
import styles from './modal.module.scss'
import clsx from "clsx";
import {Button} from "@/component/button/Button.tsx";

interface Props {
    isOpen: boolean,
    onChangeOpen: any,
    onSave?: any,
    onCancel?: any,
    children: React.ReactNode,
}

export default function Modal(props: Props) {

    const {
        isOpen,
        onChangeOpen,
        onSave,
        onCancel,
        children
    } = props

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            return
        }
        document.body.style.overflow = 'auto'
    }, [isOpen]);

    return (
        <>
            {isOpen ? (
                <motion.div
                    className={styles.container}
                >
                    <div className={styles.innerCotainer}>
                        <div className={styles.header}>
                            <span
                                onClick={() => onChangeOpen(false)}
                                className={clsx("material-symbols-rounded", styles.closeBtn)}
                            >
                                close
                            </span>
                        </div>

                        <div className={styles.contant}>
                            {children}
                        </div>

                        <div className={styles.footer}>
                            <Button onClick={onCancel} className={styles.onCloseBtn}>Отменить</Button>
                            <Button onClick={onSave} className={styles.OnSaveBtn}>Сохранить</Button>
                        </div>
                    </div>
                </motion.div>
            ) : null}
        </>

    )
}