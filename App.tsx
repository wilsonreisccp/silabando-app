import React from 'react'

import { Routes } from './src/router/index'
import GlobalContext from './src/contexts/index'

export default function App() {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
}