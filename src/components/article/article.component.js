import React from 'react';

const Article = (props) => pug`
  div
    p.is-size-7.has-text-weight-light #{new Date(props.createdAt).toDateString()} by #{props.author}
    h1.is-size-4 #{props.title}
    p #{props.content}
`;

export default Article;