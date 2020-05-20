import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { Button } from "./Button";

storiesOf('Button', module).add('button', () => (
    <Button>
        <Text>Press me!</Text>
    </Button>
))