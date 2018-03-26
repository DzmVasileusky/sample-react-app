import {
  COMMENT_FETCHED, COMMENT_ERRORED, COMMENT_RECEIVED,
  COMMENTS_FETCHED, COMMENTS_ERRORED, COMMENTS_RECEIVED,
} from './CommentsActions';

export const comments = (state = [], action) => {

  switch (action.type) {

    case COMMENT_RECEIVED:

      return [...state, {
        ...action.comment,
        id: state.length + 1
      }];

    case COMMENTS_RECEIVED:
      return [...state, ...action.comments];

    default:
      return state;

  }

};

export const commentsIsLoading = (state = false, action) => {

  switch (action.type) {

    case COMMENTS_FETCHED:

      return action.isLoading;

    default:
      return state;

  }

};

export const commentsHasError = (state = false, action) => {

  switch (action.type) {

    case COMMENTS_ERRORED:

      return action.hasError;

    default:
      return state;

  }

};