import React from 'react'
import { TouchableOpacity, Text,View, Image, TextInput } from "react-native";
import {RegularTheme} from '../../Theme/Theme'

export const Input = props => {
    return(
        <View style={[RegularTheme.TextInputUI, props.style]}>
            <Image
                resizeMethod="contain"
                style={{ height: 30, width: 30 }}
                // source={require('../../assets/images/email.png')}
                source={props.sourceImage}
            />
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor="#c5c5c5"
                style={{ color: "#fff", marginLeft: 10, width:"100%", height:"100%" }}
            // style={RegularTheme.TextInputUI}
            />
        </View>
    )
}