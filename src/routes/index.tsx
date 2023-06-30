import {createBrowserRouter} from "react-router-dom"
import {Meet} from "../pages/Meet";
import {Login} from "../pages/Login";
import {Layout} from "../pages/Layout";
import {Registration} from "../pages/Registration";

const routes = [
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                path: "auth",
                element: <Login/>,
            },
            {
                path: 'registration',
                element: <Registration/>
            },
            {
                path: "meet",
                element: <Meet/>,
            }
            ],
    },
]


export const router = createBrowserRouter(routes)