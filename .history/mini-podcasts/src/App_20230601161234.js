import React from 'react';
import { Routes, Route } from "react-router-dom";

// molecules
import {Header, EpisodeDetails, SummaryEpisode} from 'components/molecules';

// organisms
import {PodcastDetails} from 'components/organisms';

// pages
import {Home, ErrorPage} from 'pages';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
    <Header loading={loading}/>
    <Routes>
      <Route index path='/' element={<Home loading={loading} isLoading={setLoading}/>}/>
      <Route path='/' element={<PodcastDetails loading={loading} isLoading={setLoading}/>}>
        <Route path='podcast/:podcastId' element={<SummaryEpisode/>}/>
        <Route path='podcast/:podcastId/episode/:episodeId' element={<EpisodeDetails/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/> } />
    </Routes>
  </>
  );
}

export default App;
