import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewProps, ViewStyle} from "react-native";
import {textStyles} from "../constants/textStyles";
import {colors} from "../constants/colors";

type Size = 'sm' | 'md' | 'lg';

type ButtonProps = ViewProps & {
    size?: Size,
    color?: 'primary' | 'secondary',
    title: string,
    onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
    size='lg',
    color='primary',
    title,
    onPress,
    ...props
}) => {
    const colorStyles = color === "primary" ? primaryStyles : secondaryStyles;
    return (
        <TouchableOpacity
            style={[
                props.style,
                colorStyles.button,
                sizeStyles[size]
            ]}
            onPress={onPress}
        >
            <Text style={[
                size === 'sm' ? colorStyles.textSm : colorStyles.text
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const buttonBase: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8
}

const primaryStyles = StyleSheet.create({
    button: {
        ...buttonBase,
        backgroundColor: colors.main.primary,
        
    },
    text: {
        ...textStyles.spanBold,
        color: colors.bright.primary,
    },
    textSm: {
        ...textStyles.smallSpanBold,
        color: colors.bright.primary,
    },
});

const secondaryStyles = StyleSheet.create({
    button: {
        ...buttonBase,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.bright.tertiary
    },
    text: {
        ...textStyles.spanMedium,
        color: colors.dark.tertiary,
    },
    textSm: {
        ...textStyles.smallSpanMedium,
        color: colors.dark.tertiary,
    }
});

const sizeStyles = StyleSheet.create({
    sm: {
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    md: {
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    lg: {
        paddingVertical: 16,
        paddingHorizontal: 24
    }
})
