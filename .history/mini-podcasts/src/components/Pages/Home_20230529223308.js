import React, {useEffect} from 'react'

// services api
import {listPostcasts} from '../../services/apiAxios';

// utils
import {verifyTime} from '../../utils/verifyTime';

const KEY_POSTCASTS = 'postcasts';

const Home = ({isLoading}) => {
    const [postcasts, setPostcasts] = useState([]); // states store postacasts

    useEffect(() => {
        // starting page load
        isLoading(true);

        // checking if there are postcasts stored in the local storage and if it is, if it is not expired
        if (!localStorage.getItem(KEY_POSTCASTS) || verifyTime(JSON.parse(localStorage.getItem(KEY_POSTCASTS)).timestamp)){
            const listPostcasts = listPostcasts();

            if(postcasts) {
                // update states postcasts
                setPostcasts(listPostcasts);

                // object postcasts to store in local storage and update the timestamp
                const objPost = {value: listPostcasts, timestamp: new Date().getTime()}; 

                localStorage.setItem(KEY_POSTCASTS, JSON.stringify(objPost));

                // loading stops
                isLoading(false);
            }else{
                console.log('No postcast to show');
                // loading stops
                isLoading(false);
                return;
            }           
        }
        }, [])

  return (
    <div>Home</div>
  )
}

export default Home;