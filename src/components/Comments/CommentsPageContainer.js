import { connect } from 'react-redux';
import { commentReceived, fetchComments } from './CommentsActions';
import CommentsPage from './CommentsPage';

const mapStateToProps = (state) => {

  return {
    comments: state.comments,
    commentsIsLoading: state.commentsIsLoading,
    commentsHasError: state.commentsHasError
  }

};

const mapDispatchToProps = {
  fetchComments: fetchComments,
  addComments: commentReceived
};

const CommentsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);

export default CommentsPageContainer;