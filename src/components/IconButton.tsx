import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View, ViewStyle} from "react-native";
import {colors} from "../constants/colors";
import LinearGradient from "react-native-linear-gradient";
import {IconType} from "../icons/types";

interface IconButtonProps {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'gradient',
    Icon: IconType,
    onPress: () => void,
    type?: string | number
}

export const IconButton: React.FC<IconButtonProps> = ({
    size='lg',
    color='primary',
    Icon,
    onPress,
    type
}) => {
    const isPrimary = color === 'primary';
    let iconSize: number;

    if (size === 'sm') iconSize = 16
    else if (size === 'md') iconSize = 18
    else iconSize = 20;

    const renderIcon =
        <Icon
            size={iconSize}
            color={isPrimary ? colors.dark.primary : colors.bright.primary}
            type={type}
        />


    return (
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <View
                style={[
                    styles[size],
                    styles.button,
                    isPrimary ? styles.primary : {}
                ]}
            >
                {
                    !isPrimary ? <LinearGradient
                        colors={colors.main.gradient}
                        style={[styles.button, styles[size]]}
                    >
                        {renderIcon}
                    </LinearGradient> : renderIcon
                }
            </View>

        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    sm: {
        width: 32,
        height: 32,
        borderRadius: 8
    },
    md: {
        width: 40,
        height: 40,
        borderRadius: 8
    },
    lg: {
        width: 48,
        height: 48,
        borderRadius: 8
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bright.primary
    },
    primary: {
        elevation: 4
    }
})
