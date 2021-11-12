import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import spacings from '../constants/spacings';
import { textStyles } from '../constants/textStyles';
import { Manga } from '../parser/models/Manga';
import { FavouriteButton } from './FavouriteButton';
import { MangaView } from './MangaView';
import {colors} from "../constants/colors";

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
            <View style={styles.description}>
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
                        isFavourite={false}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
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
    description: {
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
        maxWidth: '80%',
    },
    text: {
        ...textStyles.table,
        color: colors.dark.tertiary
    }
});
