import React from 'react';
import {SafeAreaView, StyleSheet, ViewProps} from "react-native";
import {colors} from "../theme/colors";

type MainWrapperProps = ViewProps;

export const MainWrapper: React.FC<MainWrapperProps> = ({children, style}) => {
    return (
        <SafeAreaView
            style={[styles.wrapper, style]}
        >
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.bright.primary
    }
})
