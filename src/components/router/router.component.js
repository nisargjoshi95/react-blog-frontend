import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect'

import Home from '../home/home.component';
import Sidebar from '../sidebar/sidebar.component';
import Article from '../article/article.component';
import NoMatch from '../404/404.component';

import './router.sass';

const Router = () => pug`
  BrowserRouter
    #pageContainer.off-canvas(class= !isMobile && 'off-canvas-sidebar-show')
      a.off-canvas-toggle.navbar-burger(role='button', aria-label='menu', aria-expanded='false' href='#sidebar')
        span
        span
        span
      Sidebar
      a.off-canvas-overlay(href='#close')
      .off-canvas-content.is-paddingless
        Switch
          Route(path='/', render=${() => pug`Home(isMobile)`}, exact=true)
          Route(path='/articles/:postId', component=Article)
          Route(component=NoMatch) // Route with no path always matches - 404
`;

export default Router;