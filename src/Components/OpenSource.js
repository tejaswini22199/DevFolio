import React, {useState} from 'react'
import Github from './Github'
import axios from 'axios'

function cardify (user){
    return(
        <h1>${user}</h1>
    )
};

class OpenSource extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }


    

    handleSubmit(event) {
        var URL= `https://api.github.com/users/${this.state.value}`;
        axios.get(URL)
        .then(function (response) {
        // handle success
        
        var user = response.data;
        console.log(user);
        cardify(user);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        
        })
        .then(function () {
        // always executed

        });
        event.preventDefault();
    }    
    
    render(){
        return (
            <div>
                <h1>OpenSource</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                {/* <Github props={this.state.value}></Github> */}
            </div>
        );
    }
   
}


export default OpenSource
