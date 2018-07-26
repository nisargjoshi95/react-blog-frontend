import React from 'react';

const Comment = (props) => pug`
  article.media
    .media-content
      .content
        strong #{props.username}
        br
        div #{props.comment}
        br
        small #{props.createdAt || '0hrs ago'}

`;

export default Comment;