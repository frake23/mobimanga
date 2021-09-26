import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';

interface Props {
    rating: number;
    style?: ViewStyle;
}

export const RatingView: React.FC<Props> = ({ rating, style }) => {
    let textColorStyle = styles.ratingBad;

    if (rating >= 4) {
        textColorStyle = styles.ratingBest;
    } else if (rating >= 2.5) {
        textColorStyle = styles.ratingGood;
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={[textStyles.headlineTable, textColorStyle]}>
                {rating.toFixed(2)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: colors.bright.primary,
        borderRadius: 8,
    },
    ratingBest: {
        color: colors.other.purple,
    },
    ratingGood: {
        color: colors.main.primary,
    },
    ratingBad: {
        color: colors.other.red,
    },
});
