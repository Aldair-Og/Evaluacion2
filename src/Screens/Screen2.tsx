import React from 'react'
import { Image,View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../Theme/AppTheme';





export const Screen2 = () => {



const navigation = useNavigation();
return (
    <View style={styles.globalmargin}>
        <View>
            <Image source={{
                uri:'https://www.creativefabrica.com/wp-content/uploads/2021/05/25/Mobile-Store-Logo-Modern-Tech-Simple-Graphics-12429779-1.png'
            }} style={styles.imagen}/>
        </View>
        </View>
)
}