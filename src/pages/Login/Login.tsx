import React from "react";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";

export const Login = () => {
    const {t} = useTranslation()
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const handleLogin = (auth: Record<string, string>) => {
        const {login} = auth

        localStorage.setItem('login', login)
        navigate('/main')
    }

    return <div className='flex justify-center h-full items-center'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleLogin)}>
                <input className='rounded p-1' placeholder={t('form_login')} {...register('login')}/>
                <input className='rounded p-1' placeholder={t('form_password')} {...register('password')}/>
                <button className='rounded text-black bg-yellow-500' type='submit'>{t('form_submit')}</button>
            </form>
    </div>
}