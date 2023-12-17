import styles from './comment-input.module.scss'
import img from "@/public/profile-img.png"
import Textarea from "@/component/textarea/Textarea";
import {Button} from "@/component/button/Button";
import clsx from "clsx";
import {useCallback, useContext, useState} from "react";
import {PostCardContext} from "@/component/(post)/post-card/PostCard";
import $api from "@/http/api";

interface Props {
    refreshComment: any
}

export default function CommentInput(props: Props) {

    const {refreshComment} = props

    const {postID} = useContext(PostCardContext)
    const [text, setText] = useState("")

    const onChange = useCallback((e: any) => {
        setText(e.target.value)
    }, [])

    const handleCreateComment = useCallback(async () => {
        try {
            if (text !== "") {
                await $api.post(`/comments/${postID}`, {message: text})
                setText("")
                refreshComment()
            }
        } catch (e) {
            console.log(e)
        }
    }, [text])

    return (
        <div className={styles.container}>
            <img src={img} alt={'Фото'} className={styles.img}/>
            <Textarea
                placeholder={"Написать комментарий"}
                className={styles.input}
                value={text}
                onChange={onChange}
            />
            <Button className={styles.button} onClick={handleCreateComment}>
                <span
                    className={clsx(
                        "material-symbols-rounded",
                        styles.icon
                    )}

                >
                    send
                </span>
            </Button>
        </div>
    )
}