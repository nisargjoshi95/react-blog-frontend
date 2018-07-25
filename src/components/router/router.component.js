import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/home.component';
import Sidebar from '../sidebar/sidebar.component';

import './router.sass';

const Router = () => pug`
  BrowserRouter
    .columns#pageContainer
      Sidebar
      Switch
        Route(path='/', component=Home, exact=true)
`;

export default Router;