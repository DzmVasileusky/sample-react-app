import { combineReducers } from 'redux';
import { comments, commentsIsLoading, commentsHasError } from './components/Comments/CommentsReducers';

export default combineReducers({
  comments,
  commentsIsLoading,
  commentsHasError
});