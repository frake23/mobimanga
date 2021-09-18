import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MangaGallery } from '../../components/MangaGallery';
import { MangaList } from '../../components/MangaFeed';
import spacings from '../../constants/spacings';
import { textStyles } from '../../constants/textStyles';
import { Manga } from '../../parser/models/Manga';
import { getList } from '../../parser/site/mangalib/parser';

interface Props {}

const fetchManga = (setState: React.Dispatch<React.SetStateAction<Manga[]>>) => { 
    getList(10).then((value) => setState(value));
}

export const MainScreen: React.FC = () => {
    const [data, setData] = useState<Manga[]>([]);

    useEffect(() => {
        fetchManga(setData);
    }, [setData])

    return (
        <ScrollView>
            <MangaGallery title="Манга сезона" />
            <MangaList
                style={styles.list}
                render={() => <Text style={textStyles.h4}>Рекомендации</Text>}
                data={data}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        marginTop: spacings.md,
    },
});
