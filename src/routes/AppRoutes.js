
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home/Home'
import PlanetView from '../screens/planetsView/index'
import View3D from '../screens/3dView';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
            title: '',
            headerShown: false
            }}/>
        <Stack.Screen name="PlanetView" component={PlanetView} options={{
            title: '',
            headerShown: false
            }}/>
        <Stack.Screen name="View3D" component={View3D} options={{
            title: '',
            headerShown: false
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
