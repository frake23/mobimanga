import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import FavouriteIcon from '../icons/FavouriteIcon';

interface Props {
    isFavourited: boolean;
}

export const FavouriteButton: React.FC<Props> = ({ isFavourited }) => {
    return (
        <View
            style={[
                styles.wrapper,
                isFavourited ? styles.favourite : styles.notFavourite,
            ]}>
            <FavouriteIcon
                size={16}
                type={isFavourited ? 'filled' : 'outlined'}
                color={
                    isFavourited ? colors.bright.primary : colors.dark.primary
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 8,
        right: 8,
        padding: 4,
        borderRadius: 8,
    },
    notFavourite: {
        backgroundColor: colors.bright.primary,
    },
    favourite: {
        backgroundColor: colors.other.red,
        shadowColor: colors.other.red,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.64,
        shadowRadius: 5.0,
        elevation: 24
    },
});
