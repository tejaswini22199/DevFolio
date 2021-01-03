import React from 'react'
import Loader from './Loader'
const GithubUser = ({user}) => {
    if(user === 'undefined'){
    console.log("lol");
    return <Loader/>;
    }
    var hire=user.hireable;
    return (
        <div className="gituser">
            <h3>{user.name}</h3>
            <img className="imageG" src={user.avatar_url} alt="NA"></img>
            <span className="bio">BIO:{user.bio}</span>

            <ul className="followers">
                <li>Followers:{user.followers}</li>
                <li>Following:{user.following}</li>
            </ul>
          
            <span><i class="fas fa-building"></i>{user.company}</span>
            <a href={user.url}><button className="btnC">ViewOnGithub</button></a>
            <p>{hire?<h1>Looking for Hiring Opportunities</h1>:<p></p>}</p>
        </div>
    )
}

export default GithubUser
