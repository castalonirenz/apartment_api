import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, BackHandler, useColorScheme, Image} from "react-native";
import { DarkTheme, RegularTheme } from "../../Theme/Theme";
export const Menu = props => {
    const colorScheme = useColorScheme()

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', BackHandlerPress);
        return(() => {
            BackHandler.removeEventListener('hardwareBackPress', BackHandlerPress);
        })
    },[])

    const BackHandlerPress = () => {
        return true;
    }
    return (
    
            <SafeAreaView style={[colorScheme == "dark" ? DarkTheme.Container : RegularTheme.Container,{ flex: 1 }]}>
                    <TouchableOpacity
                        onPress={()=> props.navigation.toggleDrawer()}
                        style={{
                            padding: 20
                        }}
                    >
                        <Image
                            resizeMode="contain"
                            style={colorScheme == "dark" ? DarkTheme.MenuIcon : RegularTheme.MenuIcon} 
                            source={require('../../assets/images/bars.png')} />
                    </TouchableOpacity>
            </SafeAreaView>
    )
}
