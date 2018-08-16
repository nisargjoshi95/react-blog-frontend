import React from 'react';
import { Link } from 'react-router-dom';

export default () => pug`
  .dashboard
    h1 Dashboard
    Link(to='/create-article') Create Article
`;