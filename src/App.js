import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostsPage from './Posts/PostsPage.js';
import CommentsPage from './Comments/CommentsPage.js';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/posts" component={PostsPage} />
        <Route path="/comments" component={CommentsPage} />
        <Redirect to="/posts" />
      </Switch>
    );
  }
}

export default App;
