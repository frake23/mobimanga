import React from 'react'
import { View } from 'react-native'

interface Props {
    size: number,
}

export const ItemSeparator: React.FC<Props> = ({size}) => {
    return (
        <View style={{width: size, backgroundColor: 'transparent'}} />
    )
}
