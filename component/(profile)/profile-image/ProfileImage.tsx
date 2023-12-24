import styles from './profile-image.module.scss'
import img from '@/public/profile-img.png'

interface Props {
    src?: string,
    online?: boolean
}

export default function ProfileImage(props: Props) {

    const {src} = props

    return (
        <div className={styles.container}>
            <img src={src === "" ? img : src} alt={""} className={styles.img}/>
        </div>
    )
}