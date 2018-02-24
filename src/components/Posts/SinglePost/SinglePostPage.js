import React from 'react';

export default class SinglePostPage extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <h2>Hello Single Post {this.props.match.params.id}</h2>
    );

  }

};