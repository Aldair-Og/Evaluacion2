import React from 'react'
import { Image,View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../Theme/AppTheme';





export const Screen3 = () => {



const navigation = useNavigation();
return (
    <View style={styles.globalmargin}>
        <View>
            <Image source={{
                uri:'https://negativeepsilon.com/media/attachments/blobs/2023/01/09/Y79QCJHqAhL28uR4KfnqvH_reactnavigation_MudZeIK.jpeg_riwC4kc5pLH7k1e5ReNajv_2FOQ.webp'
            }} style={styles.imagen}/>
        </View>
        </View>
)
}