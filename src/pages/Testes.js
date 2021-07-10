import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground
} from "react-native";

import { Icon } from 'react-native-elements'

import { createDndContext } from "react-native-easy-dnd";
import data from '../silabando.json'

const palavra = 6

const image = { uri: data.nivel1[palavra].imgURL };
const { Provider, Droppable, Draggable } = createDndContext();

export function Testes() {
  let sl = data.nivel1[palavra].silabas
  let possibilidades = data.nivel1[palavra].possibilidades

  const [silabas, setSilabas] = useState(sl);
  const [items, setItems] = useState(possibilidades);

  return (
    <>
      <Provider>
        <View style={styles.container}>
          <Text style={styles.texto}>SILABANDO APP</Text>
          <View style={{
            padding: 5,
            alignItems: 'center',
            marginBottom: 10,
            borderBottomWidth: 2,
            borderTopWidth: 2,
          }}>
            <ImageBackground source={ image } style={styles.image}>
              <Text style={styles.text}>
                <Icon 
                  name='volume-up' 
                  size= {45} 
                  type='font-awesome'
                  onPress={() => console.log('hello')}
                />
              </Text>
            </ImageBackground>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {silabas.map((s, index) => (
              <Droppable
                key={index}

                onEnter={() => {
                  console.log("Entrou como: ")
                }}
                onLeave={() => { }}
                onDrop={({ payload }) => {
                  console.log(payload)
                  if (payload[0] == s[2]) {
                    sl[s[0]][1] = s[2]
                    setSilabas(sl)
                    possibilidades[payload[1]] = "    "
                    setItems([...possibilidades])
                  } else {
                    console.log(payload + " ---- " + s[2])
                  }
                }}
              >
                {({ active, viewProps }) => {
                  return (
                    <Animated.View
                      {...viewProps}
                      style={[viewProps.style, styles.droppable]}
                    >
                      <Text style={{ color: "#333", fontWeight: "bold", fontSize: 25 }}>
                        {s[1]}
                      </Text>
                    </Animated.View>
                  );
                }}
              </Droppable>
            ))}
          </View>

          <View style={{ paddingTop: 10, 
                         flex: 1, 
                         flexDirection: 'row',
                         flexWrap:'wrap',
                         justifyContent: 'center', 
                         paddingVertical: 10 
                      }}>
            {items.map((item, index) => (
              <Draggable
                key={index}
                onDragStart={() => {
                }}
                onDragEnd={() => {
                }}
                payload={[item, index]}
              >
                {({ viewProps }) => {
                  return (
                    <Animated.View
                      {...viewProps}
                      style={[viewProps.style, styles.draggable]}
                    >
                      <Text style={{ textAlign: 'center', color: "#333", fontWeight: "bold" }}>
                        {item}
                      </Text>
                    </Animated.View>
                  );
                }}
              </Draggable>
            ))}
          </View>

        </View>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trashIconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  draggable: {
    minWidth: 35,
    height: 35,
    
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ababab",
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "white"
  },

  droppable: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    minWidth: 50,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ababab",
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "white"
  },

  texto: {
    textAlign: 'center',
    marginVertical: 8,
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 30
  },

  palavraImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 400,
    maxWidth: 410,
    height: 200,

  },

  image: {
    width: 410,
    height: 200,
    resizeMode: "stretch",
    justifyContent: "flex-end"
  },

  text: {
    color: "white",
    fontSize: 42,
    paddingLeft: "10%",
    fontWeight: "bold",
    textAlign: "left",
  }

});
