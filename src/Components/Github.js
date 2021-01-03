import React from 'react'
import BlogDescription from './BlogDescription'
import Loader from './Loader'
import '../App.css'
const Github = ({user}) => {
    var u,t,g;
    // if(user==='undefined' || user.length===0)
    // return <Loader/>;
    // if( user !== 'undefined' && user.length>0){
    // u=user.name;
    // t="https://twitter.com/"+u.twitter_username;
    // g="https://github.com/"+u.github_username;
    // console.log(u);
    // }
    return (
        <div>
        <div className="nav-foot">
            
            <h2>{user.name}</h2>
            {/* <img src={u.profile_image} alt="none"/>
            <div className="atags">
            <a href={t}><i class="fab fa-twitter"></i></a>
            <a href={g}><i class="fab fa-github"></i></a>
            <a href="u.website_url"><i class="fas fa-globe"></i></a>
            </div> */}
            </div>
         
        </div>
    )
}

export default Github