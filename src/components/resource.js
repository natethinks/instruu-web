import React from "react";
import axios from 'axios';

handleClick () {
  axios.get('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response))
}

class Resource extends React.Component {
    constructor() {
        super()
        console.log(this.props);
    }
    render() {
        return (
            <p>asdf</p>
        )
    }
}
