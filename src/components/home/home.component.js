import React from 'react';
import axios from 'axios';

import Article from '../article/article.component';
import ArticleSummary from '../article/summary.component';

const testArticle = {
  title: 'Why I Use React Over Angular',
  date: 'July 23, 2018 by Nisarg Joshi',
  description: 'An all too common question for beginning web developers.',
  link: ''
}

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
    .column #[.is-size-3 New Articles]
      .columns.is-multi-line
        each post, index in this.state.posts
          .column.is-half(key=post.title)
            ArticleSummary(...post)
  `;
  }
}

export default Home;