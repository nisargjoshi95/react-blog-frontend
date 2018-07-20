import React from 'react';
import { BrowerRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/home.component';

const Router = () => pug`
  BroswerRouter
    Switch
      Route(path='/', component=${Home}, exact=${true})
`;

export default Router;