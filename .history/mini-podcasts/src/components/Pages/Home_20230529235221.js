import React, {useEffect, useState} from 'react'

// services api
import { listPostcasts } from '../../services/apiAxios';

// utils
import {verifyTime} from '../../utils/verifyTime';

// components
import GroupsPostcasts from '../GroupPostcasts';
import FilterPostcasts from '../FilterPostcasts';

const Home = ({loading,isLoading}) => {
    const [postcasts, setPostcasts] = useState([]); // states store postacasts
    const [filterPostcasts, setFilterPostcasts] = useState([]); // states store filter postcasts
    const [filter, setFilter] = useState(''); // states store filter

    useEffect(() => {
        console.log("ENTRO", localStorage.getItem('postcasts'));
        // starting page load
        isLoading(true);

        // checking if there are postcasts stored in the local storage and if it is, if it is not expired
        if (localStorage.getItem('postcasts') || verifyTime(JSON.parse(localStorage.getItem('postcasts')).timestamp)){
            listPostcasts().then((listPost) => {
                if(listPost) {
                    // update states postcasts
                    setPostcasts(listPost);
                    setFilterPostcasts(listPost);
    
                    // object postcasts to store in local storage and update the timestamp
                    const objPost = {value: listPost, timestamp: new Date().getTime()}; 
    
                    localStorage.setItem('postcasts', JSON.stringify(objPost));
    
                    // loading stops
                    isLoading(false);
                }else{
                    console.log('No postcast to show');
                    // loading stops
                    isLoading(false);
                    return;
                }  
            });         
        } else{
            // the stored postcasts are obtained and the status is updated
            const postStorage = JSON.parse(localStorage.getItem('postcasts')).value;
            setPostcasts(postStorage);
            setFilterPostcasts(postStorage)

            // loading stops
            isLoading(false);
        }
        }, []);

    const onChange = (e) => {
      const value = e.currentTarget.value;
      // Filter our postcasts for tittle and author
      const filterPosts = postcasts?.filter((item) => item.author.toLowerCase().search(value.toLowerCase()) > -1 || item.title.toLowerCase().search(value.toLowerCase()) > -1);
      setFilter(value);
      setFilterPostcasts(filterPosts);
    };    

  return (
    <>
    {!loading && (
        <>
            <FilterPostcasts value={filter} onChange={onChange}/>
            <GroupsPostcasts postcasts={filterPostcasts}/>
        </>
        )}
    </>
  )
}

export default Home;