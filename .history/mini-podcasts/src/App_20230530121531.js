import React from 'react';
import { Route, Routes } from "react-router-dom";

// components
import {Header, PodcastDetails} from './components';

// pages
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = React.useState(false);

  console.log(loading);

  return (
      <>
        <Header loading={loading}/>
        <Routes>
        <Route index element={<Home loading={loading} isLoading={setLoading}/>}/>
        <Route path="/podcast/:podcastId" element={<PodcastDetails loading={loading} isLoading={this.loading}/>}
        <Route path="*" element={<div>404</div> } />
        </Routes>
      </>
  );
}

export default App;
