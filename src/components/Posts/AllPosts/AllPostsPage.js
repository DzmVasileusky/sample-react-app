import React from 'react';
import axios from 'axios';

export default class AllPostsPage extends React.Component {

  constructor () {

    super();

    this.state = {
        posts: []
    };

  }

  componentDidMount () {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {

        this.setState({
            posts: response.data.slice(0, 20)
        });

    })
    .catch((error) => {

        console.log(error);

    });

  }

  render () {

    return (
      <h2>Hello, all posts</h2>
    );

  }

};