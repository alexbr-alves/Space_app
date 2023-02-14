import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Netuno = ({isNetunoAnimating}) => {
  const [angle, setAngle] = useState(330);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isNetunoAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isNetunoAnimating]);

  const centerX = 260;
  const centerY = 260;
  const radius = 260;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Neptune"})}}/>

  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#77c2ec',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 0,
    left: 200
  },
});

export default Netuno;
