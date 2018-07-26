import React from 'react';

import './sidebar.sass';

const Sidebar = () => pug`
  aside.menu.column.is-narrow
    img#sidebar-logo(src='/public/logo_text.png', alt='WebSight Blog', height='48px')
    br
    ul.menu-list
      li
        a Home
      li
        a Articles
        ul.menu-list
          li
            a Coding
          li
            a Design
          li
            a Industry
          li
            a Workflow
      li
        a Recommended Reading
      li
        a About This Site
`;

export default Sidebar;