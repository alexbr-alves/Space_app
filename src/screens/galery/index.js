import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";

import {
    View, 
    ImageBackground, 
    TouchableOpacity, 
    FlatList,
    Text,
    Image} from 'react-native'

import Back from 'react-native-vector-icons/Ionicons'

import fundo from '../../../assets/fundo.jpg'
import dadosPlanets from '../../Mocks/dados';
import styles from "./styles";

export default function Galery({ navigation: { goBack } }){
    const navigation = useNavigation()
    return (
        <View source={fundo} style={styles.container}>
             <TouchableOpacity onPress={() => goBack()}>
                <Back style={{marginTop: 40, marginLeft: 20}} name="arrow-back" size={35} color={'#FFFFFF'}/>
            </TouchableOpacity>
            <FlatList
            style={{marginTop: 20}}
  data={dadosPlanets}
  numColumns={"2"}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate("PlanetView", {id: item.planet})}}> 
        <Image style={styles.card_image} source={item.image} />
        <Text style={styles.card_text}>{item.planet}</Text>
    </TouchableOpacity>
  )}
/>
        </View>
    )
}