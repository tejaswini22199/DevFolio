import axios from 'axios';
import React from 'react'
import {useState} from 'react'
const Searchbar_Github = ({getQuery}) => {
   const [text,setText]=useState('');
   const onChange= (e)=>
   {
        setText(e);
        getQuery(e);
        // console.log(e);
   }
   const search =async (e) =>{
    const response=await axios(`https://api.github.com/users/${e.target.value}`); 
    //     setGithub(response.data); 
        console.log(response.data);
   }
    return (
        <div className="githubbar">
           <form onSubmit={search}>
            <input className="form-control" type="text" placeholder="enter github handle" value={text} onChange={(e)=>onChange(e.target.value)} id="inputbar">
            </input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Searchbar_Github