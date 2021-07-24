import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground,
  Button
} from "react-native";

import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { createDndContext } from "react-native-easy-dnd";

import NivelContext from "../contexts/silabandoContext";

const { Provider, Droppable, Draggable } = createDndContext();

export function Level1() {
  const { state, setState } = useContext(NivelContext);

  const navigation = useNavigation();

  const [wordOk , setWordOk ] = useState(0);
  
  const [palavra, setPalavra] = useState(state.indexWord);
  
  let sl = state.data.nivel1[palavra].silabas
  let possibilidades = state.data.nivel1[palavra].possibilidades

  const [silabas, setSilabas] = useState(sl);
  const [items  , setItems  ] = useState(possibilidades);
  const [next   , setNext   ] = useState(false)

  const image = { uri: state.data.nivel1[palavra].imgURL };
  
  function nextWord() {
    //let aux = state.data;
    //aux.nivel1.splice(palavra,1);

    //let pp = Math.floor(Math.random() * (state.data.nivel1.length));

    const pageKey = Math.floor(Math.random() * (1000000));

    if(state.countHit == 5){
      setState({
        ...state,
        countHit: 0,
        nivel: 1,
        syllableHit: 0,
        indexWord: Math.floor(Math.random() * (state.data.nivel1.length))
      })

      navigation.navigate({ name: 'Nivel Um', key: pageKey.toString() })
    }else{
      setState({
        ...state,
        countHit: state.countHit + 1,
        syllableHit: 0,
        indexWord: Math.floor(Math.random() * (state.data.nivel1.length))
      })

      navigation.navigate({ name: 'Nivel Um', key: pageKey.toString() })
    }
  }

  function syllableHit(){
    setState({
      ...state,
      syllableHit: state.syllableHit + 1
    })
  }

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
            <ImageBackground source={image} style={styles.image}>
              <Text style={styles.text}>
                <Icon
                  name='volume-up'
                  size={45}
                  type='font-awesome'
                  onPress={() => console.log('hello')}
                />
              </Text>
            </ImageBackground>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {silabas.map((s: any, index) => (
              <Droppable
                key={index}

                onEnter={() => { }}
                onLeave={() => { }}
                onDrop={({ payload }) => {
                  if (payload[0] === s[2]) {
                    sl[s[0]][1] = s[2]

                    fetch("")
                      .then(() => setSilabas(sl))
                      .then(() => { 
                        possibilidades[payload[1]] = "   ";
                        setItems([...possibilidades]);
                        setWordOk(wordOk + 1);
                       })
                      .then(() => {syllableHit();})
                      .then(() => {
                        if(state.syllableHit == silabas.length - 1){
                          console.log('Entrou', wordOk)
                          setNext(true)
                        }
                      })

                    /*
                    setSilabas(sl);
                    
                    possibilidades[payload[1]] = "   "
                    setItems([...possibilidades]);

                    setWordOk(wordOk + 1);
                    //syllableHit();

                    if(wordOk >= silabas.length){
                      console.log('Entrou', wordOk)
                      setNext(true)
                    }
                    */

                  }
                }}
              >
                {({ viewProps }) => {
                  return (
                    <Animated.View
                      {...viewProps}
                      style={[viewProps.style, styles.droppable]}
                    >
                      <Text style={styles.droppableText}>
                        {s[1]}
                      </Text>
                    </Animated.View>
                  );
                }}
              </Droppable>
            ))}
          </View>

          <View style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingVertical: 10
          }}>
            {items.map((item, index) => (
              <Draggable
                key={index}
                onDragStart={() => {}}
                onDragEnd  ={() => {}}
                payload    ={[item, index]}
              >
                {({ viewProps }) => {
                  return (
                    <Animated.View
                      {...viewProps}
                      style={[viewProps.style, styles.draggable]}
                    >
                      <Text style={styles.draggableText}>
                        {item}
                      </Text>
                    </Animated.View>
                  );
                }}
              </Draggable>
            ))}
          </View>
        </View>
        { 2 == 2 ?<View style={{ marginBottom: 80 }}>
                  <Button title='Próximo' onPress={nextWord}/>
                </View>
                : <View />
        }
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

  draggableText: {
    textAlign: 'center',
    color: "#333",
    fontWeight: "bold"
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

  droppableText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 25
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