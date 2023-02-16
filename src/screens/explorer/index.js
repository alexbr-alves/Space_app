
import React  from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import fundo from '../../../assets/fundo2.jpg'
import dadosPlanets from '../../Mocks/dados';


import Header from './components/Header';
import Body from './components/body';
import Footer from './components/footer';


export default function Explorer(){
    const navigation = useNavigation()
    const exploreNavigation = () => {navigation.navigate("Galery")}

return (
    <ImageBackground source={fundo}  style={styles.container}>
        <Header styles={styles}/>

        <Body dadosPlanets={dadosPlanets} styles={styles} navigation={navigation}/>

        <Footer exploreNavigation={exploreNavigation} styles={styles}/>
    </ImageBackground>
);
};





