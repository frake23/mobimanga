import React from 'react';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import ArrowRightIcon from '../../icons/ArrowRight';
import Close1Icon from '../../icons/Close1';
import { colors } from '../../theme/colors';
import spacings from '../../theme/spacings';

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
    const {width} = useWindowDimensions();
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
        leftMargin -= 12;
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
                    <Close1Icon 
                        {...iconStyles}
                    />
                    :
                    <ArrowRightIcon
                        {...iconStyles}
                    />
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

const styles = StyleSheet.create({
    buttton: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: colors.main.primary,
        marginHorizontal: 6
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: spacings.xs * 2,
    },
    circle: {
        backgroundColor: colors.bright.fivefold,
        marginHorizontal: 6
    }
})

const iconStyles: SvgProps = {
    height: 20,
    width: 20,
    stroke: colors.bright.primary
}
