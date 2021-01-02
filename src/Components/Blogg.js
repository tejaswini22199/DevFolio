import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Displayblogs from './Displayblogs';
import Searchbar from './Searchbar';
const Blogg = () => {
    const [blog,setBlog]=useState([]);
    const [query,setQuery]=useState('');
    useEffect(() => {
       const fetchItems=async()=>
       {
           const response=await axios(`https://dev.to/api/articles?username=${query}`);
           setBlog(response.data);
           console.log(response.data);
       }
        
      fetchItems();
    },[query]);
    return (
        <div>
            <Searchbar getQuery={(q)=>setQuery(q)}/>
            <Displayblogs blog={blog}/>
        </div>
    )
}

export default Blogg
