import styles from './chat-input.module.scss'
import UploadButton from "../../upload-button/UploadButton";
import {useState} from "react";
import Textarea from "../../textarea/Textarea";
import {Button} from "../../button/Button";
import ImageView from "../../image-view/ImageView";
import img from '../../../public/profile-img.png'
import clsx from "clsx";


export default function PostChatInput() {

    const [image, setImage] = useState<File>()

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <UploadButton
                    onChange={(e) => {
                        if (e.target.files) {
                            setImage(e.target.files[0]);
                        }
                    }}
                />
                <div className={styles.textImg}>
                    <Textarea
                        placeholder={"Написать сообщения"}
                    />
                    {image && (
                        <ImageView imgLink={img} onClick={() => setImage(undefined)}/>
                    )}
                </div>
                <Button className={styles.btn}>
                    <span className={clsx(
                        "material-symbols-rounded",
                        styles.icon
                    )}>
                        send
                    </span>
                </Button>
            </div>
        </div>
    )
}
