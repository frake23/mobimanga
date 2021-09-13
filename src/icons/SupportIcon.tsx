import React from 'react'
import { Path } from 'react-native-svg';
import { IconWrapper } from './IconWrapper'

const SupportIcon = IconWrapper(({color}) => {
    return (
        <>
            <Path 
                fill-rule="evenodd" clip-rule="evenodd"
                d="M12.7142 12.7133C10.6768 14.7509 7.65986 15.1911 5.19095 14.0494C4.82648 13.9026 4.52767 13.784 4.24359 13.784C3.45234 13.7887 2.46745 14.5559 1.95558 14.0447C1.44371 13.5327 2.21152 12.5471 2.21152 11.751C2.21152 11.4669 2.09762 11.1735 1.95089 10.8083C0.808564 8.33976 1.24942 5.3218 3.28685 3.28481C5.88774 0.682965 10.1134 0.682965 12.7142 3.28414C15.3198 5.89001 15.3151 10.1121 12.7142 12.7133Z"
                stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
            />
            <Path d="M10.6263 8.27535H10.6323" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M7.95359 8.27535H7.95959" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M5.28096 8.27535H5.28696" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </>
    );
});

export default SupportIcon;
