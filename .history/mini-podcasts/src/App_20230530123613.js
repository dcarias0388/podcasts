import React from 'react';
import { RouterProvider } from "react-router-dom";

// components
import {Header, PodcastDetails} from './components';

// pages
import Home from './pages/Home';

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
      errorElement: <ErrorPage />
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
