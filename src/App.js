import React from 'react';
import logo from './logo.svg';
import './App.css';
import OmdbSearch from './omdb/omdb-search'

function App() {
  return (
    <div className="App">
        <h1>Movie API!</h1>
        <OmdbSearch />
    </div>
  );
}

export default App;
