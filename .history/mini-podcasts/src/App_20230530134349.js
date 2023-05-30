import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    {
      path: "/podcast/:podcastId",
      element: <PodcastDetails loading={loading} isLoading={loading}/>,
      children: [
        {
          path: "/podcast/:podcastId/episode/:episodeId",
          element: <EpisodeDetails loading={loading} isLoading={loading}/>,
        },
      ],
    }
  ]);

  return (
    <div>
      <Header loading={loading}/>
      <RouterProvider router={router}/>
    </div>  
  );
}

export default App;
