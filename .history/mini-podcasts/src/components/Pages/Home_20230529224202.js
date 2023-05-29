import React, {useEffect, useState} from 'react'

// services api
import { listPostcasts } from '../../services/apiAxios';

// utils
import {verifyTime} from '../../utils/verifyTime';

const KEY_POSTCASTS = 'postcasts';

const Home = ({loading,isLoading}) => {
    const [postcasts, setPostcasts] = useState([]); // states store postacasts

    useEffect(() => {
        // starting page load
        isLoading(true);

        // checking if there are postcasts stored in the local storage and if it is, if it is not expired
        if (!localStorage.getItem(KEY_POSTCASTS) || verifyTime(JSON.parse(localStorage.getItem(KEY_POSTCASTS)).timestamp)){
            const listPost = listPostcasts();

            if(postcasts) {
                // update states postcasts
                setPostcasts(listPost);

                // object postcasts to store in local storage and update the timestamp
                const objPost = {value: listPost, timestamp: new Date().getTime()}; 

                localStorage.setItem(KEY_POSTCASTS, JSON.stringify(objPost));

                // loading stops
                isLoading(false);
            }else{
                console.log('No postcast to show');
                // loading stops
                isLoading(false);
                return;
            }           
        } else{
            // the stored postcasts are obtained and the status is updated
            const postStorage = JSON.parse(localStorage.getItem(KEY_POSTCASTS)).value;
            setPostcasts(postStorage);

            // loading stops
            isLoading(false);
        }
        }, [])

  return (
    {!loading && (
       <GridContainer>
        {postcasts.map(post => (
          <GridCard key={post.id}></GridCard>
        )}
       </GridContainer>
    )}
  )
}

export default Home;