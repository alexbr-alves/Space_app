import React from 'react';
import { TouchableOpacity } from 'react-native';
import Back from 'react-native-vector-icons/Ionicons'

export default function Header({ onBack }) {
  return (
    <>
      <TouchableOpacity onPress={onBack}>
        <Back style={{marginTop: 40, marginLeft: 20}} name="arrow-back" size={35} color={'#FFFFFF'}/>
      </TouchableOpacity>
    </>
  );
}
