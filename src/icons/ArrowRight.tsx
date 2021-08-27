import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default function ArrowRightIcon({stroke, ...props}: SvgProps) {
    return(
        <Svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            {...props}
        >
            <Path d="M6 12L10 8L6 4" stroke={stroke} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )

}
