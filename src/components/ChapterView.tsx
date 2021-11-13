import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../constants/colors';
import { textStyles } from '../constants/textStyles';
import DownloadIcon from '../icons/DownloadIcon';
import TomIcon from '../icons/TomIcon';

interface ChapterViewProps {
    title: string;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ title }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <TomIcon size={20} type={1} color={colors.dark.tertiary} />
                <Text style={[textStyles.body, styles.title]}>{title}</Text>
            </View>
            <TouchableWithoutFeedback>
                    <DownloadIcon size={20} color={colors.dark.tertiary} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        borderBottomColor: colors.bright.secondary,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleWrapper: {
        flexDirection: "row"
    },
    title: {
        marginLeft: 4
    }
});
