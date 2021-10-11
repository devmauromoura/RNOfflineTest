import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouterContainter } from './Container';
const Stack = createNativeStackNavigator();

import { RouteList } from './list';

export const Router: React.FC = () => {
    return (
        <RouterContainter>
            <Stack.Navigator>
                {RouteList.map(item => (
                    <Stack.Screen name={item.title} component={item.component} key={item.title} options={item?.options}/>
                ))}
            </Stack.Navigator>
        </RouterContainter>
    )
}