import React from "react";

import { NivelContextProvider } from './silabandoContext'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <NivelContextProvider>
      {children}
    </NivelContextProvider>
  )
}

export default GlobalContext;