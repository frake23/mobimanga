import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import spacings from '../constants/spacings';
import { Manga } from '../parser/models/Manga';
import { ExtendedMangaView } from './ExtendedMangaView';
import { MangaView } from './MangaView';
import { SwitchGrid } from './SwitchGrid';

interface MangaFeedProps {
    render: () => React.ReactNode;
    style?: ViewStyle;
    data: Manga[];
}

export type gridState = 'small' | 'big';

export const MangaFeed: React.FC<MangaFeedProps> = ({ render, style, data }) => {
    const [grid, setGrid] = useState<gridState>('small');

    const renderItem = (item: Manga, index: number) => {
        return grid === 'big' ? (
            <View style={styles.bigGridItem} key={item.id}>
                <MangaView
                    style={
                        index % 2 === 0 ? styles.marginRight : styles.marginLeft
                    }
                    textType="big"
                    showFavorite={true}
                    manga={item}
                />
            </View>
        ) : (
            <View style={styles.smallGridItem} key={item.id}>
                <ExtendedMangaView manga={item} />
            </View>
        );
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>
                {render()}
                <SwitchGrid grid={grid} setGrid={setGrid} />
            </View>
            <View style={styles.content}>{data.map(renderItem)}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacings.xs,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    bigGridItem: {
        marginBottom: spacings.xs,
        flex: 0,
        flexBasis: '50%',
    },
    smallGridItem: {
        flexBasis: '100%',
        marginBottom: spacings.xs,
    },
    marginRight: {
        marginRight: spacings.xs / 2,
    },
    marginLeft: {
        marginLeft: spacings.xs / 2,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: spacings.sm,
    },
});
