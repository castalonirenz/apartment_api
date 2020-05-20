// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
// import { View, Text, SafeAreaView } from "react-native";
// const App = (props) => {

//     return (
//         <NavigationContainer>
//             <SafeAreaView>
//                 <Text>TESTß</Text>
//             </SafeAreaView>
//         </NavigationContainer>
//     )

// }

// export default App
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import './rn-addons';

// import stories
configure(() => {
    require('./Views/Login/Login.stories')
    require('./Component/Input/Input.stories')
    // require('./Component/Button/button.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
