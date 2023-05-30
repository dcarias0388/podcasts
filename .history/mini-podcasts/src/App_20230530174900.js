import React from 'react';
import { Routes, Route } from "react-router-dom";

// components
import {Header, PodcastDetails, EpisodeDetails} from './components';

// pages
import {Home, ErrorPage} from './pages';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
    <Header loading={loading}/>
    <Routes>
      <Route path='/' element={<Home loading={loading} isLoading={setLoading}/>}/>
      <Route path='/podcast/:podcastId' element={<PodcastDetails loading={loading} isLoading={loading}/>}>
        <Route path='episode/:episodeId' element={<EpisodeDetails loading={loading} isLoading={loading}/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/> } />
    </Routes>
  </>
  );
}

export default App;
