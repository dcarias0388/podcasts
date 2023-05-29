import React, {useEffect} from 'react'
import {listPostcasts} from '../../services/apiAxios';

const Home = ({isLoading}) => {

    useEffect(() => {
        isLoading(true);
            listPostcasts();
        }, [isLoading])

  return (
    <div>Home</div>
  )
}

export default Home;