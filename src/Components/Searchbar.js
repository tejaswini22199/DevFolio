import React from 'react'
import {useState} from 'react'
const Searchbar = ({getQuery}) => {
   const [text,setText]=useState('');
   const onChange= (e)=>
   {
        setText(e);
        getQuery(e);
   }
    return (
        <div className="devbar">
           <form>
            <input className="form-control" type="text" placeholder="enter handle" value={text} onChange={(e)=>onChange(e.target.value)} id="inputbar">
            </input>
            
            </form>
        </div>
    )
}

export default Searchbar
