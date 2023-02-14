import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Urano = ({isUranoAnimating}) => {
  const [angle, setAngle] = useState(240);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isUranoAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [isUranoAnimating]);

  const centerX = 230;
  const centerY = 230;
  const radius = 230;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Uranus"})}}/>
    );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#82b3d1',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 7,
    left: 300
  },
});

export default Urano;
