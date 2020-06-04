import React,{  } from "react";
import { TouchableOpacity, Text } from "react-native";


export const Button = (props) => {

    return(
    <TouchableOpacity
        onPress={props.onPress}
        style={[{
            padding: 10,
            backgroundColor:"#fe9700",
            alignItems:"center",
            borderRadius: 5}, props.style]}
    >
        
        <Text 
            style={{
                color:"#fff",
                
            }}
        >
            Login
        </Text>
    
    </TouchableOpacity>
    )
}