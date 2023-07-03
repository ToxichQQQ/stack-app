import React, {FC, ReactElement} from "react";
import {Navigate} from "react-router";


interface IProps {
    children: ReactElement
}

export const RouterProtector:FC<IProps> = ({children}) => {
    const user = localStorage.getItem('login')

    if (!user) {
        return <Navigate to='/auth' replace/>
    }

    return  children
}