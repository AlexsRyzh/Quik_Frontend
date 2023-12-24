import styles from './chat-message.module.scss'
import svg1 from '@/public/Vectormessage-suffix.svg'
import svg2 from '@/public/Vector.svg'
import clsx from "clsx";

interface Props {
    message: string,
    img?: string,
    from: number,
    date: Date,
}

export default function ChatMessage(props: Props) {

    const {
        message,
        img,
        from
    } = props


    const my = localStorage.getItem("user_id") === from.toString()

    return (
        <div className={clsx(
            styles.container,
            my && styles.myContainer
        )}>
            {!my && (
                <img src={svg1} alt={'Хвостик'}/>
            )}
            <div className={clsx(
                styles.blockMessage,
                my && styles.myMessage
            )}>
                <pre className={styles.message}>
                    {message}
                </pre>
                {img && (
                    <img src={img === "" ? "" : `http://localhost:3000/upload/${img}`} alt={""} className={styles.img}/>
                )}
            </div>
            {my && (
                <img src={svg2} alt={'Хвостик'}/>
            )}
        </div>
    )
}