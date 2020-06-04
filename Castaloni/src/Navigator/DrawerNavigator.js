import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { MenuStack, ApartmentStack } from "../Navigator/StackNavigator";
import { Text, Image } from "react-native";
export const DrawerNav = () => {
    return(
        <Drawer.Navigator
            drawerContentOptions={{
                // activeBackgroundColor:"#6C63FF",
                inactiveTintColor:"#000", 
            }}
        >
            <Drawer.Screen 
                options={{
                    drawerIcon: ({color, focused}) => {
                      return(
                          <Image
                             resizeMode={"contain"}
                            style={{width: 50, height: 50, opacity: !focused ? 0.5 : 1}}
                             source={require('../assets/images/home.png')}
                          />
                      )
                    }
                }}
                name="Home" component={MenuStack}/>
            <Drawer.Screen 
                options={{
                    drawerIcon: ({ color, focused }) => {
                        return (
                            <Image
                                resizeMode={"contain"}
                                style={{ width: 50, height: 50, opacity: !focused ? 0.5 : 1 }}
                                source={require('../assets/images/building.png')}
                            />
                        )
                    },
                    drawerLabel: ({color, focused}) => {
                        return(
                            <Text style={{ color: focused ? "#6C63FF" : "#000", fontWeight: focused ? "bold" : "normal"}}>Apartments</Text>
                        )
                    }
                }}
            name="Apartment" component={ApartmentStack} />
            <Drawer.Screen 
                options={{
                    drawerIcon: ({ color, focused }) => {
                        return (
                            <Image
                                resizeMode={"contain"}
                                style={{ width: 50, height: 50, opacity: !focused ? 0.5 : 1 }}
                                source={require('../assets/images/people.png')}
                            />
                        )
                    }
                }}
            name="User" component={MenuStack} />
        </Drawer.Navigator>
    )
}