import React from "react"
import {TouchableOpacity, Text} from 'react-native'


export default function Footer({exploreNavigation, styles}){
    return(
   
        <TouchableOpacity style={styles.button} onPress={exploreNavigation}>
            <Text style={styles.button_text}>Explore more</Text>
        </TouchableOpacity>
        
    )
}