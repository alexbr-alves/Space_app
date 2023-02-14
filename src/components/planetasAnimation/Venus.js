import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Venus = ({isVenusAnimating}) => {
  const [angle, setAngle] = useState(80);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVenusAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 8);

    return () => clearInterval(interval);
  }, [isVenusAnimating]);

  const centerX = 80;
  const centerY = 80;
  const radius = 80;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Venus"})}}/>

  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#bf8639',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 118,
    left: 5
  },
});

export default Venus;
