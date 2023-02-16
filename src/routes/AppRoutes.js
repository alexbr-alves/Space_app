
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlanetView from '../screens/planetsView/index'
import View3D from '../screens/3dView';
import Explorer from '../screens/explorer';
import Galery from '../screens/galery';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Explorer" component={Explorer} options={{
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
        <Stack.Screen name="Galery" component={Galery} options={{
            title: '',
            headerShown: false
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
