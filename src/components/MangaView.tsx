import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';
import { FavouriteButton } from './FavouriteButton';

interface Props {
    showFavorite: boolean;
}

export const MangaView: React.FC<Props> = React.memo(({ showFavorite }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/images/manga.png')}
            />
            <LinearGradient
                style={styles.gradient}
                colors={['rgba(13, 13, 13, 0)', 'rgba(13, 13, 13, 0.903226)']}>
                <Text
                    numberOfLines={2}
                    lineBreakMode="tail"
                    style={[textStyles.headlineTable, styles.name]}>
                    Манга с длинным названием
                </Text>
            </LinearGradient>
            <View style={styles.ratingContainer}>
                <Text style={[textStyles.headlineTable, styles.ratingNumber]}>
                    5.00
                </Text>
            </View>
            {showFavorite && (
                <FavouriteButton isFavourited={true} />
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 104 / 144,
    },
    name: {
        position: 'absolute',
        bottom: 12,
        right: 8,
        left: 8,
        color: colors.bright.primary,
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        height: 56,
        width: '100%',
        alignItems: 'flex-start',
    },
    ratingContainer: {
        position: 'absolute',
        top: 4,
        left: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: colors.bright.primary,
        borderRadius: 8,
    },
    ratingNumber: {
        color: colors.other.purple,
    }
});
