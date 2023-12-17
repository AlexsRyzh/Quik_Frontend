import styles from './chat-message.module.scss'
import svg1 from '@/public/Vectormessage-suffix.svg'
import svg2 from '@/public/Vector.svg'
import clsx from "clsx";

interface Props {
    message: string,
    img?: any,
    from: number,
    date: Date,
    my: boolean
}

export default function ChatMessage(props: Props) {

    const {
        message,
        img,
        my
    } = props

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
                    <img src={img} alt={""} className={styles.img}/>
                )}
            </div>
            {my && (
                <img src={svg2} alt={'Хвостик'}/>
            )}
        </div>
    )
}