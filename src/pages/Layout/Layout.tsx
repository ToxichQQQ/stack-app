import React from 'react'
import {Outlet} from "react-router";



export const Layout = () => {
    return <div className='bg-purple-900 h-screen w-full flex flex-col gap-8 p-2 relative'>
        <div className='flex gap-4 absolute'>
            <button>
                <img alt='lan-en' src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48"/>
            </button>
            <button>
                <img alt='lan-ru' src="https://hatscripts.github.io/circle-flags/flags/ru.svg" width="48"/>
            </button>
        </div>
        <Outlet/>
    </div>
}