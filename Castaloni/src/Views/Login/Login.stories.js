import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { Login } from './Login';

storiesOf('Login', module).add('login view', () => (
    <Login/>
))