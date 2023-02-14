import React, { useState } from 'react';
import { PinchGestureHandler, State  } from 'react-native-gesture-handler';
import { View, Animated, ImageBackground, TouchableOpacity} from 'react-native';
import Play from 'react-native-vector-icons/Ionicons'




import Mercurio from '../../components/planetasAnimation/Mercurio'
import Terra from '../../components/planetasAnimation/Terra.js';
import Venus from '../../components/planetasAnimation/Venus.js';
import Marte from '../../components/planetasAnimation/Marte';
import Jupiter from '../../components/planetasAnimation/Jupiter';
import Saturno from '../../components/planetasAnimation/Saturno';
import Urano from '../../components/planetasAnimation/Urano.js';
import Netuno from '../../components/planetasAnimation/Netuno';


import styles from './styles.js';


import fundo from '../../../assets/bg.jpg'


export default function Home() { 
  const [scale] = useState(new Animated.Value(0.77));
  const [isAnimating, setIsAnimating] = useState(false);

  

 
    
  return (
    <View  style={styles.container}>
      
      <PinchGestureHandler
        onGestureEvent={Animated.event(
          [{ nativeEvent: { scale: scale } }],
          {useNativeDriver: true} 
        )}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.oldState === State.ACTIVE) {
            scale.setValue(Math.max(0.77, Math.min(nativeEvent.scale, 2.5)));
          } 
        
        }}
      >
      
        <Animated.View style={{ transform: [{ scale: scale }] }}>
          <View style={styles.Netuno_circle}>
            <Netuno isNetunoAnimating={isAnimating} />
            <View style={styles.Urano_Circle}>
              <Urano isUranoAnimating={isAnimating} />
              <View style={styles.Saturno_circle}>
                <Saturno isSaturnoAnimating={isAnimating} />
                <View style={styles.Jupiter_circle}>
                  <Jupiter isJupiterAnimating={isAnimating}/>
                  <View style={styles.Marte_circle}>
                    <Marte isMarteAnimating={isAnimating} />
                    <View style={styles.Terra_circle}>
                      <Terra isTerraAnimating={isAnimating} />
                      <View style={styles.Venus_circle}>
                        <Venus isVenusAnimating={isAnimating} />
                        <View style={styles.Mercurio_circle}>
                          <Mercurio isMercurioAnimating={isAnimating} /> 
                            <View style={styles.Sol}></View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
       
      </PinchGestureHandler>
      <TouchableOpacity style={styles.iconePlay} onPress={() => {setIsAnimating(!isAnimating)}}>
        <Play name={isAnimating ? "pause-circle": "ios-play-sharp"} size={100} color={'white'}  />

      </TouchableOpacity>
    </View>
  );
}
