import React, { createContext, useState } from "react";
import data from '../silabando.json'

type NivelType = { 
  nivel: number; 
  countHit: number; 
  indexWord: number;
  syllableHit: number;
  data: { 
    nivel1: { 
      palavra: string; 
      imgURL: string; 
      silabas: string[][]; 
      possibilidades: string[]; 
      drop: string[]; 
    }[]; 
    nivel2: { 
      palavra: string; 
      imgURL: string; 
      silabas: string[][]; 
      possibilidades: string[]; 
      drop: string[]; 
    }[]; 
    nivel3: never[]; 
  };
}

type PropsNivelContext = {
  state: NivelType;
  setState: React.Dispatch<React.SetStateAction<NivelType>>;
}

const DEFAULT_VALUE = {
  state: {
    nivel: 1,
    countHit: 0,
    indexWord: 0,
    syllableHit: 0,
    data: data,
  },
  setState: () => { }
}

const NivelContext = createContext<PropsNivelContext>(DEFAULT_VALUE)

const NivelContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return (
    <NivelContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </NivelContext.Provider>
  )
}

export { NivelContextProvider }
export default NivelContext