import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Terra = ({isTerraAnimating}) => {
  const [angle, setAngle] = useState(110);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTerraAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [isTerraAnimating]);

  const centerX = 110;
  const centerY = 110;
  const radius = 110;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (
 <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Earth"})}}/>


  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#06c',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 56,
    left: 5
  },
});

export default Terra;
