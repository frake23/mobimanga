import React from 'react';
import { MangaView } from './MangaView';
import {
    StyleSheet,
    View,
    Text,
    ListRenderItemInfo,
    FlatList,
} from 'react-native';
import spacings from '../constants/spacings';
import { ItemSeparator } from './ItemSeparator';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';
import { Manga } from '../parser/models/Manga';
import { useDimensions } from '@react-native-community/hooks';

interface MangaGalleryProps { 
    data: Manga[];
    title: string;
}

export const MangaGallery: React.FC<MangaGalleryProps> = ({ data, title }) => {
    const { width } = useDimensions().window;

    const renderItem = ({ item }: ListRenderItemInfo<Manga>) => {
        return <MangaView textType="small" showFavorite={false} manga={item} />;
    };

    return (
        <View style={[styles.container, { width: width }]}>
            <Text style={textStyles.h4}>{title}</Text>
            <View style={styles.wrapper}>
                <FlatList
                    horizontal
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => (
                        <ItemSeparator
                            size={spacings.xs}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={3}
                    data={data}
                    renderItem={renderItem}
                    fadingEdgeLength={spacings.xs * 2}
                    windowSize={10}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: spacings.sm,
        padding: spacings.xs,
        backgroundColor: colors.bright.secondary,
        aspectRatio: 360 / 224,
        flexDirection: 'column',
    },
    wrapper: {
        marginTop: spacings.sm,
        flex: 1,
    },
    flex1: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        width: spacings.xs,
    },
    gradiendRight: {
        right: 0,
    },
    gradiendLeft: {
        left: 0,
    },
});
