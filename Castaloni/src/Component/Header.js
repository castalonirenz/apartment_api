import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, useColorScheme } from "react-native"
import { DarkTheme, RegularTheme } from "../Theme/Theme";
export const HeaderComponent = props => {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity

            onPress={props.onPress}
            style={{
                alignSelf: "flex-end",
                padding: 20
            }}>

            <Image
                resizeMode="contain"
                style={colorScheme == "dark" ? DarkTheme.MenuIcon : RegularTheme.MenuIcon}
                source={require('../assets/images/bars.png')} />

        </TouchableOpacity>
    )
}