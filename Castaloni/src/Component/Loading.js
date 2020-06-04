import React from 'react'
import { SafeAreaView, View, Modal, ActivityIndicator, Text, StyleSheet } from "react-native";

export const LoadingModal = props => {

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >

            <SafeAreaView style={Style.Container}>
                <ActivityIndicator size={"large"} color={"#fff"}/>
            </SafeAreaView>

        </Modal>
    )
}

const Style = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        alignItems:"center",
        justifyContent:"center"
    }
})

