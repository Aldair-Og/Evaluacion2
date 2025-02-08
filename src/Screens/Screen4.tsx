import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Titlecomponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtomComponent } from '../components/ButtomComponent';
import { styles } from '../Theme/AppTheme';

interface CompareForm {
    num1: string;
    num2: string;
}

export const Screen4 = () => {
    const [compareForm, setCompareForm] = useState<CompareForm>({
        num1: '',
        num2: '',
    });




    const [result, setResult] = useState<string>('');




    const handleChange = (name: string, value: string): void => {
        setCompareForm({ ...compareForm, [name]: value });
    };



    const handleCompare = (): void => {
        const number1 = parseFloat(compareForm.num1);
        const number2 = parseFloat(compareForm.num2);



        if (isNaN(number1) || isNaN(number2)) {
            setResult('ingrese numeros validos.');
            return;
        }

        if (number1 > number2) {
            setResult(`El numero mayor es: ${number1}`);
        } else if (number1 < number2) {
            setResult(`El numero mayor es: ${number2}`);
        } else {
            setResult('Ambos números son iguales');
        }
    };





    return (
        <View>
            <Titlecomponent title="Comparar Numeros" />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>Comparador</Text>
                <Text style={styles.textDescription}>Ingrese dos numeros para comparar</Text>
                <View style={styles.formContainer}>
                <InputComponent text='Numero 1' 
                keyboard='number-pad' 
                handleChange={handleChange}
                name='num1'
                />
                <InputComponent text='Numero 2' 
                keyboard='number-pad' 
                handleChange={handleChange}
                name='num2'
                />
                    <View style={styles.formContainer}>
                        <ButtomComponent textbutton=">=" onPress={handleCompare} />
                        <Text style={styles.textDescription}>{result}</Text>
                    </View>
                </View>
            </BodyComponent>
        </View>
    );
};
