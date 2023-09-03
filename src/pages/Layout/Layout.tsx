import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Toolbar from "./Toolbar/Toolbar"


export const Layout = () => {
    return (
        <>
            <Header />
            <Toolbar />
            <Outlet />
        </>
    )
}