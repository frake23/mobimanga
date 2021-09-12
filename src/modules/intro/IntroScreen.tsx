import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";
import spacings from "../../constants/spacings";
import {textStyles} from "../../constants/textStyles";
import {colors} from "../../constants/colors";
import { useDimensions, useImageDimensions } from '@react-native-community/hooks';
import { URISource } from '@react-native-community/hooks/lib/useImageDimensions';

interface IntroScreenProps {
    title: string,
    text: string,
    imgSrc: URISource
}

export const IntroScreen: React.FC<IntroScreenProps> = React.memo(
    ({title, text, imgSrc}) => {
        let {width} = useDimensions().window;
        const {dimensions, loading} = useImageDimensions(imgSrc);
        width -= 2 * spacings.xs;
        if (loading) return null;
        return (
            <View style={[styles.container, {width}]}>
                <Image
                    source={imgSrc}
                    style={[{width, height: width / dimensions?.aspectRatio!}, styles.image]}
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
