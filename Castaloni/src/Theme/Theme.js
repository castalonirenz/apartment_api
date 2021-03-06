import React from 'react';

import { StyleSheet, Dimensions } from "react-native";

export const RegularTheme = StyleSheet.create({
    LoginBoxUI: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#0b4f6c",
        width: Dimensions.get('screen').width * .8,
        height: Dimensions.get('screen').height * .3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    TextInputUI: {
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff",
        width: "80%",
        paddingLeft: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    Container: {
        backgroundColor: "#fff",
    },
    MenuIcon: {
        height: 30,
        width: 30,
        tintColor: "#144d87"
    },
    Shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ApartmentList:{
        width: Dimensions.get('screen').width * .9,
        padding: 10, backgroundColor: "#0b4f6c",
        marginBottom: 15, borderRadius: 5,
        height: Dimensions.get('screen').height * .3,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
})

export const DarkTheme = StyleSheet.create({
    LoginBoxUI: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#144d87",
        width: Dimensions.get('screen').width * .8,
        height: Dimensions.get('screen').height * .3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    TextInputUI: {
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff",
        width: "80%",
        paddingLeft: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    Container: {
        backgroundColor: "#213c5e"
    },
    MenuIcon: {
        height: 30,
        width: 30,
        tintColor: "#fff"
    }
})