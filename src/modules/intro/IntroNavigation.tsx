import React from 'react';
import { useDimensions } from '@react-native-community/hooks';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ArrowRightIcon from '../../icons/ArrowIcon';
import { colors } from '../../constants/colors';
import spacings from '../../constants/spacings';
import CloseIcon from '../../icons/CloseIcon';
import ArrowIcon from '../../icons/ArrowIcon';

interface IntroNavigationProps {
    viewsCount: number,
    selected: number,
    onNext: () => void,
    onExit: () => void
}

const Circle: React.FC<{size: number}> = ({size}) => {
    return (
        <View style={[styles.circle, {height: size, width: size, borderRadius: size / 2}]}/>
    )
}

export const IntroNavigation: React.FC<IntroNavigationProps> = ({viewsCount, selected, onExit, onNext}) => {
    const {width} = useDimensions().window;
    const isLast = viewsCount === selected + 1;
    const left = []; const right = [];
    
    let leftMargin = width / 2 - 30;
    for (let i = 0; i < selected; i++) {
        if (i === 0) {
            left.push(8);
            leftMargin -= 8;
        }
        else if (i === viewsCount - 2) {
            left.push(12);
            leftMargin -= 12;
        }
        else {
            left.unshift(6);
            leftMargin -= 6;
        }
        leftMargin -= 2 * marginHorizontal;
    }
    for (let i = selected + 1; i < viewsCount; i++) {
        if (i === selected + 1) right.push(12);
        else if (i === selected + 2) right.push(8);
        else right.push(6)
    }
    
    return (
        <View style={[styles.container, {left: leftMargin}]}>
            {
                left.map((size, index) => 
                    <Circle size={size} key={index}/>    
                )
            }
            <TouchableOpacity
                onPress={isLast ? onExit : onNext}
                style={styles.buttton}
            >
                {isLast ?
                    <CloseIcon {...iconStyles} type={1}/>
                    :
                    <ArrowIcon {...iconStyles} type="right"/>
                }
            </TouchableOpacity>
            {
                right.map((size, index) => 
                    <Circle size={size} key={index}/>    
                )
            }
        </View>
        
    )
}

const marginHorizontal = 6;

const styles = StyleSheet.create({
    buttton: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: colors.main.primary,
        marginHorizontal
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: spacings.xs * 2,
    },
    circle: {
        backgroundColor: colors.bright.fivefold,
        marginHorizontal
    }
})

const iconStyles = {
    size: 20,
    color: colors.bright.primary
}
