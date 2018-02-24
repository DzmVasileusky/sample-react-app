import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js'

const CommentsList = ({ comments }) => {

  return (
    <div className="comments">
      {
        comments.length ? (
          comments.map((item) =>
            <Comment key={item.id} info={item} />)
        ) : (
          <div>Be the first to leave a comment</div>
        )
      }
    </div>
  );

};

CommentsList.propTypes = {
  comments: PropTypes.array
};

export default CommentsList;