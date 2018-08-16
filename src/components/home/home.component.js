import React from 'react';
import axios from 'axios';

import Article from '../article/article.component';
import ArticleSummary from '../article/summary.component';

import './home.sass';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    axios.post('https://websighttech-blog-api.herokuapp.com/api', {
      action: 'GET_ALL_POSTS'
    }).then(response => {
      this.setState({posts: response.data});
      console.log(response.data)
    })
    .catch(err => console.error(err));
  }

  render() {
    return pug`
    div
      .is-size-2.has-text-centered New Articles
      .columns.is-multi-line.has-subcolumns
        each post, index in this.state.posts
          .column.is-half-desktop(key=post.$loki)
            ArticleSummary(...post)
  `;
  }
}

export default Home;