import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../constants/colors';
import GridIcon from '../icons/GridIcon';
import { gridState } from './MangaFeed';

interface Props {
    grid: gridState;
    setGrid: React.Dispatch<React.SetStateAction<gridState>>;
}

export const SwitchGrid: React.FC<Props> = ({ grid, setGrid }) => {
    const handleBigGridPress = () => {
        setGrid('big');
    };

    const handleSmallGridPress = () => {
        setGrid('small');
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleBigGridPress}>
                <View
                    style={[
                        styles.button,
                        grid === 'big' ? styles.chosen : styles.notChosen,
                    ]}>
                    <GridIcon
                        size={16}
                        type="big"
                        color={
                            grid === 'big'
                                ? colors.bright.primary
                                : colors.dark.tertiary
                        }
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSmallGridPress}>
                <View
                    style={[
                        styles.button,
                        grid === 'small' ? styles.chosen : styles.notChosen,
                    ]}>
                    <GridIcon
                        size={16}
                        type="small"
                        color={
                            grid === 'small'
                                ? colors.bright.primary
                                : colors.dark.tertiary
                        }
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
    },
    // TODO: Добавить градиент
    chosen: {
        backgroundColor: colors.main.primary,
    },
    notChosen: {
        backgroundColor: colors.bright.primary,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        shadowColor: 'rgba(13, 13, 13, 0.08)',
    },
});
