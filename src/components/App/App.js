import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostsPage from '../Posts/PostsPage.js';
import ReduxCommentsPage from '../../containers/ReduxCommentsPage.js';

const App = () => (
  <Switch>
    <Route path="/posts" component={PostsPage} />
    <Route path="/comments" component={ReduxCommentsPage} />
    <Redirect to="/posts" />
  </Switch>
);

export default App;
