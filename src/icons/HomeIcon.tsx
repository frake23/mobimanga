import React from 'react';
import { Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath';
import { PathPropsWithFill } from './PathProps';

const HomeIcon = iconFromPath<PathPropsWithFill>(({color, type}) => {
    return (
        type === 'filled'
            ?
        <Path 
            d="M8.70278 1.76184C8.29191 1.43315 7.70809 1.43315 7.29722 1.76184L2.98487 5.21172C2.5994 5.5201 2.375 5.98698 2.375 6.48063V13.5C2.375 14.1213 2.87868 14.625 3.5 14.625H12.5C13.1213 14.625 13.625 14.1213 13.625 13.5V6.48063C13.625 5.98698 13.4006 5.5201 13.0151 5.21172L8.70278 1.76184Z"
            fill={color}
        />
            :
        <Path d="M13 6.48062C13 6.17684 12.8619 5.88953 12.6247 5.69976L8.31235 2.24988C8.12974 2.10379 7.87026 2.10379 7.68765 2.24988L3.3753 5.69976C3.13809 5.88953 3 6.17684 3 6.48062V13.5C3 13.7761 3.22386 14 3.5 14H12.5C12.7761 14 13 13.7761 13 13.5V6.48062Z"
            stroke={color} stroke-width="1.25"
        />
    )
});

export default HomeIcon;
