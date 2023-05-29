import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Pages/Home';

function App() {
  return (
      <>
        <Header />
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<div>404</div> } />
        </Routes>
      </>
  );
}

export default App;
