import React from 'react';
import {
    Image,
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
            <Image
                style={styles.image}
                source={require('../../assets/images/manga.png')}
                resizeMode="stretch"
            />
            <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text
                        numberOfLines={2}
                        lineBreakMode="tail"
                        style={[textStyles.h3, styles.text]}>
                        Манга с длинным названием
                    </Text>
                    <FavouriteButton type="big" isFavourite={false} />
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
                        onPress={() => null}
                    />
                    <Button
                        title="Читать сейчас"
                        color="primary"
                        style={[styles.button, styles.secondButtonMarginLeft]}
                        onPress={() => null}
                    />
                </View>
            </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "70%"
    },
    main: {
        paddingHorizontal: spacings.xs,
        paddingTop: spacings.xs,
        backgroundColor: colors.bright.primary,
        zIndex: 2,
        maxHeight: "90%"
    },
    text: {
        maxWidth: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-start"
    },
    description: {
        marginVertical: spacings.sm,
    },
    buttonsWrapper: {
        flexDirection: 'row',
        marginBottom: spacings.xs
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
