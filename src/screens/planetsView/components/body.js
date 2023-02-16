import React from 'react';
import { 
    View, 
    Text, 
    Image 
} from 'react-native';

export default function Body({planetData, styles}){
    return(
        <>
        <Text style={styles.head_title}>{planetData.planet}</Text>
            <Image style={styles.head_image} source={planetData.image}/>


            <View style={styles.description}>
                <Text style={styles.description_text}>{planetData.description}</Text>
            </View>
            
            <View style={styles.body}>
                {planetData.circumference!= null?
                <>
                <View>
                <View>
                    <Text style={styles.body_redus}>REDUS</Text>
                    <Text style={styles.body_redusValue}>{planetData.circumference} KM</Text>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.body_moons}>MOONS</Text>
                    <Text style={styles.body_moonsValue}>{planetData.moons}</Text>
                </View>

                </View>

                <View style={{marginRight: 20}}>
                <View>
                    <Text style={styles.body_distance}>DISTANCE FROM SUN</Text>
                    <Text style={styles.body_distanceValue}>{planetData.distanceFromSun} KM</Text>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.body_orbital}>ORBITAL PERIOD</Text>
                    <Text style={styles.body_orbitalValue}>{planetData.orbitalPeriod} DAYS</Text>
                </View>
                
                </View>
                </>
                :
              
                    <Text style={styles.noSistemaSolar_text}>{planetData.noSistemaSolar}</Text>
             
                }

            </View>
            </>
    )
}