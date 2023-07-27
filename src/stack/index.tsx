import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/mainScreen';
import FavoriteScreen from '../screens/favoriteScreen';

const Stack: React.FC<any> = () => {

    const stack = createStackNavigator();

    return (
        <stack.Navigator>
            <stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
            <stack.Screen name='FavoriteScreen' component={FavoriteScreen} options={{headerShown:false}}/>
        </stack.Navigator>
    )
}
export default Stack