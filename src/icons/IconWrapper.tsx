import React from 'react';
import { Svg, Defs, LinearGradient, Stop, Color } from 'react-native-svg';
import {PathProps} from './PathProps';

type IconWrapperProps = {
    color: Color | [Color, Color],
    size: number
}
type IconWrapperFn = <T extends PathProps>(Path: (props: T) => JSX.Element) 
                        => React.FC<T & IconWrapperProps>;

export const IconWrapper: IconWrapperFn = (Path) => ({size, color, ...props}) => {
    const gradient = Array.isArray(color);
    const clr = gradient ? 'url(#grad)' : color;
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
        >
            {
                gradient
                    && 
                <Defs>
                    <LinearGradient x1="0" x2="0" y1="0" y2="1">
                        <Stop offset="0" stopColor={color[0]} stopOpacity="1"/>
                        <Stop offset="1" stopColor={color[1]} stopOpacity="1"/>
                    </LinearGradient>
                </Defs>
            }
            <Path color={clr} {...props as any}/>
        </Svg>
    )
}
