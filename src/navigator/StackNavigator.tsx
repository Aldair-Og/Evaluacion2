import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../Screens/Screen1';
import { Screen2 } from '../Screens/Screen2';
import { Screen3 } from '../Screens/Screen3';
import { Screen4 } from '../Screens/Screen4';
import { Screen5 } from '../Screens/Screen5';



const Stack = createStackNavigator();

export const StackNavigator = ()=> {
return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor: '#FDF1DD'
        }
    }}>
    <Stack.Screen name="Screen1"  component={Screen1} />
    <Stack.Screen name="Screen2"  component={Screen2} />
    <Stack.Screen name="Screen3"  component={Screen3} />
    <Stack.Screen name="Screen4"  component={Screen4} />
    <Stack.Screen name="Screen5"  component={Screen5} />
    </Stack.Navigator>
);
}