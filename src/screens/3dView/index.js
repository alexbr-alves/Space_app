import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Back from 'react-native-vector-icons/Ionicons'
import { View, TouchableOpacity } from "react-native";
import styles from './styles'

import Jupiter3D from '../../components/planetas3D/Jupiter3D';
import Marte3D from '../../components/planetas3D/Marte3D';
import Mercurio3D from '../../components/planetas3D/Mercurio3D'
import Netuno3D from '../../components/planetas3D/Netuno3D';
import Saturno3D from '../../components/planetas3D/Saturno3D';
import Terra3D from '../../components/planetas3D/Terra3D';
import Urano3D from '../../components/planetas3D/Urano3D';
import Venus3d from '../../components/planetas3D/Venus3d'








export default function View3D({ navigation: { goBack } }){
    const route = useRoute();
    const [planet3D, setPlanet3d] = useState();
    useEffect(() => {
            if(route.params.id == "Mercury"){
              setPlanet3d(<Mercurio3D/>)
            }else if(route.params.id == "Venus"){
                setPlanet3d(<Venus3d/>)
            }else if(route.params.id == "Earth"){
                setPlanet3d(<Terra3D/>)
            }else if(route.params.id == "Mars"){
                setPlanet3d(<Marte3D/>)
            }else if(route.params.id == "Jupiter"){
                setPlanet3d(<Jupiter3D/>)
            }else if(route.params.id == "Saturn"){
                setPlanet3d(<Saturno3D/>)
            }else if(route.params.id == "Uranus"){
                setPlanet3d(<Uranus/>)
            }else if(route.params.id == "Neptune"){
                setPlanet3d(<Netuno3D/>)
            };
        
    }, [route.params.id])
    return (
        <View style={{flex: 1, backgroundColor:'#f3f3f7' }}>
            <TouchableOpacity onPress={() => goBack()} style={{backgroundColor:'#f3f3f7'}}>
                <Back style={{marginTop: 40, marginLeft: 20, position: 'relative', backgroundColor: '#f3f3f7'}} name="arrow-back" size={35} color={'#032250'}/>
            </TouchableOpacity>
            {planet3D}
        </View>
    )
}