import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Inicio da importção das telas

import Pokedex from "./scenes/pokedex";
import Pokemon from "./scenes/pokemon";

// Final das importações das telas

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:pokemonId" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
