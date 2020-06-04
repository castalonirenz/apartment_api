import React from "react";
import { View, Image, Text } from "react-native";

export const EmptyComponent = () => {

    return(
        <View style={{ flex: 1, width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Image
                resizeMethod="auto"
                resizeMode="contain"
                source={require('../assets/images/empty.png')} />
            <Text style={{ marginTop: 20 }}>Sorry, not available.</Text>
        </View>
    )
}