import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { iconFromPath } from './iconFromPath';
import { PathProps } from './PathProps';

interface GridIconProps extends PathProps {
    type: 'big' | 'small'
}

const GridIcon = iconFromPath<GridIconProps>(({type, color}) => {
    return (
        type === 'big'
            ?
        <>
            <Rect x="2" y="9" width="5" height="5" rx="0.5" fill={color}/>
            <Rect x="3" y="3" width="4" height="4" rx="0.5" fill={color}/>
            <Rect x="9" y="9" width="4" height="4" rx="0.5" fill={color}/>
            <Rect x="9" y="2" width="5" height="5" rx="0.5" fill={color}/>
        </>
            :

        <Path 
            fill-rule="evenodd" clip-rule="evenodd" 
            d="M2.5 3C2.22386 3 2 3.22386 2 3.5V6.5C2 6.77614 2.22386 7 2.5 7H5.5C5.77614 7 6 6.77614 6 6.5V3.5C6 3.22386 5.77614 3 5.5 3H2.5ZM2.5 9C2.22386 9 2 9.22386 2 9.5V12.5C2 12.7761 2.22386 13 2.5 13H5.5C5.77614 13 6 12.7761 6 12.5V9.5C6 9.22386 5.77614 9 5.5 9H2.5ZM7 3.5H13.5C13.7761 3.5 14 3.72386 14 4C14 4.27614 13.7761 4.5 13.5 4.5H7V3.5ZM10.5 5.5H7V6.5H10.5C10.7761 6.5 11 6.27614 11 6C11 5.72386 10.7761 5.5 10.5 5.5ZM7 9.5H13.5C13.7761 9.5 14 9.72386 14 10C14 10.2761 13.7761 10.5 13.5 10.5H7V9.5ZM10.5 11.5H7V12.5H10.5C10.7761 12.5 11 12.2761 11 12C11 11.7239 10.7761 11.5 10.5 11.5Z"
            fill={color}
        />

    )
});

export default GridIcon;
