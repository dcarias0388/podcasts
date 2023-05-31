import React from 'react';
import { Routes, Route } from "react-router-dom";

// molecules
import {Header, EpisodeDetails} from 'components/molecules';

// pages
import {Home, ErrorPage, Podcast} from 'pages';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
    <Header loading={loading}/>
    <Routes>
      <Route path='/' element={<Home loading={loading} isLoading={setLoading}/>}/>
      <Route path='/podcast/:podcastId' element={<Podcast loading={loading} isLoading={setLoading}/>}>
        <Route path='episode/:episodeId' element={<EpisodeDetails loading={loading} isLoading={setLoading}/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/> } />
    </Routes>
  </>
  );
}

export default App;
