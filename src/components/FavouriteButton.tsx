import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import FavouriteIcon from '../icons/FavouriteIcon';

interface Props {
    isFavourited: boolean;
}

export const FavouriteButton: React.FC<Props> = ({ isFavourited }) => {
    const [favourite, setFavourite] = useState(isFavourited);

    const handlePress = () => {
        setFavourite(!favourite);
        console.log('pressed');
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
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
    button: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 10
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