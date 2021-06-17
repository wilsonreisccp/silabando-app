import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Welcome() {
  
  return (
    <View style={styles.container}>
      <Text>BemVindo</Text>
      <Text>ao</Text>
      <Text>Silabando</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});