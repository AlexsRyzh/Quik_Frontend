import {useState} from "react";
import UploadButton from "../../upload-button/UploadButton";
import Textarea from "../../textarea/Textarea";
import ImageView from "../../image-view/ImageView";
import {Button} from "../../button/Button";
import clsx from "clsx";
import styles from "./post-input.module.scss"
import {toast} from "react-toastify";
import $api from "@/http/api.tsx";

interface Props {
    refresh: any
}

export default function PostInput(props: Props) {
    const {refresh} = props

    const [image, setImage] = useState<File>()
    const [imgUrl, setImgUrl] = useState<any>("")
    const [text, setText] = useState("")


    const createPost = async () => {
        if (text.trim() == "") {
            toast.error("Контент поста не может быть пустым")
            return
        }
        try {
            const formData = new FormData()
            formData.set("text", text)
            // @ts-ignore
            formData.set("images", image)
            await $api.post('/posts', formData)

            setText("")
            setImage(undefined)
            refresh()
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <UploadButton
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files) {
                            setImage(e.target.files[0]);
                            const fileReader = new FileReader()
                            fileReader.addEventListener(
                                "load",
                                () => {
                                    // convert image file to base64 string
                                    setImgUrl(fileReader.result);
                                },
                                false,
                            );

                            fileReader.readAsDataURL(e.target.files[0])
                        }
                    }}
                />
                <div className={styles.textImg}>
                    <Textarea
                        placeholder={"Написать сообщения"}
                        value={text}
                        onChange={(e: any) => setText(e.target.value)}

                    />
                    {image && (
                        <ImageView imgLink={imgUrl} onClick={() => setImage(undefined)}/>
                    )}
                </div>
                <Button className={styles.btn} onClick={createPost}>
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