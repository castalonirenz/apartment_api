import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, useColorScheme, Image, StyleSheet } from "react-native";
import { ApartmentList, HeaderComponent, LoadingModal } from "../../Component/index";
import { DarkTheme, RegularTheme } from "../../Theme/Theme";
import { ApiRequest } from '../../utils/api';

export const Apartment = props => {
    const colorScheme = useColorScheme();
    const [apartmentList, setApartmentList] = useState([]);
    const [active, setActive] = useState(0)
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        ApiRequest('get', data)
            .then(response => {
                setLoading(false)
                setApartmentList(response.apartments)
            })
    }

    const getCurrentTab = () => {

        if (active == 0) {
            return <ApartmentList data={apartmentList} />
        }
        else {
            null
        }
    }

    return (
        <SafeAreaView
            style={[colorScheme == "dark" ? DarkTheme.Container : RegularTheme.Container, {
                flex: 1,
            }]}>

            {/* Loading */}

            <LoadingModal
                visible={loading}
            />

            {/* MENU */}
            <HeaderComponent

                onPress={() => props.navigation.toggleDrawer()}
            />



            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", }}>
                <TouchableOpacity
                    onPress={() => setActive(0)}
                    style={[active == 0 ? Style.active : Style.nonActive, Style.primary]}>
                    <Text style={[active == 0 ? Style.active : Style.nonActive]}>
                        Apartment
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActive(1)}
                    style={[active == 1 ? Style.active : Style.nonActive, Style.primary]}>
                    <Text style={[active == 1 ? Style.active : Style.nonActive]}>Rooms</Text>
                </TouchableOpacity>
            </View>

            {getCurrentTab()}


        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    primary:{
        width: "50%",
        padding: 10,
        alignItems: "center"
    },
    active: {
        backgroundColor: "#0b4f6c",
        color:"#fff",
        fontWeight:"bold"
    },
    nonActive: {
        backgroundColor: "#c5c5c5",
        color: "#fff"
    }
})