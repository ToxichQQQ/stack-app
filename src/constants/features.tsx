import {TFeature} from "../types";
import {FiTwitch, FiVideo} from "react-icons/fi";

export const features: TFeature[] = [
    {
        route:'/meet',
        label: 'feature_meet',
        icon: FiVideo
    },
    {
        route: '/chat',
        label: 'feature_chat',
        icon: FiTwitch
    }
]