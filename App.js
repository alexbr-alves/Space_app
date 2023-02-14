import React, { useCallback } from "react";
import { View } from 'react-native';

import {SplashScreen} from 'expo-splash-screen'
import { useFonts } from "expo-font";
import {BebasNeue_400Regular} from "@expo-google-fonts/bebas-neue"
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    BebasNeue_400Regular
      })
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();    }
      }, [fontsLoaded])
    
        if(!fontsLoaded){
          return null
        }
  return (
    <View style={{flex: 1}}>
    <AppRoutes/>
    </View>
  );
}