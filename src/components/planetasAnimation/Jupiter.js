import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';


const Jupiter = ({isJupiterAnimating}) => {
  const [angle, setAngle] = useState(45);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isJupiterAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isJupiterAnimating]);


  const centerX = 170;
  const centerY = 170;
  const radius = 170;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]}onPress={() => {navigation.navigate("PlanetView", {id: "Jupiter"})}} />

  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#e0ae6f',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 67,
    left: 24
  },
});

export default Jupiter;
