import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;

// Fiz só a cloangem não elaborei o exercício. -> Ver gabarito: https://app.betrybe.com/course/front-end/react/react-router/solutions#exercicios-de-fixacao