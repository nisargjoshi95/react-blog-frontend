import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => pug`
  div
    p.is-size-7.has-text-weight-light #{new Date(props.createdAt).toDateString()} by #[Link.is-size-7(to='/authors') #{props.author}]
    h1.is-size-4 #{props.title}
    p #{props.description}
    Link(to='/articles/' + props.$loki) Go to article
`;

export default Article;