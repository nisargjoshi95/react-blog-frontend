import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.sass';

const Sidebar = () => pug`
  aside.menu.column.is-narrow.off-canvas-sidebar#sidebar
    img#sidebar-logo(src='/public/logo_text.png', alt='WebSight Blog', height='48px')
    br
    ul.menu-list
      li
        Link(to='/') Home
      li
        Link(to='/articles') Articles
        ul.menu-list
          li
            Link(to='/articles/coding') Coding
          li
            Link(to='/articles/design') Design
          li
            Link(to='/articles/industry') Industry
          li
            Link(to='/articles/workflow') Workflow
      li
        Link(to='/rr') Recommended Reading
      li
        Link(to='/about') About This Site
`;

export default Sidebar;