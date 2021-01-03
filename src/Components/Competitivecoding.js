import React from 'react';
import {useState,useEffect} from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';
import Codeforces from './Codeforces';
import CodeBlogs from './CodeBlogs';
const Competitivecoding = () => {
    const [user,setUser]=useState([]);
    const [query,setQuery]=useState('');
    const [blog,setBlog]=useState([]);
    useEffect(()=>
    {
        const fetchItems=async()=>
        {
            const response=await axios(`https://codeforces.com/api/user.info?handles=${query}`);
            setUser(response.data.result);
            
        }
        fetchItems();
    },[query])
    useEffect(()=>
    {
        const fetchItems=async()=>
        {
            const response=await axios(`https://codeforces.com/api/user.blogEntries?handle=${query}`);
            console.log(response.data);
            setBlog(response.data);
        }
        fetchItems();
    },[query])

    return (
        <div>
            <Searchbar getQuery={(q)=>setQuery(q)}></Searchbar>
            <Codeforces user={user}></Codeforces>
            <CodeBlogs blog={blog}></CodeBlogs>
        </div>
    )
}

export default Competitivecoding
