import React from 'react';

import PageTitle from 'shared/components/PageTitle/PageTitle.js';
import withLoading from 'shared/hoc/withLoading.js';
import CommentsForm from './CommentsForm/CommentsForm.js';
import CommentsList from './CommentsList/CommentsList.js';

const CommentsListWithLoading = withLoading(CommentsList);

export default class CommentsPage extends React.Component {

  constructor (props) {

    super(props);

  }

  componentDidMount () {

    this.props.fetchComments('https://jsonplaceholder.typicode.com/comments');

  }

  saveComments = (comment) => {

    this.props.addComments(comment);

  }

  render() {

    console.log('CommentsPage.render');
    return (
      <div className="container">
        <PageTitle name="Comments" count="10" />
        <CommentsForm saveComments={this.saveComments} />
        <CommentsListWithLoading isLoading={this.props.commentsIsLoading} comments={this.props.comments} />
      </div>
    );

  }

};