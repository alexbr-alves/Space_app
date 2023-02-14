import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

const Saturno = ({isSaturnoAnimating}) => {
  const [angle, setAngle] = useState(120);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSaturnoAnimating) {
        setAngle((angle) => angle + 2);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isSaturnoAnimating]);

  const centerX = 200;
  const centerY = 200;
  const radius = 200;

  const positionX = Math.cos(angle * Math.PI / 180) * radius + centerX;
  const positionY = Math.sin(angle * Math.PI / 180) * radius + centerY;

  return (

    <TouchableOpacity style={[styles.square, { left: positionX - 15 , top: positionY - 15, bottom: positionY - 15, right: positionX -15 }]} onPress={() => {navigation.navigate("PlanetView", {id: "Saturn"})}}/>

  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#dfd3a9',
    width: 30,
    height: 30,
    position: 'absolute',
    borderRadius: 15,
    top: 24,
    left: 300
  },
});

export default Saturno;
