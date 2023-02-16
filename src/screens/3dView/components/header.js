import React from "react";
import { TouchableOpacity } from "react-native";

import Back from 'react-native-vector-icons/Ionicons'

export default function Header({onBack}){
    return(
        <TouchableOpacity onPress={onBack} style={{backgroundColor: '#f3f3f7'}}>
          <Back style={{ marginTop: 40, marginLeft: 20}} name="arrow-back" size={35} color={'#032250'} />
        </TouchableOpacity>
    )
}