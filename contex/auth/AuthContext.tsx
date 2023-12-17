import {createContext, useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

interface ContextType {
    userID?: number
}

export const AuthContextProvider = createContext<ContextType>({})


const openLink = [
    "/login",
    "/greeting",
    "/register"
]
export default function AuthContext() {

    const navigate = useNavigate()
    const pathname = useLocation().pathname

    const access_token = localStorage.getItem('access_token');
    const userID = Number(localStorage.getItem("userID"))
    
    useEffect(() => {
        if (!access_token && !openLink.includes(pathname) && !access_token) {
            navigate('/greeting')
        }

        if (access_token && openLink.includes(pathname) && access_token) {
            navigate('/')
        }

    }, [pathname, access_token]);

    return (
        <AuthContextProvider.Provider value={{userID}}>
            <Outlet/>
        </AuthContextProvider.Provider>
    )
}