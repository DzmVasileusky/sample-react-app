import React from 'react';
import axios from 'axios';

import PageTitle from '../Common/PageTitle.js';
import CommentsForm from '../Comments/CommentsForm.js';
import CommentsList from '../Comments/CommentsList.js';

export default class CommentsPage extends React.Component {

  constructor() {

    super();

    this.state = {
      comments: [
        {
          id: 0,
          name: 'Freddy',
          date: '10.12.2017',
          body: 'Hello my dear friend!'
        },
        {
          id: 1,
          name: 'Lesly',
          date: '11.12.2017',
          body: 'How are you doing?'
        },
        {
          id: 2,
          name: 'Freddy',
          date: '12.12.2017',
          body: 'Fine, thanks for your attention :)'
        }
      ]
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