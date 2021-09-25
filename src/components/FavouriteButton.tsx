import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import FavouriteIcon from '../icons/FavouriteIcon';

interface Props {
    isFavourited: boolean,
    style: ViewStyle
}

export const FavouriteButton: React.FC<Props> = ({ isFavourited, style }) => {
    const [favourite, setFavourite] = useState(isFavourited);

    const handlePress = () => {
        setFavourite(!favourite);
    };

    return (
        <TouchableOpacity style={style} onPress={handlePress}>
            <View style={[favourite ? styles.favourite : styles.notFavourite, styles.wrapper]}>
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
    wrapper: {
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
        elevation: 24,
    },
});
