import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {
    
    
    const [gif,setGif] = useState('');
    const[loading,setLoading] = useState('false');
    const [tag,setTag] = useState('Cricket');
    
    
    async function fetchData(){
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data} = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }

    useEffect( () => {
      fetchData();
    },[]);

    function clickHandler(){
      fetchData();
    }

    function changeHandler(event){
      setTag(event.target.value);
    }

  return (
    <div className='flex flex-col items-center gap-y-6 border-black bg-blue-500  w-1/2'>
        <p className='mt-8 text-2xl'>Random {tag} Gif</p>
        
       {
        loading ? (<Spinner/>) : ( <img width={250} src= {gif} />)
       }
        <input
         className='w-10/12 text-center' 
         onChange={changeHandler}
         value={tag}
         type='text'/>
        <button onClick={clickHandler}
        className=' w-10/12 px-2 rounded-lg bg-white opacity-75 mb-6'>Generate</button>
    </div>
  )
}

export default Tag