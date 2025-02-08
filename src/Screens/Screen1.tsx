import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { styles } from '../Theme/AppTheme';





export const Screen1 = () => {



const navigation = useNavigation();
return (
<View style={styles.globalmargin}>
        <Text style={styles.title}>Bienvenidos</Text>
        <View style={styles.globalmargin}>
        <TouchableOpacity
        style={styles.inputText11} 
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Screen2' }))}
        >
        <Text style={styles.buttonFormText}>Imagen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.inputText1} 
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Screen3' }))}
        >
        <Text style={styles.buttonFormText}>Imagen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.inputText2} 
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Screen4' }))}
        >
        <Text style={styles.buttonFormText}>{'>='}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.inputText3} 
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Screen5' }))}
        >
        <Text style={styles.buttonFormText}>{'<='}</Text>
        </TouchableOpacity>
        </View>
    </View>
)
}
