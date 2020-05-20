import React from 'react';

import { StyleSheet, Dimensions } from "react-native";

export const RegularTheme = StyleSheet.create({
    LoginBoxUI:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:"#fff",
        width: Dimensions.get('screen').width * .8,
        height: Dimensions.get('screen').height * .3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    TextInputUI:{
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "blue",
        width:"80%",
        paddingLeft: 10,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center"
    }
})