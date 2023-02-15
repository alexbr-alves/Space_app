import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Back from 'react-native-vector-icons/Ionicons'
import {View, Text, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";


import links from "../../Mocks/links";


export default function View3D({ navigation: { goBack } }){
    const route = useRoute();
    const [planet3D, setPlanet3d] = useState();
    useEffect(() => {
            if(route.params.id == "Mercury"){
              setPlanet3d(links.Mercurio)
            }else if(route.params.id == "Venus"){
                setPlanet3d(links.Venus)
            }else if(route.params.id == "Earth"){
                setPlanet3d(links.Terra)
            }else if(route.params.id == "Mars"){
                setPlanet3d(links.Marte)
            }else if(route.params.id == "Jupiter"){
                setPlanet3d(links.Jupiter)
            }else if(route.params.id == "Saturn"){
                setPlanet3d(links.Saturno)
            }else if(route.params.id == "Uranus"){
                setPlanet3d(links.Urano)
            }else if(route.params.id == "Neptune"){
                setPlanet3d(links.Netuno)
            }else if(route.params.id == "Sun"){
                setPlanet3d(links.Sol)
            };


    }, [route.params.id])
    return (         
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <TouchableOpacity onPress={() => goBack()} style={{backgroundColor: '#f3f3f7'}}>
          <Back style={{ marginTop: 40, marginLeft: 20}} name="arrow-back" size={35} color={'#032250'} />
        </TouchableOpacity>
      
        <WebView
          style={{flex: 1}}
          scrollEnabled={false}
          source={{ uri: planet3D }}
        />
      </View>
      
    )
}