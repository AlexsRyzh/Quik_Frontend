import styles from './image-view.module.scss'
import {Button} from "@/component/button/Button";
import clsx from "clsx";

interface Props {
    imgLink: any
    onClick?: any
}

export default function ImageView(props: Props) {

    const {imgLink, onClick} = props

    return (
        <div className={styles.container}>
            <img src={imgLink} alt={'Фото'} className={styles.img}/>
            <Button className={styles.button} onClick={onClick}>
                <span className={clsx(
                    "material-symbols-rounded",
                    styles.icon
                )}>
                    close
                </span>
            </Button>
        </div>
    )
}