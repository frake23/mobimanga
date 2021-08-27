import {TextStyle} from "react-native";
import {colors} from "./colors";

const fontFamily: {[key: string]: TextStyle} = {
    semiBold: {
        fontFamily: 'Nunito-SemiBold',
        fontWeight: 'normal'
    },
    bold: {
        fontFamily: 'Nunito-Bold',
        fontWeight: 'normal'
    },
    regular: {
        fontFamily: 'GothamPro-Regular',
        fontWeight: 'normal'
    },
}

function createFont(style: TextStyle, fontSize: number, lineHeight: number) {
    return {
        ...style,
        fontSize,
        lineHeight,
        color: colors.dark.primary
    };
}

export const textStyles = {
    h1: createFont(fontFamily.bold, 40, 48),
    h2: createFont(fontFamily.bold, 32, 38),
    h3: createFont(fontFamily.bold, 26, 30),
    h4: createFont(fontFamily.bold, 20, 24),
    h5: createFont(fontFamily.bold, 16, 20),
    headlineNormal: createFont(fontFamily.bold, 14, 18),
    headlineTable: createFont(fontFamily.bold, 12, 16),
    body: createFont(fontFamily.regular, 14, 20),
    table: createFont(fontFamily.regular, 12, 16),
    tiny: createFont(fontFamily.regular, 8, 8),
    spanBold: createFont(fontFamily.bold, 14, 16),
    spanMedium: createFont(fontFamily.semiBold, 14, 16),
    smallSpanBold: createFont(fontFamily.bold, 12, 16),
    smallSpanMedium: createFont(fontFamily.semiBold, 12, 16)
}
