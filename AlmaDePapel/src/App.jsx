import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer titulo="ES ALMA DE PAPEL" />} />
        <Route path="/category/:id" element={<ItemListContainer titulo="ES ALMA DE PAPEL" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} /> {}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
