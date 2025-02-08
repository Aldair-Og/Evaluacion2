import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, QUATERNARY_COLOR, QUINARY_COLOR, SECUNDARY_COLOR, TERTIARY_COLOR, texto_color, texto_color2 } from './commons/constants';
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles= StyleSheet.create({
    titleHeader: {
        color: texto_color,
        fontSize: 24,
        paddingHorizontal: 40,
        paddingVertical: 40,

    },
    bodyContainer:{
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40

    },
    titlePrincipal:{
        fontSize: 17,
        fontWeight: 'bold',
        color: texto_color2

    },
    textDescription:{
        fontSize: 15,
        color: texto_color2,
        marginTop: 10
    },
    inputText:{
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        marginTop: 10,

    },
    button: {
        backgroundColor: '#4CAF50',  
        padding: 10,                 
        margin: 5,                   
        borderRadius: 5,             
        alignItems: 'center',        
        justifyContent: 'center',    
    },
    inputText11: {
        backgroundColor: INPUT_COLOR,
        position: 'absolute',
        top: 100,
        left: 10,
        paddingVertical: 15,
        borderRadius: 10,
        width: 100,
        height: 50,
    },
    inputText1: {
        backgroundColor: INPUT_COLOR,
        position: 'absolute',
        right: 100,
        top: 100,
        borderRadius: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
    },
    inputText2: {
        backgroundColor: INPUT_COLOR,
        position: 'absolute',
        left: 10,
        borderRadius: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 160,
    },
    inputText3: {
        backgroundColor: INPUT_COLOR,
        position: 'absolute',
        right: 100,
        borderRadius: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 160,
    },
    formContainer:{
        marginVertical: 10,
    },
    buttonForm:{
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,

    },
    buttonFormText:{
        color: texto_color,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    Iconpassword:{
        position: 'absolute',
        right: 10,
        bottom: 8

    },
    Registerbutton:{
        color: texto_color2,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    globalmargin:{
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 10,
    },
    title: {
        fontSize: 25,
        marginBottom: 15,
    },

    imagen:{
        width: 200,
        height: 200,
        borderRadius: 100,
        position: 'relative',
        left: 80,
    
    }

})