import React, { useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { MangaView } from './MangaView';
import {
    StyleSheet,
    View,
    Text,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import spacings from '../constants/spacings';
import { ItemSeparator } from './ItemSeparator';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';
import { Manga } from '../parser/models/Manga';
import { useDimensions } from '@react-native-community/hooks';

interface Props {
    data?: Manga[];
    title: string;
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
// Чтобы предотвратить бесполезный ререндеринг
const fading = {
    onlyLeft: { fromLeft: true, fromRight: false },
    onlyRight: { fromLeft: false, fromRight: true },
    both: { fromLeft: true, fromRight: true },
};

export const MangaGallery: React.FC<Props> = ({ data, title }) => {
    const [fade, setFade] = useState({
        fromLeft: true,
        fromRight: false,
    });
    const { width } = useDimensions().window;
    const listWidthRef = useRef(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const x = event.nativeEvent.contentOffset.x;

        if (x <= spacings.xs) {
            setFade(fading.onlyLeft);
        } else if (x >= listWidthRef.current - spacings.xs) {
            setFade(fading.onlyRight);
        } else {
            setFade(fading.both);
        }
    };

    // onEndReach срабатывает только 1 раз в самам начале, значит растояние до конца равно ширине
    const handleEndReach = (info: { distanceFromEnd: number }) => {
        listWidthRef.current = info.distanceFromEnd;
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
                            color={colors.bright.secondary}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    onEndReached={handleEndReach}
                    data={data ?? mockData}
                    renderItem={() => <MangaView showFavorite={true} />}
                />
                {fade.fromRight && (
                    <LinearGradient
                        style={[styles.gradient, styles.gradiendLeft]}
                        colors={fadeColorsLeft}
                        start={{ x:0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    />
                )}
                {fade.fromLeft && (
                    <LinearGradient
                        style={[styles.gradient, styles.gradiendRight]}
                        colors={fadeColorsRight}
                        start={{x: 0, y: 0 }}
                        end={{x: 1, y: 0 }}
                    />
                )}
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
        width: spacings.xs
    },
    gradiendRight: {
        right: 0
   },
    gradiendLeft: {
        left: 0
    }
});
