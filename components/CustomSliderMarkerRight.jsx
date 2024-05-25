import React, { Component } from 'react';
import { TextInput, StyleSheet, Image, View, Button } from 'react-native';

export default function CustomSliderMarkerRight() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'source here' }}
        style={{ width: 50, height: 50 }}
      />
      <TextInput style={{ height: 50 }} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#232325',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
