import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../Theme/AppTheme'


interface Props{
    textbutton: string,
    onPress: () => void,
}

export const ButtomComponent = ({textbutton, onPress}: Props) => {
return (
    <TouchableOpacity style={styles.buttonForm} onPress={onPress}>
        <Text style={styles.buttonFormText}>{textbutton}</Text>
    </TouchableOpacity>
)
}
