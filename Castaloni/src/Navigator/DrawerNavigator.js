import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { MenuStack, ApartmentStack } from "../Navigator/StackNavigator";
export const DrawerNav = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Menu" component={MenuStack}/>
            <Drawer.Screen name="Apartment" component={ApartmentStack} />
            <Drawer.Screen name="User" component={MenuStack} />
        </Drawer.Navigator>
    )
}