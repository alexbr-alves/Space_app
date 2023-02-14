import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Mercurio = ({ isMercurioAnimating }) => {
  const [angle, setAngle] = useState(50);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMercurioAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [isMercurioAnimating]);

  const centerX = 50;
  const centerY = 50;
  const radius = 50;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Mercury"})}}/>

  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#b6bac5',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 10,
    left: 10
  },
});

export default Mercurio;
