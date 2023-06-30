import React from 'react'
import {Outlet} from "react-router";



export const Layout = () => {

    return <div className='bg-purple-900 h-screen w-full flex flex-col gap-8 p-2'>
        <Outlet/>
    </div>
}