import React from "react";
import {features} from "../../constants";
import {FeatureCard} from "../../components/FeatureCard";



export const Main = () => {
    return <div className='flex py-20 gap-4 h-full'>
        {features.map((feature ,index )=> <FeatureCard key={index} feature={feature}/>)}
    </div>
}