import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import sectionInfo from '../constants/sectionInfo';
import spacings from '../constants/spacings';
import { textStyles } from '../constants/textStyles';

export default function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingHorizontal: spacings.xs,
                    paddingTop: spacings.xs,
                    paddingBottom: 20,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    height: 68,
                    elevation: 18
                },
                headerShown: false
            }}
        >
            {Object.keys(sectionInfo).map(key => {
                const section = sectionInfo[key as keyof typeof sectionInfo];
                return (
                    <Tab.Screen
                        key={key}
                        name={key}
                        component={section.Component}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                const props: Parameters<typeof section.Icon>[0] = focused ? {
                                    color: colors.main.gradient,
                                    size: 24,
                                    type: 'filled',
                                    style: {
                                        position: 'relative',
                                        bottom: 8,
                                    }
                                } : {
                                    color: colors.dark.tertiary,
                                    size: 20,
                                    type: 'outlined'
                                };
                                return (
                                    <View
                                        style={styles.wrapper}
                                    >
                                        <section.Icon {...props} />
                                        {!focused && <Text style={styles.iconText}>{section.title}</Text>}
                                    </View>
                                )
                            }
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    iconText: {
        ...textStyles.tiny,
        marginTop: 4
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
