import {createBrowserRouter} from "react-router-dom"
import {Layout, Login, NoMatch, Registration, Meet} from "../pages"


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
            },
            {
                path: '*',
                element: <NoMatch/>
            }
            ],
    },
]


export const router = createBrowserRouter(routes)