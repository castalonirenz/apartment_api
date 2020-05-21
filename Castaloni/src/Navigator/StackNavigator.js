import React from 'react'
import { Login } from "../Views/Login/Login";
import { DrawerNav } from "./DrawerNavigator";
import { createStackNavigator } from '@react-navigation/stack';
import { Menu } from "../Views/Menu/Menu";
import { Apartment } from "../Views/Apartment/Apartment";
const Stack = createStackNavigator();

export const Auth = () => {
    return(
        <Stack.Navigator 
            headerMode={false}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
                options={{
                    gestureEnabled: false
                }}  
             name="Menu" component={DrawerNav}/>
        </Stack.Navigator>
    )
} 

export const MenuStack = () => {
    return(
        <Stack.Navigator headerMode="none" >
            <Stack.Screen
                 name="Menu" component={Menu} />
        </Stack.Navigator>
    )
}

export const ApartmentStack = () => {

    return(
        <Stack.Navigator headerMode="none" >
            <Stack.Screen
                name="Apartment" component={Apartment} />
        </Stack.Navigator>
    )
}