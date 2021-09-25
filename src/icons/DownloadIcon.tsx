import React from 'react'
import { Path } from 'react-native-svg'
import { iconFromPath } from './iconFromPath'

const DownloadIcon = iconFromPath(({color}) => {
    return (
        <>
            <Path 
                d="M3 9V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V9" 
                stroke={color} stroke-width="1.25" stroke-linecap="round"
            />
            <Path d="M5 6L8 9L11 6" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8 9V3" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
    )
});

export default DownloadIcon;
