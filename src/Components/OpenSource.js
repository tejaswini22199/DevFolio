import React from 'react'; 
import axios from 'axios'; 
import {useState,useEffect} from 'react'; 
import Github from './Github'; 
import Searchbar_Github from './SearchGithub'; 
const GithubGet = () => { 
    // const [github,setGithub]=useState([]); 
    const [username,setUsername]=useState(''); 
    // const fetchItems=async()=> { 
    //     const response=await axios(`https://api.github.com/users/${username}`); 
    //     setGithub(response.data); 
    //     console.log(response.data); } 
    // useEffect(() => { 
    // fetchItems(); },[username]); 
    // fetchItems();
    return ( <div> 
        <Searchbar_Github getQuery={(q)=>setUsername(q)}/> 
        {/* <Github username={fetchItems}/> */}
         </div> ) 
        }
    export default GithubGet