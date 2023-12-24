import Profile from "@/component/(profile)/profile/Profile";
import {useParams} from "react-router-dom";


export default function ProfilesID() {

    const {id} = useParams()
    return (
        <Profile id={id}/>
    )
}