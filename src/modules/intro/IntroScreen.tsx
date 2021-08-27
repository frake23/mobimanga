import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";
import spacings from "../../theme/spacings";
import {textStyles} from "../../theme/textStyles";
import {colors} from "../../theme/colors";
import { useWrapperWidth } from './useWrapperWidth';
import { ImageSourcePropType } from 'react-native';

interface IntroScreenProps {
    title: string,
    text: string,
    imgSrc: ImageSourcePropType
}

export const IntroScreen: React.FC<IntroScreenProps> = React.memo(
    ({title, text, imgSrc}) => {
        const width = useWrapperWidth();
        return (
            <View style={[styles.container, {width}]}>
                <Image
                    source={imgSrc}
                    style={[{width, height: 240 * width / 328}, styles.image]}
                />
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        )
    }
)

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    title: {
        marginBottom: spacings.xs,
        ...textStyles.h3,
        textAlign: "center"
    },
    text: {
        ...textStyles.body,
        color: colors.dark.tertiary,
        textAlign: "center"
    },
    image: {
        marginVertical: spacings.xl
    }
})
