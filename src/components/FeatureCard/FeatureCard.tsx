import React, {FC} from "react";
import {TFeature} from "../../types";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

interface IProps {
    feature: TFeature
}

export const FeatureCard:FC<IProps> = ({feature}) => {
    const navigate = useNavigate()
    const {t} = useTranslation()

    const {route, label, icon} = feature
    const Component = icon

    const handlePush = () => {
        navigate(route)
    }

    return <div onClick={handlePush} className='flex flex-col cursor-pointer border-2 rounded py-10 px-20 h-fit items-center'>
        <Component/>
        <p className='text-white font-medium'>{t(label)}</p>
    </div>
}