import React from 'react';
import { 
   TouchableOpacity,
    Image 
} from 'react-native';

export default function Body({dadosPlanets, styles, navigation}){
    return(
        <>
        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Sun"})}} >
            <Image source={dadosPlanets[8].image} style={styles.sol}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Mercury"})}}>
            <Image source={dadosPlanets[0].image} style={styles.mercurio}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Venus"})}}>
            <Image source={dadosPlanets[1].image} style={styles.venus}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Earth"})}}>
            <Image source={dadosPlanets[2].image} style={styles.terra}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Mars"})}}>
            <Image source={dadosPlanets[3].image} style={styles.marte}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Jupiter"})}}>
            <Image source={dadosPlanets[4].image} style={styles.jupiter}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Saturn"})}}>
            <Image source={dadosPlanets[5].image} style={styles.saturn}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Uranus"})}}>
            <Image source={dadosPlanets[6].image} style={styles.uranus}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate("PlanetView", {id: "Neptune"})}}>
            <Image source={dadosPlanets[7].image} style={styles.neptune}/>
        </TouchableOpacity>
        </>
    )
}