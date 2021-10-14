import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ViewStyle,
    FlatList,
    ListRenderItemInfo,
} from 'react-native';
import { colors } from '../constants/colors';
import spacings from '../constants/spacings';
import { Manga } from '../parser/models/Manga';
import { ExtendedMangaView } from './ExtendedMangaView';
import { MangaView } from './MangaView';
import { SwitchGrid } from './SwitchGrid';

interface MangaFeedProps {
    render: () => React.ReactNode;
    style?: ViewStyle;
    data: Manga[];
    renderOnTop: React.ReactNode
}

export type gridState = 'small' | 'big';

export const MangaFeed: React.FC<MangaFeedProps> = ({
    render,
    style,
    data,
    renderOnTop
}) => {
    const [grid, setGrid] = useState<gridState>('small');

    const renderItem = ({ item, index }: ListRenderItemInfo<Manga>) => {
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
        <FlatList
            ListHeaderComponent={() => {
                return (
                    <View style={styles.renderOnTop}>
                        {renderOnTop}
                        <View style={styles.header}>
                            {render()}
                            <SwitchGrid grid={grid} setGrid={setGrid} />
                        </View>
                    </View>
                );
            }}
            data={data}
            renderItem={renderItem}
            key={grid}
            keyExtractor={item => item.id.toString()}
            numColumns={grid === 'big' ? 2 : 1}
            initialNumToRender={4}
            style={[styles.container, style]}
            windowSize={15}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    renderOnTop: {
        
    },
    container: {
        backgroundColor: colors.bright.primary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacings.sm,
        marginHorizontal: spacings.xs,
        marginTop: spacings.md
    },
    bigGridItem: {
        marginBottom: spacings.xs,
        flex: 0,
        flexBasis: '50%',
    },
    smallGridItem: {
        flexBasis: '100%',
        marginBottom: spacings.xs,
        marginHorizontal: spacings.xs,
    },
    marginRight: {
        marginRight: spacings.xs / 2,
        marginLeft: spacings.xs,
    },
    marginLeft: {
        marginLeft: spacings.xs / 2,
        marginRight: spacings.xs,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: spacings.sm,
    },
});
