import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { View } from 'react-native-animatable';
import { colors } from '../constants/colors';
import spacings from '../constants/spacings';
import { textStyles } from '../constants/textStyles';

interface TagProps {
    type?: 'search' | 'info';
    title: string;
    style?: ViewStyle;
}

export const Tag: React.FC<TagProps> = ({ type, title, style }) => {
    return (
        <View style={[styles.tag, style]}>
            <Text style={textStyles.headlineTable}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: colors.bright.secondary,
        borderRadius: 8,
        marginBottom: spacings.xs / 2,
    },
});
