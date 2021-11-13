import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import FavouriteIcon from '../icons/FavouriteIcon';
interface FavouriteButtonProps {
    isFavourited: boolean;
    style?: ViewStyle;
    type?: 'big' | 'small';
}

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({
    isFavourited,
    style,
    type="small",
}) => {
    const [favourite, setFavourite] = useState(isFavourited);

    const handlePress = () => {
        setFavourite(!favourite);
    };

    return (
        <TouchableOpacity style={style} onPress={handlePress}>
            <View
                style={[
                    favourite ? styles.favourite : styles.notFavourite,
                    styles.wrapper,
                    type === 'big' && styles.bigPadding,
                ]}>
                <FavouriteIcon
                    size={16}
                    type={favourite ? 'filled' : 'outlined'}
                    color={
                        favourite ? colors.bright.primary : colors.dark.primary
                    }
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bigPadding: {
        padding: 8,
    },
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
        elevation: 24,
    },
});
