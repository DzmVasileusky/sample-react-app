import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageTitle from '../Common/PageTitle.js';
import AllPostsPage from './AllPosts/AllPostsPage';
import SinglePostPage from './SinglePost/SinglePostPage';

export default class PostsPage extends React.Component {

  constructor() {

    super();

  }

  render() {

    return (
      <div className="container">
        <PageTitle name="Posts" />
        <Switch>
          <Route exact path="/posts" component={AllPostsPage} />
          <Route path="/posts/:id" component={SinglePostPage} />
        </Switch>
      </div>
    );

  }

};