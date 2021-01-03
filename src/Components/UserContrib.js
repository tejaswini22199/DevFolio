import React from 'react'
import Searchbar from './Searchbar'
import {useState,useEffect} from 'react';
import axios from 'axios';
const UserContrib = ({user}) => {
    const [repo,setRepo]= useState([]);
    useEffect(()=>
    {
        const fetchItems=async()=>
        {
            const response=await axios(`https://api.github.com/repos/${user}/${repo}/pulls`);
            console.log(response);
           
            
        }
        fetchItems();
    },[repo,user])
   
    return (
        <div>
             <Searchbar getQuery={(q)=>setRepo(q)}/>
        </div>
    )
}

export default UserContrib
