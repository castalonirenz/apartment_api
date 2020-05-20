import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { Input } from "./Input";

storiesOf('Input', module).add('Text input', () => (
    <Input/>
))