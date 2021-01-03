import React from 'react'
import {useState,useEffect} from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';
import GithubUser from './GithubUser';
const OpenSource = () => {
    const [user,setUser]=useState('');
    const [query,setQuery]=useState('');
    useEffect(()=>
    {
        const fetchItems=async()=>
        {
            const response=await axios(`https://api.github.com/users/${query}`);
            setUser(response.data);  
            console.log(response);
        }
        fetchItems();
    },[query])

    return (
        <div>
            <Searchbar getQuery={(q)=>setQuery(q)}/>
            <GithubUser user={user}/>
        </div>
    )
}

export default OpenSource
