import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// components
import {Header, PodcastDetails, EpisodeDetails} from './components';

// pages
import {Home, ErrorPage} from './pages';

function App() {
  const [loading, setLoading] = React.useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home loading={loading} isLoading={setLoading}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/podcast/:podcastId",
      element: <PodcastDetails loading={loading} isLoading={this.loading}/>,
      children: [
        {
          path: "/podcast/:podcastId/episode/:episodeId",
          element: <EpisodeDetails />,
        },
      ],
    }
  ]);

  return (
      <>
        <Header loading={loading}/>
        <RouterProvider router={router} />
      </>
  );
}

export default App;
