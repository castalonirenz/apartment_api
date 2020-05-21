import React from 'react'
import {  NavigationContainer} from "@react-navigation/native";
import { Auth } from "./Navigator/StackNavigator";
const App = props => {


    return(
        <NavigationContainer>
            <Auth/>
        </NavigationContainer>
    )
}
export default App