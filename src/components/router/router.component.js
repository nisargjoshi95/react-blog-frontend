import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/home.component';
import Sidebar from '../sidebar/sidebar.component';
import Article from '../article/article.component';
import NoMatch from '../404/404.component';

import './router.sass';

const Router = () => pug`
  BrowserRouter
    .columns.is-mobile#pageContainer
      Sidebar
      Switch
        Route(path='/', component=Home, exact=true)
        Route(path='/articles/:postId', component=Article)
        Route(component=NoMatch) // Route with no path always matches - 404
`;

export default Router;