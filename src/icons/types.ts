import React from "react";
import {ViewStyle} from "react-native";

export interface PathProps {
    color: string
}

export interface PathPropsWithFill {
    type: 'outlined' | 'filled',
}

export interface PathPropsWithNumber {
    type: 1 | 2
}

export interface PathPropsWithSwitch {
    type: 'off' | 'on'
}

type IconProps = {
    color: string | [string, string],
    size: number ,
    style?: ViewStyle,
}

export type IconFromPathFn = <T>(Path: (props: T & PathProps) => JSX.Element) => React.FC<T & IconProps>


export type IconType = React.FC<IconProps & {type: any}>
