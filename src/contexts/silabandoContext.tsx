import React, { createContext, useState } from "react";

type NivelType = {
  nivel: number;
  count: number;
}

type PropsNivelContext = {
  state: NivelType;
  setState: React.Dispatch<React.SetStateAction<NivelType>>;
}

const DEFAULT_VALUE = {
  state:{
    nivel: 1,
    count: 0
  },
  setState: () => {}
}

const NivelContext = createContext<PropsNivelContext>(DEFAULT_VALUE)

const NivelContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return(
    <NivelContext.Provider
      value={{
        state,
        setState
      }}
    >
      { children }
    </NivelContext.Provider>
  )
}

export { NivelContextProvider }
export default NivelContext