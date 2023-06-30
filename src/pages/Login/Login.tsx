import React from "react";

export const Login = () => {
    return <div className='flex justify-center h-full items-center'>
            <form className='flex flex-col gap-4'>
                <input className='rounded p-1' placeholder='Логин'/>
                <input className='rounded p-1' placeholder='Пароль'/>
                <button className='rounded text-black bg-yellow-500' type='submit'>Войти</button>
            </form>
    </div>
}