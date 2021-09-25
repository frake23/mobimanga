import React from 'react';
import { Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath';
import { PathPropsWithNumber } from './PathProps';

const CloseIcon = iconFromPath<PathPropsWithNumber>(({color, type}) => {
    return (
        type === 1
            ?
        <>
            <Path d="M4 12L8 8L4 4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 12L8 8L12 4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
            :
        <>
            <Path d="M4 12L8 8L4 4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 12L8 8L12 4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </>
    )
});

export default CloseIcon;
