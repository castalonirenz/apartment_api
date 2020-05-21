import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image, View, Dimensions, TextInput, useColorScheme } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { RegularTheme, DarkTheme } from '../../Theme/Theme';

import { Input } from "../../Component/Input/Input";
import { Button } from '../../Component/Button/Button';
export const Login = props => {
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView style={[ colorScheme == "dark" ? DarkTheme.Container : RegularTheme.Container, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
            <Image
                resizeMode="contain"
                style={{ height: 300, width: 400, opacity: 0.6, }}
                source={require('../../assets/images/apartment.png')} />

            <Image
                resizeMode="contain"
                style={{ height: 300, width: 400, position:"absolute" }}
                source={require('../../assets/images/clip-payment.png')} />

            <View style={[RegularTheme.LoginBoxUI, {marginTop: 20, zIndex:999}]}>

                <Input
                    placeholder="Email"
                    sourceImage={require('../../assets/images/email.png')}
                />


                <Input
                    placeholder="Password"
                    style={{marginTop: 15}}
                    sourceImage={require('../../assets/images/pass.png')}
                />
                
                <Button
                    style={{
                       width:"80%",
                       marginTop: 20
                    }}
                />

            </View>
        </SafeAreaView>
    )
}
