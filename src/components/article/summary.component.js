import React from 'react';
import { Link } from 'react-router-dom';

import './summary.sass'

const Article = (props) => pug`
  .has-text-centered
    h1.is-size-3 #{props.title}
    p.is-size-7.has-text-weight-light #{new Date(props.createdAt).toDateString()} by #[Link.is-size-7(to='/authors') #{props.author}]
    p.section#is-small #{props.description}
    Link(to='/articles/' + props.$loki) Go to article
    .tags#is-small
      each tag, i in props.tags
        span.tag.is-info.is-rounded(key=i) #{tag}
`;

export default Article;