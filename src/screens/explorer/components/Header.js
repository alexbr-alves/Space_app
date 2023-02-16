import React from 'react';
import {
  Text,
  View
  } from 'react-native';


export default function Header({ styles }) {
  return (
      <View style={styles.head}>
        <Text style={styles.title}>SOLAR Explorer</Text>
      </View>
  );
}
