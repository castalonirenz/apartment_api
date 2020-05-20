import React,{  } from "react";
import { TouchableOpacity } from "react-native";


export const Button = (props) => {

    return(
    <TouchableOpacity>{props.children}</TouchableOpacity>
    )
}