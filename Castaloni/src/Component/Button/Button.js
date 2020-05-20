import React,{  } from "react";
import { TouchableOpacity, Text } from "react-native";


export const Button = (props) => {

    return(
    <TouchableOpacity
        style={[{
            padding: 10,
            backgroundColor:"#c5c5c5",
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