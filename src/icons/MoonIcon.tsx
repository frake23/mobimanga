import React from 'react'
import { Path } from 'react-native-svg'
import { IconWrapper } from './IconWrapper'
import { PathPropsWithSwitch } from './PathProps'

const MoonIcon = IconWrapper<PathPropsWithSwitch>(({color, type}) => {
    return (
        type === 'on'
            ?
        <Path
            d="M9.72721 10.4773C7.40512 10.4773 5.5227 8.59488 5.5227 6.27279C5.5227 4.95049 6.13312 3.77075 7.08753 3C4.7591 3.44749 3 5.49561 3 7.9546C3 10.7411 5.2589 13 8.0454 13C10.5044 13 12.5525 11.2409 13 8.91247C12.2292 9.86688 11.0495 10.4773 9.72721 10.4773Z"
            fill={color} stroke={color} stroke-width="1.25" stroke-linejoin="round"
        />
           :
        <Path 
            d="M9.72721 10.4773C7.40512 10.4773 5.5227 8.59488 5.5227 6.27279C5.5227 4.95049 6.13312 3.77075 7.08753 3C4.7591 3.44749 3 5.49561 3 7.9546C3 10.7411 5.2589 13 8.0454 13C10.5044 13 12.5525 11.2409 13 8.91247C12.2292 9.86688 11.0495 10.4773 9.72721 10.4773Z"
            stroke={color} stroke-width="1.25" stroke-linejoin="round"
        />
 
    )
});

export default MoonIcon;
