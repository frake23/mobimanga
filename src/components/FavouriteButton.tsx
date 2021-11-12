import React, { useState } from 'react';
import {StyleSheet, View, ViewStyle, TouchableNativeFeedback} from 'react-native';
import { colors } from '../constants/colors';
import FavouriteIcon from '../icons/FavouriteIcon';
interface FavouriteButtonProps {
    isFavourite: boolean;
    style?: ViewStyle;
}

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({ isFavourite, style }) => {

    const [favourite, setFavourite] = useState(isFavourite);

    const handlePress = () => {
        setFavourite(!favourite);
    };

    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={[favourite ? styles.favourite : styles.notFavourite, styles.wrapper, style]}>
                <FavouriteIcon
                    size={16}
                    type={favourite ? 'filled' : 'outlined'}
                    color={
                        favourite ? colors.bright.primary : colors.dark.primary
                    }
                />
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 4,
        borderRadius: 8,
    },
    notFavourite: {
        backgroundColor: colors.bright.secondary,
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
        elevation: 8,
    },
});
