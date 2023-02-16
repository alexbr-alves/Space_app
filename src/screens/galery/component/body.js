import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

export default function Body({data, styles, navigationPlanet}){
    return(
        <TouchableOpacity style={styles.card} onPress={navigationPlanet}>
      <Image style={styles.card_image} source={data.image} />
      <Text style={styles.card_text}>{data.planet}</Text>
    </TouchableOpacity>
    )
}