import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, useColorScheme, Image, } from "react-native";

import { ApartmentList } from "../../Component/Apartment/ApartmentList";
import { DarkTheme, RegularTheme } from "../../Theme/Theme";
import { ApiRequest } from '../../utils/api';

export const Apartment = props => {
    const colorScheme = useColorScheme();
    const [apartmentList, setApartmentList] = useState([]);


    useEffect(() => {

        props.navigation.addListener('focus', async () => {
            getApartmentList()
        })



    }, [])

    const getApartmentList = () => {
        let data = {
            body: {
                role: 1
            },
            url: 'http://127.0.0.1:8000/api/v1/user/apartment_list'
        }
        ApiRequest('get', data)
            .then(response => {
                console.log(response.data.data, "--> uhm")
                setApartmentList(response.data.data)
            })
    }

    return (
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

            <ApartmentList data={apartmentList} />

        </SafeAreaView>
    )
}