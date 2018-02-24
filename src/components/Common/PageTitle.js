import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ name }) => {

  return (
    <h1>{name}</h1>
  );

};

PageTitle.propTypes = {
  name: PropTypes.string
};

PageTitle.defaultProps = {
  name: 'Default Page'
};

export default PageTitle;