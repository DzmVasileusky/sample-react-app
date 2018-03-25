import React from 'react';
import axios from 'axios';
import 'promise.prototype.finally/auto';

import PageTitle from '../Common/PageTitle.js';
import CommentsForm from './CommentsForm.js';
import CommentsList from './CommentsList.js';
import withLoading from 'hoc/withLoading.js';

const CommentsListWithLoading = withLoading(CommentsList);

export default class CommentsPage extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      isLoading: true
    };

  }

  componentDidMount () {

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {

      this.props.onFetchComments(response.data.slice(0, 20));

    })
    .catch((error) => {

        console.log(error);

    })
    .finally(() => {

        this.setState({
            isLoading: false
        });

    });

  }

  saveComments = (comment) => {

    this.props.onAddComment(comment);

  }

  render() {

    console.log('CommentsPage.render', this.state.isLoading);
    return (
      <div className="container">
        <PageTitle name="Comments" count="10" />
        <CommentsForm saveComments={this.saveComments} />
        <CommentsListWithLoading isLoading={this.state.isLoading} comments={this.props.comments} />
      </div>
    );

  }

};