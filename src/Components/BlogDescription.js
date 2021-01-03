import React from 'react'
import '../App.css'
const BlogDescription = ({element}) => {
    var tag_list = element.tag_list;
  
    return (
       

        <div className="container blogd">
            
            <img className="image" src={element.social_image} alt="devimage"></img>
            <a href={element.canonical_url}><button className="btnC">Read</button></a>
            <span><i class="fas fa-heart text-danger"></i>{element.positive_reactions_count}<i class="fas fa-comment text-primary"></i>{element.comments_count}</span>
            <div>
                <h5>Tags:
                    {
                        tag_list.map((t,i)=>
                        {
                            return <span className="tagc badge bg-dark">#{t} </span>;
                        })
                    }
                </h5>
            </div>
           
        </div>
      )
}

export default BlogDescription