import React from 'react';
import axios from 'axios';

import PageTitle from '../Common/PageTitle.js';
import CommentsForm from './CommentsForm.js';
import CommentsList from './CommentsList.js';

export default class CommentsPage extends React.Component {

  constructor() {

    super();

    this.state = {
      comments: []
    }

  }

  componentDidMount () {

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {

      this.setState({
        comments: response.data.slice(0, 20)
      });

    })
    .catch((error) => {

        console.log(error);

    });

  }

  saveComments(comment) {
    comment.id = this.state.comments.length;

    this.setState(prevState => ({
      comments: [...prevState.comments, comment]
    }));
  }

  render() {

    return (
      <div className="container">
        <PageTitle name="Comments" count="10" />
        <CommentsForm saveComments={this.saveComments.bind(this)} />
        <CommentsList comments={this.state.comments} />
      </div>
    );

  }

};