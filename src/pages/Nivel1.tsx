import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Silaba } from '../components/Silaba'

export function Nivel1() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>SILABANDO APP</Text>

      <View style={{padding: 5,
                    alignItems: 'center',
                    marginBottom: 10,
                    borderBottomWidth: 2,
                    borderTopWidth: 2,}}>
        <Image
          source={require('../images/banana.png')}
          style={styles.palavraImg}
        ></Image>
      </View>
      

      <View style={{flex: 1,       
                    justifyContent: 'space-evenly', 
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: 6,
                    borderWidth: 2,
                    borderColor: "#20232a",
                    borderRadius: 6,
                    maxHeight: 150
                    //paddingBottom: 'auto'
                   }
                  }>
        <View style={ styles.dropzones }></View>
        <View style={ styles.dropzones }></View>
        <View style={ styles.dropzones }></View>
      </View>
      
      <View style={{ justifyContent: 'center', flexDirection: 'row', alignContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
        <Silaba texto='IN'></Silaba>
        <Silaba texto='BA'></Silaba>
        <Silaba texto='NA'></Silaba>
        <Silaba texto='NA'></Silaba>
        <Silaba texto='JA'></Silaba>
        <Silaba texto='LE'></Silaba>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#ffffff',   
  },

  texto: {
    textAlign: 'center',
    marginVertical: 8,
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30
  },

  palavraImg: {
    width: '100%',
    maxWidth: 410,
    height: 200,
    
    
  },

  dropzones: {
    width: 40, 
    height: 40, 
    borderBottomWidth: 4, 
    margin: 5
  }

});