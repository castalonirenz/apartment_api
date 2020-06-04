import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image, View, Dimensions, TextInput, useColorScheme } from "react-native";
import { RegularTheme, DarkTheme } from '../Theme/Theme';
import { Input, Button } from "../Component/index";
import { accountContext } from "../Context/data";
export const Login = props => {
    const colorScheme = useColorScheme();


    const Login = () => {
        alert('otw')
    }

    const data = useContext(accountContext)
    return (
        <SafeAreaView style={[ colorScheme == "dark" ? DarkTheme.Container : RegularTheme.Container, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
            <Text>{data}</Text>
           
            <Image
                resizeMode="contain"
                style={{ height: 300, width: 400, opacity: 0.6, }}
                source={require('../assets/images/apartment.png')} />

            <Image
                resizeMode="contain"
                style={{ height: 300, width: 400, position:"absolute" }}
                source={require('../assets/images/clip-payment.png')} />

            <View style={[RegularTheme.LoginBoxUI, {marginTop: 20, zIndex:999}]}>

                <Input
                    placeholder="Email"
                    sourceImage={require('../assets/images/email.png')}
                />


                <Input
                    placeholder="Password"
                    style={{marginTop: 15}}
                    sourceImage={require('../assets/images/pass.png')}
                />
                
                <Button
                    onPress={Login}
                    style={{
                       width:"80%",
                       marginTop: 20
                    }}
                />

            </View>
        </SafeAreaView>
    )
}
