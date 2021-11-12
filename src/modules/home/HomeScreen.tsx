import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MangaGallery} from '../../components/MangaGallery';
import {MangaFeed} from '../../components/MangaFeed';
import {textStyles} from '../../constants/textStyles';
import {Manga} from '../../parser/models/Manga';
import MangalibParser from '../../parser/site/mangalib/parser';
import {colors} from '../../constants/colors';
import {TabScreenHeader} from "../../components/TabScreenHeader";

const fetchManga = (
    setState: React.Dispatch<React.SetStateAction<Manga[]>>,
) => {
    MangalibParser.getList(0).then(value => setState(value));
};

export const HomeScreen: React.FC = () => {
    const [data, setData] = useState<Manga[]>([]);

    useEffect(() => {
        fetchManga(setData);
    }, [setData]);

    const renderOnTop = (
        <View>
            <MangaGallery data={data} title={"Манга сезона"}/>
        </View>
    )

    return (
        <View style={styles.container}>
            <TabScreenHeader sectionKey="Home" extendable={false} onSearch={() => null}/>
            <MangaFeed
                data={data}
                render={() => <Text style={textStyles.h4}>Рекомендации</Text>}
                renderOnTop={renderOnTop}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bright.primary,
    },
});
