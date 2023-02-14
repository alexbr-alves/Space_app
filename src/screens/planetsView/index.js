import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity} from 'react-native'
import Back from 'react-native-vector-icons/Ionicons'



import styles from './styles'

import dadosPlanetas from "../../Mocks/dados";



export default function PlanetsView({ navigation: { goBack } }){
    const route = useRoute();
    const [dados, setDados] = useState({});
    const navigation = useNavigation();
    
    useEffect(() => {
        for(let i = 0; i < dadosPlanetas.length; i++ ){
            if(route.params.id == dadosPlanetas[i].planet){
                setDados(dadosPlanetas[i])
            }
        }
    }, [route.params.id])

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => goBack()}>
                <Back style={{marginTop: 40, marginLeft: 20}} name="arrow-back" size={35} color={'#FFFFFF'}/>
            </TouchableOpacity>
           
            <Text style={styles.head_title}>{dados.planet}</Text>
            <Image style={styles.head_image} source={dados.image}/>
            <View style={styles.body}>
                <View>

                <View>
                    <Text style={styles.body_redus}>REDUS</Text>
                    <Text style={styles.body_redusValue}>{dados.circumference} KM</Text>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.body_moons}>MOONS</Text>
                    <Text style={styles.body_moonsValue}>{dados.moons}</Text>
                </View>

                </View>

                <View style={{marginRight: 20}}>
                <View>
                    <Text style={styles.body_distance}>DISTANCE FROM SUN</Text>
                    <Text style={styles.body_distanceValue}>{dados.distanceFromSun}MI KM</Text>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.body_orbital}>ORBITAL PERIOD</Text>
                    <Text style={styles.body_orbitalValue}>{dados.orbitalPeriod} DAYS</Text>
                </View>
                
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("View3D", {id: route.params.id})}}>
                <Text style={styles.button_title} >3D VIEW</Text>
            </TouchableOpacity>

        </View>
    )
}