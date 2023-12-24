import {useEffect, useState} from "react";
import $api from "@/http/api";
import PostCard from "@/component/(post)/post-card/PostCard";
import PostHeader from "@/component/(post)/post-header/PostHeader";
import PostText from "@/component/(post)/post-text/PostText";
import PostImage from "@/component/(post)/post-image/PostImage";
import styles from './profile.module.scss'
import PostFooter from "@/component/(post)/post-footer/PostFooter";
import ProfileInfo from "@/component/(profile)/profile-info/ProfileInfo";
import PostInput from "@/component/(post)/post-input/PostInput.tsx";

interface Props {
    id: string | undefined
}

export default function Profile(props: Props) {

    const {id} = props

    const [ids, setIDs] = useState([])
    const [userIDs, setUserIDs] = useState([])

    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        console.log(refresh)
        const fetch = async () => {
            try {
                const res = await $api.get(`/posts-ids/${id}`)

                console.log(res.data)

                setIDs(res.data['ids'])
                setUserIDs(res.data['user_id'])

            } catch (e) {
                console.log(e)
            }
        }
        fetch()
    }, [refresh]);


    return (
        <>
            <ProfileInfo id={id}/>
            <div className={styles.inputContainer}>
                <PostInput refresh={() => setRefresh(prev => prev + 1)}/>
            </div>
            <div className={styles.postContainer}>
                {ids?.map((value, index) => {
                    return (
                        <PostCard value={{postID: value, userID: userIDs[index]}} key={value}>
                            <PostHeader/>
                            <PostText/>
                            <PostImage/>
                            <PostFooter/>
                        </PostCard>
                    )
                })}
            </div>
        </>
    )
}