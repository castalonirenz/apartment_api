import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
export const Menu = props => {

    return (
    
            <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
            </SafeAreaView>
    )
}
