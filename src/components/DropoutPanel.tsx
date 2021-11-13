import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';
import ArrowIcon from '../icons/ArrowIcon';

interface DropPanelProps {
    title: string;
    render: React.ReactNode;
}

export const DropoutPanel: React.FC<DropPanelProps> = ({ title, render }) => {
    const [showContent, setShowContent] = useState(false);

    const handlePress = () => {
        setShowContent(!showContent);
    };

    return (
        <View style={styles.wrapper}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.header}>
                    <Text style={textStyles.h5}>{title}</Text>
                    <ArrowIcon
                        type={showContent ? 'up' : 'down'}
                        color={colors.dark.fivefold}
                        size={20}
                    />
                </View>
            </TouchableWithoutFeedback>
            {showContent && <View>{render}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    wrapper: {
        borderBottomColor: colors.bright.secondary,
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    },
});
