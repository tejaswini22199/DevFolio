import React from 'react'
import '../App.css'
const BlogDescription = ({element}) => {
    return (
        <div class="container blogd">
            <img className="image" src={element.social_image} alt="devimage"></img>
            <a href={element.canonical_url}><button className="btnC">Read</button></a>
            <span><i class="fas fa-heart text-danger"></i>{element.positive_reactions_count}<i class="fas fa-comment text-primary"></i>{element.comments_count}</span>
        </div>
    )
}

export default BlogDescription
