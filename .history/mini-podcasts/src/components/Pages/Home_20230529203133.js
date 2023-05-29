import React, {useEffect} from 'react'
import {listPostcasts} from 'services/apiAxios';

const Home = () => {

    useEffect(() => {
            listPostcasts()
        }, [])

  return (
    <div>Home</div>
  )
}

export default Home;