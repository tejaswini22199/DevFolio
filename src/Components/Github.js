import React from 'react'
const axios = require('axios');

const Github = (props) => {
    axios.get(`https://api.github.com/users/${props}`)
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
    return(
        <h1>Stats</h1>
    )
}

export default Github;