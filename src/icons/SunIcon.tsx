import React from 'react'
import { Circle, Path } from 'react-native-svg'
import { iconFromPath } from './iconFromPath'
import { PathPropsWithSwitch } from './PathProps'

const SunIcon = iconFromPath<PathPropsWithSwitch>(({color, type}) => {
    return (
        type === 'on'
            ?
        <>
            <Circle cx="8" cy="8" r="2" fill={color} stroke={color} stroke-width="1.25"/>
            <Path d="M8 2.5V4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8 13.5V12" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M13.5 8L12 8" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M2.5 8L4 8" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 4L11 5" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 12L11 11" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 4L5 5" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 12L5 11" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
            :
        <>
            <Circle cx="8" cy="8" r="2" stroke={color} stroke-width="1.25"/>
            <Path d="M8 2.5V4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8 13.5V12" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M13.5 8L12 8" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M2.5 8L4 8" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 4L11 5" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 12L11 11" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 4L5 5" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 12L5 11" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
            
    )
});

export default SunIcon;
