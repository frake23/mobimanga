import React from 'react'
import { Path } from 'react-native-svg';
import { IconWrapper } from './IconWrapper'

const LogoutIcon = IconWrapper(({color}) => {
    return (
        <>
            <Path 
                d="M9 13L12 13C12.5523 13 13 12.5523 13 12L13 4C13 3.44772 12.5523 3 12 3L9 3"
                stroke={color} stroke-width="1.25" stroke-linecap="round"
            />
            <Path d="M6 11L3 8L6 5" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9 8L3 8" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
    )
});

export default LogoutIcon;
