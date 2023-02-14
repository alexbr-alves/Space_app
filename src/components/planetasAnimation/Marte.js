import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Marte = ({isMarteAnimating}) => {
  const [angle, setAngle] = useState(300);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMarteAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isMarteAnimating]);

  const centerX = 140;
  const centerY = 140;
  const radius = 140;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Mars"})}}/>

  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#aa4200',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 0,
    left: 75
  },
});

export default Marte;
