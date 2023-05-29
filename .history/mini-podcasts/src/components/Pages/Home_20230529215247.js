import React, {useEffect} from 'react'
import {listPostcasts} from '../../services/apiAxios';

// utils
import {verifyTime} from '../../utils/verifyTime';

const KEY_POSTCASTS = 'postcasts';

const Home = ({isLoading}) => {

    useEffect(() => {
        isLoading(true);

        if (localStorage.getItem(KEY_POSTCASTS) === null || verifyTime(JSON.parse(localStorage.getItem(KEY_POSTCASTS)).timestamp)
          )
            listPostcasts();
        }, [isLoading])

  return (
    <div>Home</div>
  )
}

export default Home;