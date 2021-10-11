import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const RouterContainter: React.FC = ({ children }) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    );
}