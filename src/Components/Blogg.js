import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Displayblogs from './Displayblogs';
const Blogg = () => {
    const [blog,setBlog]=useState([]);
    useEffect(() => {
       const fetchItems=async()=>
       {
           const response=await axios('https://dev.to/api/articles?username=powercoder');
           setBlog(response.data);
           console.log(response.data);
       }
     
      fetchItems();
    },[]);
    return (
        
        <div>
            <Displayblogs blog={blog}/>
        </div>
    )
}

export default Blogg
