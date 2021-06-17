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
      width: 40,
      margin: 5,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
    },
  
    texto: {
      textAlign: 'center',
      marginVertical: 5,
      marginBottom: 5,
      fontSize: 20
    },
  });