import React, {useEffect} from 'react'
import {listPostcasts} from '../../services/apiAxios';

const Home = ({isLodging}) => {

    useEffect(() => {
            isLodging(true);
            listPostcasts();
        }, [isLodging])

  return (
    <div>Home</div>
  )
}

export default Home;