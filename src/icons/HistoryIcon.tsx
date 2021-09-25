import React from 'react';
import { Circle, Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath';
import { PathPropsWithFill } from './PathProps';

const HistoryIcon = iconFromPath<PathPropsWithFill>(({color, type}) => {
    return (
        type === 'filled'
            ?
        <Path 
            fill-rule="evenodd" clip-rule="evenodd" 
            d="M1.375 8C1.375 4.34111 4.34111 1.375 8 1.375C11.6589 1.375 14.625 4.34111 14.625 8C14.625 11.6589 11.6589 14.625 8 14.625C4.34111 14.625 1.375 11.6589 1.375 8ZM8.625 6C8.625 5.65482 8.34518 5.375 8 5.375C7.65482 5.375 7.375 5.65482 7.375 6V8C7.375 8.23673 7.50875 8.45315 7.72049 8.55902L9.72049 9.55902C10.0292 9.71339 10.4046 9.58825 10.559 9.27951C10.7134 8.97077 10.5882 8.59535 10.2795 8.44098L8.625 7.61373V6Z" 
            fill={color}
        />
            
            :
        <>
            <Circle cx="8" cy="8" r="6" stroke={color} stroke-width="1.25"/>
            <Path 
                d="M9.72049 9.55902C10.0292 9.71339 10.4046 9.58825 10.559 9.27951C10.7134 8.97077 10.5882 8.59535 10.2795 8.44098L9.72049 9.55902ZM8 8H7.375C7.375 8.23673 7.50875 8.45315 7.72049 8.55902L8 8ZM8.625 6C8.625 5.65482 8.34518 5.375 8 5.375C7.65482 5.375 7.375 5.65482 7.375 6H8.625ZM10.2795 8.44098L8.27951 7.44098L7.72049 8.55902L9.72049 9.55902L10.2795 8.44098ZM8.625 8V6H7.375V8H8.625Z"
                fill={color}
            />

        </>
            
    )
});

export default HistoryIcon;