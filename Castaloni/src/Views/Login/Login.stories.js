import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { Auth } from "../../Navigator/StackNavigator";
import { NavigationContainer } from '@react-navigation/native';

storiesOf('Login', module).add('login view', () => (
    <NavigationContainer>
        <Auth />
    </NavigationContainer>
))