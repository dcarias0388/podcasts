import React, {useEffect, useState} from 'react'

// services api
import { listPodcasts } from 'services/apiAxios';

// utils
import {verifyTime} from 'utils/helpers';

// components
import {GroupPodcasts, FilterPodcasts} from 'components/molecules';

const Home = ({loading,isLoading}) => {
    const [podcasts, setPodcasts] = useState([]); // states store podcasts
    const [filterPodcasts, setFilterPodcasts] = useState([]); // states store filter podcasts
    const [filter, setFilter] = useState(''); // states store filter

    useEffect(() => {
        // starting page load
        isLoading(true);

        // checking if there are postcasts stored in the local storage and if it is, if it is not expired
        if (!localStorage.getItem('podcasts') || verifyTime(JSON.parse(localStorage.getItem('podcasts')).timestamp)){
            listPodcasts().then((listPod) => {
                if(listPod) {
                    // update states postcasts
                    setPodcasts(listPod);
                    setFilterPodcasts(listPod);
    
                    // object postcasts to store in local storage and update the timestamp
                    const objPost = {value: listPod, timestamp: new Date().getTime()}; 
    
                    localStorage.setItem('podcasts', JSON.stringify(objPost));
    
                    // loading stops
                    isLoading(false);
                }else{
                    console.log('No podcasts to show');
                    // loading stops
                    isLoading(false);
                    return;
                }  
            });         
        } else{
            // the stored postcasts are obtained and the status is updated
            const podStorage = JSON.parse(localStorage.getItem('podcasts')).value;
            setPodcasts(podStorage);
            setFilterPodcasts(podStorage)

            // loading stops
            isLoading(false);
        }
        }, [isLoading]);


    // filter data podcasts    
    const onChange = (e) => {
      const value = e.currentTarget.value;
      // Filter our postcasts for tittle and author
      const filterPosts = podcasts?.filter((item) => item.author.toLowerCase().search(value.toLowerCase()) > -1 || item.title.toLowerCase().search(value.toLowerCase()) > -1);
      setFilter(value);
      setFilterPodcasts(filterPosts);
    };    

  return (
    <>
    {!loading ? (
        <>
            <FilterPodcasts value={filter} podcasts={filterPodcasts} onChange={onChange}/>
            <GroupPodcasts podcasts={filterPodcasts}/>
        </>
        ): (<h2>Loading...</h2>)}
    </>
  )
}

export default Home;