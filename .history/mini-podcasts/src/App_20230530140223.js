import React from 'react';
import { Routes, Route } from "react-router-dom";

// components
import {Header, PodcastDetails, EpisodeDetails} from './components';

// pages
import {Home, ErrorPage} from './pages';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Home loading={loading} isLoading={setLoading}/>,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "/podcast/:podcastId",
    //   element: <PodcastDetails loading={loading} isLoading={loading}/>,
    //   children: [
    //     {
    //       path: "/podcast/:podcastId/episode/:episodeId",
    //       element: <EpisodeDetails loading={loading} isLoading={loading}/>,
    //     },
    //   ],
    // }
  ]);

  return (
    <>
    <Header loading={loading}/>
    <Routes>
      <Route path='/' element={<Home loading={loading} isLoading={setLoading}/>}/>
      <Route path='/podcast/:podcastId' element={<PodcastDetails loading={loading} isLoading={loading}/>}/>
      <Route path='/podcast/:podcastId/episode/:episodeId' element={<EpisodeDetails loading={loading} isLoading={loading}/>}/>
      <Route path="*" element={<div>404</div> } />
    </Routes>
  </>
  );
}

export default App;
