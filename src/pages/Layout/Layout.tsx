import React from 'react'
import {Outlet} from "react-router";
import {useTranslation} from "react-i18next";



export const Layout = () => {
    const {i18n} = useTranslation()
    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang)
    }


    return <div className='bg-purple-900 h-screen w-full flex flex-col gap-8 p-2 relative'>
        <div className='flex gap-4 absolute'>
            <button onClick={() => handleLanguageChange('en')}>
                <img alt='lan-en' src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48"/>
            </button>
            <button onClick={() => handleLanguageChange('ru')}>
                <img alt='lan-ru' src="https://hatscripts.github.io/circle-flags/flags/ru.svg" width="48"/>
            </button>
        </div>
        <Outlet/>
    </div>
}