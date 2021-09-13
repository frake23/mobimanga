import React, {useRef} from 'react';
import {useDimensions} from '@react-native-community/hooks';
import {
    Animated,
    Easing,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {colors} from '../../constants/colors';
import spacings from '../../constants/spacings';
import CloseIcon from '../../icons/CloseIcon';
import ArrowIcon from '../../icons/ArrowIcon';

interface IntroNavigationProps {
    viewsCount: number;
    selected: number;
    onNext: () => void;
    onExit: () => void;
}

const Circle: React.FC<{size: number}> = ({size}) => {
    return (
        <View
            style={[
                styles.circle,
                {height: size, width: size, borderRadius: size / 2},
            ]}
        />
    );
};

export const IntroNavigation: React.FC<IntroNavigationProps> = ({
    viewsCount,
    selected,
    onExit,
    onNext,
}) => {
    const {width} = useDimensions().window;
    const isLast = viewsCount === selected + 1;
    const left = [];
    const right = [];

    let leftMargin = width / 2 - 30;
    const translate = useRef(0);
    let newTranslate = 0;

    for (let i = 0; i < selected; i++) {
        if (i === 0) {
            left.push(8);
            newTranslate -= 8;
        } else if (i === viewsCount - 2) {
            left.push(12);
            newTranslate -= 12;
        } else {
            left.unshift(6);
            newTranslate -= 6;
        }
        newTranslate -= 2 * marginHorizontal;
    }
    for (let i = selected + 1; i < viewsCount; i++) {
        if (i === selected + 1) right.push(12);
        else if (i === selected + 2) right.push(8);
        else right.push(6);
    }

    const toBig = new Animated.Value(0);

    Animated.timing(toBig, {
        toValue: 1,
        easing: Easing.ease,
        duration: 275,
        useNativeDriver: true,
    }).start();

    const animatedButtonStyles = [
        styles.buttton,
        {
            opacity: toBig,
            transform: [
                {
                    scale: toBig.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 6],
                    }),
                },
            ],
            top: 8,
            marginHorizontal: 24,
        },
    ];

    const animatedContainerStyles = [
        styles.container,
        {
            transform: [
                {
                    translateX: toBig.interpolate({
                        inputRange: [0, 1],
                        outputRange: [translate.current, newTranslate],
                    }),
                },
            ],
        },
    ];

    translate.current = newTranslate;

    return (
        <Animated.View style={[animatedContainerStyles, {left: leftMargin}]}>
            {left.map((size, index) => (
                <Circle size={size} key={index} />
            ))}
            <TouchableWithoutFeedback
                onPress={isLast ? onExit : onNext}
                style={{paddingVertical: 18}}>
                <Animated.View style={animatedButtonStyles} />
                {isLast ? (
                    <CloseIcon {...iconStyles} type={1} />
                ) : (
                    <ArrowIcon {...iconStyles} type="right" />
                )}
            </TouchableWithoutFeedback>
            {right.map((size, index) => (
                <Circle size={size} key={index} />
            ))}
        </Animated.View>
    );
};

const marginHorizontal = 6;

const styles = StyleSheet.create({
    buttton: {
        width: 8,
        height: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: colors.main.primary,
        marginHorizontal,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: spacings.xs * 2,
    },
    circle: {
        backgroundColor: colors.bright.fivefold,
        marginHorizontal: 6,
    },
    iconMove: {
        left: 18,
        position: 'relative',
        bottom: 5,
    },
});

const iconStyles = {
    size: 20,
    color: colors.bright.primary,
};
