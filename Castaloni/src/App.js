import React from 'react'
import {  NavigationContainer} from "@react-navigation/native";
import { Auth, MenuStack } from "./Navigator/StackNavigator";
import { Provider } from './Context/data';
const App = props => {

   
    return(

        <Provider>
            <NavigationContainer>
                <Auth />
            </NavigationContainer>
        </Provider>

       
    )
}
export default App