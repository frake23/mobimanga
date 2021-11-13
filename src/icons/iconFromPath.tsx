import React from 'react';
import { Svg, Defs, LinearGradient, Stop } from 'react-native-svg';
import {IconFromPathFn} from './types';


export const iconFromPath: IconFromPathFn = (Path) => ({size, color, style, ...props}) => {
    const gradient = Array.isArray(color);
    const clr = gradient ? 'url(#grad)' : color;
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            style={style}
        >
            {
                gradient
                    && 
                <Defs>
                    <LinearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                        <Stop offset="0" stopColor={color[0]} stopOpacity="1"/>
                        <Stop offset="1" stopColor={color[1]} stopOpacity="1"/>
                    </LinearGradient>
                </Defs>
            }
            <Path color={clr} {...props as any}/>
        </Svg>
    )
}
