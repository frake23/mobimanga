import React from "react";
import {StyleSheet, Text, View} from "react-native";
import spacings from "../constants/spacings";
import sectionInfo, {SectionInfoKey} from "../constants/sectionInfo";
import {textStyles} from "../constants/textStyles";
import {colors} from "../constants/colors";
import {IconButton} from "./IconButton";
import SearchIcon from "../icons/SearchIcon";

interface TabScreenHeaderProps {
    sectionKey: SectionInfoKey,
    extendable: boolean,
    onSearch: () => void
}

export const TabScreenHeader: React.FC<TabScreenHeaderProps> = ({sectionKey, extendable, onSearch}) => {
    const section = sectionInfo[sectionKey];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{section.title}</Text>
                <section.Icon color={colors.main.primary} type='filled' size={24}/>
            </View>
            <IconButton
                Icon={SearchIcon}
                size="md"
                onPress={onSearch}
                type="outlined"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacings.xs,
        marginVertical: spacings.sm,
        padding: spacings.xs,
        backgroundColor: colors.bright.secondary,
        flexDirection: 'row',
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        ...textStyles.h3,
        marginRight: spacings.xs / 2
    },
    header: {
        flexDirection: 'row'
    }
})
