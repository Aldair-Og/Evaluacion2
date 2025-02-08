import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../Theme/AppTheme';


interface Props{
    title: string;
}


export const Titlecomponent = ({title}:Props) => {
    const {height} = useWindowDimensions();
return (

    <Text style={{
        ...styles.titleHeader,
        height: height * 0.17}}>{title}</Text>
)
}
