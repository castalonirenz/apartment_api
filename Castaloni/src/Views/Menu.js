import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, BackHandler, useColorScheme, Image} from "react-native";
import { DarkTheme, RegularTheme } from "../Theme/Theme";
import { HeaderComponent } from "../Component/index";
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
                 <HeaderComponent
                    onPress={()=> props.navigation.toggleDrawer()}
                 />
            
                 <Image
                    style={{flex: 1, width:"100%"}}
                    resizeMode="contain"
                    source={require('../assets/images/looking_house.png')}
                 />
            </SafeAreaView>
    )
}
