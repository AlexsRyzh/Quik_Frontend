import {Header} from "@/component/header/Header";
import Content from "@/component/content/Content";
import './reset.scss'
import './global.scss'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Outlet} from "react-router-dom";
import {Fragment} from "react";


function RootLayout() {


    return (
        <Fragment>
            <Header/>
            <Content>
                <Outlet/>
            </Content>
            <ToastContainer autoClose={1000}/>
        </Fragment>
    )
}

export {RootLayout}