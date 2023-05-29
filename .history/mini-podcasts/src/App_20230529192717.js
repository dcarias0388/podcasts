import React from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Pages/Home';

function App() {
  return (
      <>
        <Header />
        <Route
          path="/"
          exact
          render={() => ( <Home /> )}
        />
      </>
  );
}

export default App;
