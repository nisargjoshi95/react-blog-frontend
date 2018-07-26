import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Comment from '../comment/comment.component';
import NewComment from '../comment/newComment.component';

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.postId)
    this.state={post: {}};
    axios.post('https://websighttech-blog-api.herokuapp.com/api', {
      action: 'GET_POST',
      data: {
        postId: parseInt(props.match.params.postId)
      }
    }).then(response => {
      this.setState({post: response.data});
      console.log(response.data)
    })
    .catch(err => console.error(err));
  }

  render() {
    const post = this.state.post;
    return pug`
      .column.article
        h1.is-size-2.has-text-centered #{post.title}
          p.is-size-7.has-text-weight-light #{new Date(post.createdAt).toDateString()} by #[Link.is-size-7(to='/authors') #{post.author}]
        section.section
          p #{post.content}
        section.section
          each comment, i in post.comments
            Comment(...comment, key=i)
          NewComment
    `;
  }
}

export default Article;