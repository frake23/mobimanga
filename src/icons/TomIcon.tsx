import React from 'react'
import { Mask, Path, Rect } from 'react-native-svg';
import { IconWrapper } from './IconWrapper'
import { PathPropsWithNumber } from './PathProps';

const TomIcon = IconWrapper<PathPropsWithNumber>(({color, type}) => {
    return (
        type === 1
            ?
        <>
            <Mask id="path-1-inside-1" fill="white">
                <Rect x="3" y="2" width="10" height="12" rx="1"/>
            </Mask>
            <Rect x="3" y="2" width="10" height="12" rx="1" stroke={color} stroke-width="2.5" stroke-linejoin="round" mask="url(#path-1-inside-1)"/>
            <Path 
                d="M7.625 6.98873V2.625H10.375V6.98873L9.27951 6.44098L9 6.30123L8.72049 6.44098L7.625 6.98873Z" 
                stroke={color} stroke-width="1.25"
            />
        </>
            :
        <Path 
            d="M4 2H12V13.191C12 13.5627 11.6088 13.8044 11.2764 13.6382L8 12L4.72361 13.6382C4.39116 13.8044 4 13.5627 4 13.191V2Z"
            stroke={color} stroke-width="1.25" stroke-linejoin="round"
        />
            
    )
});

export default TomIcon;
