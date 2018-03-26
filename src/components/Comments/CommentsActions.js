import { fetchActionCreator } from 'shared/helpers/fetchActionCreator.js';

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

export const fetchComment = fetchActionCreator({
  loadingAction: commentIsLoading,
  errorAction: commentHasError,
  receivedAction: commentReceived
});

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED';
export const commentsIsLoading = (bool) => ({
    type: COMMENTS_FETCHED,
    isLoading: bool
});

export const COMMENTS_ERRORED = 'COMMENTS_ERRORED';
export const commentsHasError = (bool) => ({
    type: COMMENTS_ERRORED,
    hasError: bool
});

export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';
export const commentsReceived = (comments) => ({
    type: COMMENTS_RECEIVED,
    comments
});

export const fetchComments = fetchActionCreator({
  loadingAction: commentsIsLoading,
  errorAction: commentsHasError,
  receivedAction: commentsReceived
});