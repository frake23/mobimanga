import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { MangaGallery } from '../../components/MangaGallery';
import { MangaFeed } from '../../components/MangaFeed';
import spacings from '../../constants/spacings';
import { textStyles } from '../../constants/textStyles';
import { Manga } from '../../parser/models/Manga';
import { getList } from '../../parser/site/mangalib/parser';
import { colors } from '../../constants/colors';
import { View } from 'react-native-animatable';

const fetchManga = (
    setState: React.Dispatch<React.SetStateAction<Manga[]>>,
) => {
    getList(0).then(value => setState(value));
};

export const HomeScreen: React.FC = () => {
    const [data, setData] = useState<Manga[]>([]);

    useEffect(() => {
        fetchManga(setData);
    }, [setData]);

    const renderOnTop = (
        <View>
            <MangaGallery data={data} title={"Манга сезона"} />
        </View>
    )

    return (
        <MangaFeed
            data={data}
            style={styles.list}
            render={() => <Text style={textStyles.h4}>Рекомендации</Text>}
            renderOnTop={renderOnTop}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bright.primary,
    },
    list: {
        marginTop: spacings.md,
    },
});
