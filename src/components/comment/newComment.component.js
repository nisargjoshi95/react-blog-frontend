import React from 'react';

const NewComment = () => {
  const handleCommentSubmission = () => {

  };

  return pug`
    article.media
      .media-content
        .field
          p.control
            input.input.is-primary(type='text', placeholder='Your Name')
        .field
          p.control
            textarea.textarea.is-primary(placeholder='Add a comment...')
        nav.level
          .level-left
            .level-item
              a.button.is-primary(onClick=handleCommentSubmission) Post Comment
  `;
}

export default NewComment;