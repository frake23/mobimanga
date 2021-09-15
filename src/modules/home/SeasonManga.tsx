import React, { useState } from 'react';
import MaskedViewComponent from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { MangaView } from '../../components/MangaView';
import {
    StyleSheet,
    View,
    Text,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import spacings from '../../constants/spacings';
import { ItemSeparator } from '../../components/ItemSeparator';
import { colors } from '../../constants/colors';
import { textStyles } from '../../constants/textStyles';
import { Manga } from '../../parser/models/Manga';
import { useDimensions } from '@react-native-community/hooks';

interface Props {
    data?: Manga[];
}

const mockData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
];

const fadeColorsLeft = [colors.bright.secondary, 'rgba(247, 247, 247, 0)'];
const fadeColorsRight = [...fadeColorsLeft].reverse();

export const SeasonManga: React.FC<Props> = ({ data }) => {
    const [fadeDirections, setFadeDitrections] = useState({
        fromLeft: true,
        fromRight: false,
    });
    const { width } = useDimensions().window;
    let listWidth = 0;
    const fadeLocationsFromRight = [0, spacings.xs / width];
    const fadeLocationsFromLeft = [1 - spacings.xs / width, 1];

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const x = event.nativeEvent.contentOffset.x;

        if (x <= spacings.xs) {
            setFadeDitrections({ fromLeft: true, fromRight: false });
        } else if (x >= listWidth - spacings.xs) {
            setFadeDitrections({ fromLeft: false, fromRight: true });
        } else {
            setFadeDitrections({ fromLeft: true, fromRight: true });
        }
    };

    // onEndReach срабатывает только 1 раз в самам начале, значит растояние до конца равно ширине
    const handleEndReach = (info: { distanceFromEnd: number }) => {
        listWidth= info.distanceFromEnd;
    };

    return (
        <View style={[styles.container, { width: width }]}>
            <Text style={textStyles.h4}>Манга Сезона</Text>
            <MaskedViewComponent
                style={styles.flex1}
                maskElement={
                    <LinearGradient
                        style={styles.flex1}
                        colors={[
                            ...(fadeDirections.fromRight ? fadeColorsRight : []),
                            ...(fadeDirections.fromLeft ? fadeColorsLeft : []),
                        ]}
                        locations={[
                            ...(fadeDirections.fromRight ? fadeLocationsFromRight : []),
                            ...(fadeDirections.fromLeft ? fadeLocationsFromLeft : []),
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                }
            >
                <FlatList
                    horizontal
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => (
                        <ItemSeparator
                            size={spacings.xs}
                            color={colors.bright.secondary}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    onEndReached={handleEndReach}
                    style={styles.list}
                    data={data ?? mockData}
                    renderItem={() => <MangaView />}
                />
            </MaskedViewComponent>
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
    list: {
        marginTop: spacings.sm,
        flex: 1,
    },
    flex1: {
        flex: 1,
    },
});
