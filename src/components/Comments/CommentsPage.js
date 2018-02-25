import React from 'react';
import axios from 'axios';

import PageTitle from '../Common/PageTitle.js';
import CommentsForm from './CommentsForm.js';
import CommentsList from './CommentsList.js';

export default class CommentsPage extends React.Component {

  componentDidMount () {

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {

      this.props.onFetchComments(response.data.slice(0, 20));

    })
    .catch((error) => {

        console.log(error);

    });

  }

  saveComments(comment) {

    this.props.onAddComment(comment);

  }

  render() {

    return (
      <div className="container">
        <PageTitle name="Comments" count="10" />
        <CommentsForm saveComments={this.saveComments.bind(this)} />
        <CommentsList comments={this.props.comments} />
      </div>
    );

  }

};