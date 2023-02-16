import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Header from "./components/Header";


import fundo from '../../../assets/fundo.jpg'
import styles from './styles'

import dadosPlanetas from "../../Mocks/dados";
import Body from "./components/body";
import Footer from "./components/footer";



export default function PlanetsView(){
    const route = useRoute();
    const navigation = useNavigation();
    const [planetData, setPlanetData] = useState({});
    const handleGoBack = () => navigation.goBack();
    const footerNavigation = () => navigation.navigate("View3D", {id: route.params.id})

    useEffect(() => {
      const selectedPlanet = dadosPlanetas.find((planet) => planet.planet === route.params.id);
      setPlanetData(selectedPlanet);
    }, [route.params.id]);

    return (
        <View source={fundo} style={styles.container} >
            <Header title={planetData.planet} onBack={handleGoBack} />
            
            <Body planetData={planetData} styles={styles} />

          <Footer footerNavigation={footerNavigation} planetData={planetData} styles={styles}/>

        </View>
    )
}