import React from 'react';
import PropTypes from 'prop-types';

export default class PageTitle extends React.Component {

  constructor (props) {

    super(props);

  }

  render () {

    return (
      <h1>{this.props.name}</h1>
    );

  }

};

PageTitle.propTypes = {
  name: PropTypes.string
};

PageTitle.defaultProps = {
  name: 'Default Page'
};