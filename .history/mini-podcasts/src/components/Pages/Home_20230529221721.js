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

            if(postcasts){
                setPostcasts(listPostcasts);
                isLoading(false);
            }
            localStorage.setItem(
                KEY_POSTCASTS,
                JSON.stringify([
                    { AirportCode: 'MIA', AirportName: 'Miami International Airport', CityName: 'Miami', CountryName: 'United States' },
                ])
            );
        }
        }, [isLoading])

  return (
    <div>Home</div>
  )
}

export default Home;