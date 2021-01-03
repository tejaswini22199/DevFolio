import React from 'react';
import Loader from './Loader'
import '../App.css';
import Codeblogs from './CodeBlogs';
const Codeforces = ({user}) => {
    if(user==='undefined' || user.length===0)
    return <Loader/>;
    const onClick=(e)=>
    {
        return <Codeblogs></Codeblogs>
    }
    return (
        
        <div className="code_profile">
            <img src={user[0].avatar} alt="NA"/>
            
            <span><strong>User Rank:</strong>{user[0].rank}</span>
            <span><strong>User contribution:</strong>{user[0].contribution}</span>
            <span><strong>Max Rating:</strong>{user[0].maxRating}</span>
            <span><strong>Max Rank:</strong>{user[0].maxRank}</span>
            <span><strong>Rating:</strong>{user[0].rating}</span>
            
            <span><i class="fas fa-user-friends"></i>{user[0].friendOfCount}</span>
            <button className="btnC" onClick={()=>onClick()}>ViewBlogs</button>
            
        </div>
    )
}

export default Codeforces
