import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, useColorScheme, Image, StyleSheet } from "react-native";
import { ApartmentList, HeaderComponent, LoadingModal, RoomList } from "../Component/index";
import { DarkTheme, RegularTheme } from "../Theme/Theme";
import { ApiRequest, url } from '../utils/api';

export const Apartment = props => {
    const colorScheme = useColorScheme();
    const [apartmentList, setApartmentList] = useState([]);
    const [active, setActive] = useState(0)
    const [loading, setLoading] = useState(false)
    const [roomList, setRoomList] = useState([])
    const [refreshing, setRefreshing] = useState(true)
    useEffect(() => {

        props.navigation.addListener('focus', async () => {

            getApartmentList()

        })
        if (active == 0) {
            getApartmentList()
        }
        else {
            getRoomList()
        }
        return (() => {

        })

    }, [active])

    const getRoomList = () => {

        let data = {
            body: {
                role: 1
            },
            url: url + 'user/room_list_all'
        }
        setLoading(true)
        ApiRequest('get', data)
            .then(response => {

                setLoading(false)
                setRoomList(response.data)
            })
    }

    const getApartmentList = () => {
        let data = {
            body: {
                role: 1
            },
            url: url + 'user/apartment_list'
        }
        setLoading(true)
        ApiRequest('get', data)
            .then(response => {
                
                setLoading(false)
                setApartmentList(response.apartments)
            })
    }

    const onRefresh = () => {
        if (active == 0) {
            getApartmentList()
        }
        else {
            getRoomList()
        }
    }

    const getCurrentTab = () => {

        if (active == 0) {
            return <ApartmentList
                refreshing={loading}
                onRefresh={onRefresh}
                data={apartmentList} list={"apartment"} />
        }
        else {

            return <ApartmentList
                refreshing={loading}
                onRefresh={onRefresh}
                data={roomList} list={"rooms"} />

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
    primary: {
        width: "50%",
        padding: 10,
        alignItems: "center"
    },
    active: {
        backgroundColor: "#0b4f6c",
        color: "#fff",
        fontWeight: "bold"
    },
    nonActive: {
        backgroundColor: "#c5c5c5",
        color: "#fff"
    }
})