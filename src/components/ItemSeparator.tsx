import React from 'react'
import { View } from 'react-native'

interface Props {
    size: number,
    color: string    
}

export const ItemSeparator: React.FC<Props> = ({size, color}) => {
    return (
        <View style={{width: size, backgroundColor: color}} />
    )
}
