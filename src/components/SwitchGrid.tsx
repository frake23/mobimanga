import React from 'react';
import {StyleSheet, View} from 'react-native';
import GridIcon from '../icons/GridIcon';
import { gridState } from './MangaFeed';
import {IconButton} from "./IconButton";

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

    const bigColor = grid === 'big' ? 'gradient': 'primary';
    const smallColor = bigColor === 'gradient' ? 'primary' : 'gradient'

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <IconButton
                    size="sm"
                    Icon={GridIcon}
                    onPress={handleBigGridPress}
                    color={bigColor}
                    type="big"
                />
            </View>

            <IconButton
                size="sm"
                Icon={GridIcon}
                onPress={handleSmallGridPress}
                color={smallColor}
                type="small"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        marginRight: 8,
    }
});
