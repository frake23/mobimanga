import React from 'react';
import { Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath';
import { PathProps } from './PathProps';

interface ArrowIconProps extends PathProps {
    type: 'left' | 'right' | 'up' | 'down'    
}

const ArrowIcon = iconFromPath<ArrowIconProps>(({type, color}) => {
    switch (type) {
        case 'left':
            return <Path d="M10 4L6 8L10 12" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        case 'right':
            return <Path d="M6 12L10 8L6 4" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        case 'up':
            return <Path d="M12 10L8 6L4 10" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        case 'down':
            return <Path d="M4 6L8 10L12 6" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        default: return <></>;
    }
});

export default ArrowIcon;
