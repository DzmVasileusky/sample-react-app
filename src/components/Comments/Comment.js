import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ info: { name, body, email } }) => {

  return (
    <div>
      <hr />
      <h3>{name}</h3>
      <p>{body}</p>
      <div><em>{email}</em></div>
    </div>
  )

};

Comment.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string
  })
};

export default Comment;