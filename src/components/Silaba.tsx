import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Silaba {
  texto:string;
}

export function Silaba(props: Silaba) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{ props.texto }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 50,
      padding: 5,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
    },
  
    texto: {
      textAlign: 'center',
      paddingVertical: 5,
      paddingBottom: 5,
      fontSize: 20
    },
  });