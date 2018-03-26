import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostsPage from '../Posts/PostsPage.js';
import CommentsPageContainer from '../Comments/CommentsPageContainer.js';

const App = () => (
  <Switch>
    <Route path="/posts" component={PostsPage} />
    <Route path="/comments" component={CommentsPageContainer} />
    <Redirect to="/posts" />
  </Switch>
);

export default App;
