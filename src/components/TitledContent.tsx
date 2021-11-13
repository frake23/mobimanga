import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';

interface TitledContentProps {
    title: string;
    content: string | React.ReactNode;
    contentType?: 'text' | 'component';
    style?: ViewStyle;
}

export const TitledContent: React.FC<TitledContentProps> = ({
    title,
    style,
    content,
    contentType = 'text',
}) => {
    return (
        <View style={[styles.wrapper, style]}>
            <Text style={[textStyles.table, styles.title]}>{title}</Text>
            {contentType === 'text' ? (
                <Text style={textStyles.body}>{content}</Text>
            ) : (
                { content }
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    title: {
        color: colors.dark.fivefold,
        marginBottom: 4,
    },
});
