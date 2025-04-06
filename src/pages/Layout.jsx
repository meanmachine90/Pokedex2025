import { Outlet, useLocation } from "react-router";
import { Page } from "../components/Page";


const titles = {
    "/": "Dashboard",
    "/Mycollection": "Mi Colección",
    "/About": "Acerca de"
}

export const Layout = () => {
    const { pathname: currentPath } = useLocation();
    return (
        <Page title={titles[currentPath] || 'Not Found'}>
            <Outlet />
        </Page>
    )

}