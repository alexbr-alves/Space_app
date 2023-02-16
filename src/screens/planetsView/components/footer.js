import React from "react"
import {TouchableOpacity, Text} from 'react-native'


export default function Footer({planetData, styles, footerNavigation}){
    return(
        <>
        {
            planetData.view3d == true?
            <TouchableOpacity style={styles.button} onPress={footerNavigation}>
            <Text style={styles.button_title} >3D VIEW</Text>
        </TouchableOpacity>
        : 
        null
           }
        </>
    )
}