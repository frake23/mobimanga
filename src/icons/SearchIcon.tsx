import React from 'react';
import { Circle, Path } from 'react-native-svg';
import { iconFromPath } from './iconFromPath';
import { PathPropsWithFill } from './PathProps';

const SearchIcon = iconFromPath<PathPropsWithFill>(({color, type}) => {
    return (
        type === 'filled'
            ?
        <Path 
            d="M11.2778 12.1616C10.2463 12.9985 8.93173 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 8.93173 12.9985 10.2463 12.1616 11.2778L13.9419 13.0581C14.186 13.3021 14.186 13.6979 13.9419 13.9419C13.6979 14.186 13.3021 14.186 13.0581 13.9419L11.2778 12.1616Z"
            fill={color}
        />
            :
        <>
            <Circle 
                cx="7.5" cy="7.5" r="5.375" 
                stroke={color} stroke-width="1.25"
            />
            <Path 
                d="M11.5 11.5L13.5 13.5" 
                stroke={color} stroke-width="1.25" stroke-linecap="round"
            />
        </>
    )
});

export default SearchIcon;
