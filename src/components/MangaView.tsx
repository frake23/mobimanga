import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ViewStyle,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';
import { FavouriteButton } from './FavouriteButton';
import { RatingView } from './RatingView';

interface Props {
    showFavorite: boolean;
    style?: ViewStyle;
    textType: 'big' | 'small';
}

export const MangaView: React.FC<Props> = React.memo(
    ({ style, showFavorite, textType }) => {
        return (
            <View style={[styles.container, style]}>
                <ImageBackground
                    style={styles.image}
                    source={require('../assets/images/manga.png')}
                />
                <LinearGradient
                    style={styles.gradient}
                    colors={[
                        'rgba(13, 13, 13, 0)',
                        'rgba(13, 13, 13, 0.903226)',
                    ]}>
                    <Text
                        numberOfLines={2}
                        lineBreakMode="tail"
                        style={[
                            textType === 'small'
                                ? textStyles.headlineTable
                                : textStyles.headlineNormal,
                            styles.name,
                        ]}>
                        Манга с длинным названием
                    </Text>
                </LinearGradient>
                <RatingView style={styles.ratingContainer} rating={5.0} />
                {showFavorite && <FavouriteButton isFavourited={true} />}
            </View>
        );
    },
);

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
    },
});
