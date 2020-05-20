import React from 'react'
import { Login } from "../Views/Login/Login";
import { Menu } from "../Views/Menu/Menu";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const Auth = () => {
    return(
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={MenuStack}/>
        </Stack.Navigator>
    )
} 

export const MenuStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    )
}