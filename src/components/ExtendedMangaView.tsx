import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import spacings from '../constants/spacings';
import { textStyles } from '../constants/textStyles';
import { Manga } from '../parser/models/Manga';
import { FavouriteButton } from './FavouriteButton';
import { MangaView } from './MangaView';

interface Props {
    manga: Manga;
}

export const ExtendedMangaView: React.FC<Props> = ({ manga }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <MangaView
                    textType="without"
                    manga={manga}
                    showFavorite={false}
                />
            </View>
            <View style={styles.text}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text
                            style={textStyles.h5}
                            numberOfLines={2}>
                            {manga.title}
                        </Text>
                    </View>
                    <FavouriteButton
                        style={styles.button}
                        isFavourited={false}
                    />
                </View>
                <View>
                    <Text style={textStyles.table}>
                        Краткое описание содержания манги (2-3 предложения)
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        flex: 1,
    },
    text: {
        flex: 2,
        marginLeft: spacings.xs,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    button: {},
    title: {
        maxWidth: '90%',
    },
});
