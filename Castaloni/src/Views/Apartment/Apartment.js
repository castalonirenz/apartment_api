import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, useColorScheme, Image } from "react-native";

import { ApartmentList } from "../../Component/Apartment/ApartmentList";
import { DarkTheme, RegularTheme } from "../../Theme/Theme";


export const Apartment = props => {
    const colorScheme = useColorScheme()
    return(
        <SafeAreaView 
        style={[colorScheme == "dark" ? DarkTheme.Container : RegularTheme.Container, {
            flex: 1,
        }]}>

            {/* MENU */}
            <TouchableOpacity
                onPress={() => props.navigation.toggleDrawer()}
                style={{
                    padding: 20
                }}>

                <Image
                    resizeMode="contain"
                    style={colorScheme == "dark" ? DarkTheme.MenuIcon : RegularTheme.MenuIcon}
                    source={require('../../assets/images/bars.png')} />

            </TouchableOpacity>


            <ApartmentList/>
        </SafeAreaView>
    )
}