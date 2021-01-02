import React from 'react'
import BlogDescription from './BlogDescription'
const Displayblogs = ({blog}) => {
    return (
        <div>{
            blog.map((element,index) => {
               return <BlogDescription key={index} element={element}/>
            })
        }
        </div>
    )
}

export default Displayblogs
