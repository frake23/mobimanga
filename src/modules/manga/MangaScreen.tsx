import React from 'react';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from '../../components/Button';
import { ChapterView } from '../../components/ChapterView';
import { DropoutPanel } from '../../components/DropoutPanel';
import { FavouriteButton } from '../../components/FavouriteButton';
import { TagsLine } from '../../components/TagsLine';
import { TitledContent } from '../../components/TitledContent';
import { colors } from '../../constants/colors';
import spacings from '../../constants/spacings';
import { textStyles } from '../../constants/textStyles';

interface MangaScreenProps {}

export const MangaScreen = () => {
    const infoContentToRender = (
        <View style={styles.info}>
            <TagsLine
                type="info"
                data={[
                    'Спорт',
                    'Психология',
                    'Игра',
                    'Боевые искусства',
                    'Трагедия',
                ]}
            />
            <View style={styles.contentWrapper}>
                <TitledContent
                    title="Тип"
                    content="Манга"
                    style={styles.content}
                />
                <TitledContent
                    title="Год релиза"
                    content="2021"
                    style={styles.content}
                />
                <TitledContent
                    title="Статус тайтла"
                    content="Онгоинг"
                    style={styles.content}
                />
                <TitledContent
                    title="Загружено глав"
                    content="5"
                    style={styles.content}
                />
            </View>
        </View>
    );

    const chapters = [
        "1.0 Название главы",
        "2.0 Название главы",
        "3.0 Название главы",
        "4.0 Название главы",
        "5.0 Название главы",
        "6.0 Название главы",
    ]

    const chapterContentToRender = (
        <View>
            {chapters.map(chapter => <ChapterView title={chapter} key={chapter} />)}
        </View>
    )

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/manga.png')}
                resizeMode="cover"
            />
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.main}>
                <View style={styles.header}>
                    <Text
                        numberOfLines={2}
                        lineBreakMode="tail"
                        style={[textStyles.h3, styles.text]}>
                        Манга с длинным названием
                    </Text>
                    <FavouriteButton type="big" isFavourited={false} />
                </View>
                <View style={styles.description}>
                    <Text style={textStyles.body}>
                        Полное описание содержания манги
                    </Text>
                </View>
                <View style={styles.panelsWrapper}>
                    <DropoutPanel
                        title="Информация"
                        render={infoContentToRender}
                    />
                    <DropoutPanel
                        title="Главы"
                        render={chapterContentToRender}
                    />
                </View>
                <View style={styles.buttonsWrapper}>
                    <Button
                        title="Скачать все"
                        color="secondary"
                        style={styles.button}
                    />
                    <Button
                        title="Читать сейчас"
                        color="primary"
                        style={[styles.button, styles.secondButtonMarginLeft]}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        maxHeight: '70%',
        flex: 1,
    },
    main: {
        padding: spacings.xs,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.bright.primary,
    },
    text: {
        maxWidth: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        marginVertical: spacings.sm,
    },
    buttonsWrapper: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
    secondButtonMarginLeft: {
        marginLeft: spacings.xs,
    },
    panelsWrapper: {
        marginBottom: spacings.md,
    },
    info: {
        marginVertical: spacings.xs,
    },
    content: {
        marginBottom: spacings.xs,
    },
    contentWrapper: {
        marginTop: spacings.xs / 2,
    },
});
