import React from 'react'
import BlogDescription from './BlogDescription'
import Loader from './Loader'
import '../App.css'
const Displayblogs = ({blog}) => {
    var u,t,g;
    if(blog==='undefined' || blog.length===0)
    return <Loader/>;
    if( blog !== 'undefined' && blog.length>0){
    u=blog[0].user;
    t="https://twitter.com/"+u.twitter_username;
    g="https://github.com/"+u.github_username;
    console.log(t);
    }
    return (
        <div>{
            blog.map((element,index) => {
               return <BlogDescription key={index} element={element}/>
            })
        }
         <div className="nav-foot">
            
            <h2>{u.name}</h2>
            <img src={u.profile_image} alt="none"/>
            <div className="atags">
            <a href={t}><i class="fab fa-twitter"></i></a>
            <a href={g}><i class="fab fa-github"></i></a>
            <a href="u.website_url"><i class="fas fa-globe"></i></a>
            </div>
            </div>
         
        </div>
    )
}

export default Displayblogs