import axios from 'axios';
import 'promise.prototype.finally/auto';

export const COMMENT_FETCHED = 'COMMENT_FETCHED';
export const commentIsLoading = (bool) => ({
    type: COMMENT_FETCHED,
    isLoading: bool
});

export const COMMENT_ERRORED = 'COMMENT_ERRORED';
export const commentHasError = (bool) => ({
    type: COMMENT_ERRORED,
    hasError: bool
});

export const COMMENT_RECEIVED = 'COMMENT_RECEIVED';
export const commentReceived = (comment) => ({
  type: COMMENT_RECEIVED,
  comment
});

export const fetchComment = (url) => {

  return (dispatch) => {

    dispatch(commentHasError(false));
    dispatch(commentIsLoading(true));

    axios.get(url)
    .then((response) => {

      dispatch(commentReceived(response.data.slice(0, 20)));

    })
    .catch((error) => {

        dispatch(commentHasError(true));

    })
    .finally(() => {

        dispatch(commentIsLoading(false));

    });

  }

};

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED';
export const commentsIsLoading = (bool) => ({
    type: COMMENT_FETCHED,
    isLoading: bool
});

export const COMMENTS_ERRORED = 'COMMENTS_ERRORED';
export const commentsHasError = (bool) => ({
    type: COMMENT_ERRORED,
    hasError: bool
});

export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';
export const commentsReceived = (comment) => ({
    type: COMMENT_RECEIVED,
    comment
});

export const fetchComment = (url) => {

    return (dispatch) => {

        dispatch(commentHasError(false));
        dispatch(commentIsLoading(true));

        axios.get(url)
        .then((response) => {

            dispatch(commentReceived(response.data.slice(0, 20)));

        })
        .catch((error) => {

            dispatch(commentHasError(true));

        })
        .finally(() => {

            dispatch(commentIsLoading(false));

        });

    }

};

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const addCommentsAction = (comments) => ({
  type: 'ADD_COMMENTS',
  comments
});