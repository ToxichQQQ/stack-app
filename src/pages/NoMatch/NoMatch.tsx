import React from "react";
import {useLocation} from "react-router";




export const NoMatch = () => {
    const location = useLocation();

    return <div className='h-full flex justify-center items-center flex-col'>
        <h3 className='text-white'>
            Нет страницы с путем <code>{location.pathname}</code>
        </h3>
        <p className='text-white'>
            Проверьте правильность написание вашего пути
        </p>
    </div>
}