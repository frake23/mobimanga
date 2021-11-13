import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tag } from './Tag';

interface TagsLineProps {
    type: 'search' | 'info';
    data: string[];
}

export const TagsLine: React.FC<TagsLineProps> = ({ type, data }) => {
    return (
        <View style={styles.wrapper}>
            {data.map(text => (
                <Tag
                    key={text}
                    title={text}
                    type={type}
                    style={styles.tag}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    tag: {
        marginRight: 8,

    },
});
