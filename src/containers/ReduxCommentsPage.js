import { connect } from 'react-redux';
import { addCommentAction, addCommentsAction } from '../actions';
import CommentsPage from '../components/Comments/CommentsPage';

const mapStateToProps = (state) => {

  return {
    comments: state.comments
  }

};

const mapDispatchToProps = {
  onFetchComments: addCommentsAction,
  onAddComment: addCommentAction
};

const ReduxCommentsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);

export default ReduxCommentsPage;