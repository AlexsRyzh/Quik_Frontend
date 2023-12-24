import styles from './chat-input.module.scss'
import UploadButton from "../../upload-button/UploadButton";
import {useContext, useState} from "react";
import Textarea from "../../textarea/Textarea";
import {Button} from "../../button/Button";
import ImageView from "../../image-view/ImageView";
import clsx from "clsx";
import {toast} from "react-toastify";
import $api from "@/http/api.tsx";
import {ChatPageContext} from "@/component/(chat)/chat-page/ChatPage.tsx";


export default function ChatInput() {

    const [image, setImage] = useState<File>()
    const [imgUrl, setImgUrl] = useState<any>("")
    const [message, setMessage] = useState("")

    const {chatID} = useContext(ChatPageContext)

    const submitMessage = async () => {
        if (message.trim() === "") {
            toast.error("Сообщение не может быть пустым")
            return
        }

        try {
            const formData = new FormData()
            formData.set("text", message)
            // @ts-ignore
            formData.set("images", image)
            await $api.post(`/messages/${chatID}`, formData)

            setMessage("")
            setImage(undefined)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <UploadButton
                    onChange={(e) => {
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
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                    />
                    {image && (
                        <ImageView imgLink={imgUrl} onClick={() => setImage(undefined)}/>
                    )}
                </div>
                <Button className={styles.btn} onClick={submitMessage}>
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
