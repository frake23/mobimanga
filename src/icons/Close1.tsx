import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export default function Close1Icon({stroke, ...props}: SvgProps) {
    return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
            <Path d="M4 12L8 8L4 4" stroke={stroke} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 12L8 8L12 4" stroke={stroke} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}
