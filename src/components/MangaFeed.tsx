import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import spacings from '../constants/spacings';
import { Manga } from '../parser/models/Manga';
import { MangaView } from './MangaView';

interface Props {
    render: () => React.ReactNode;
    style?: ViewStyle;
    data?: Manga[];
}

const mockData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
];

export const MangaList: React.FC<Props> = ({ render, style, data }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>
                {render()}
                <Text>dwadad</Text>
            </View>
            <View style={styles.content}>
                {(data ?? mockData).map(item => (
                    <MangaView textType="big" key={item.id} showFavorite={true} style={styles.listItem} />
                ))}
            </View>
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
    },
    listItem: {
        flexBasis: "48%",
        marginBottom: spacings.xs,
        flex: 0,
    },
    content: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: spacings.sm
    }
});
