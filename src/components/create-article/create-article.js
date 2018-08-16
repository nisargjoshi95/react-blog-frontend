import React from 'react';
import Select from 'react-select';
import { basename } from 'upath';
let testOptions = [
  { value: 'something', label: 'Something' },
  { value: 'strawberry', label: 'Strawberry'},
  { value: 'else', label: 'Else' },
  { value: "food", label: 'Food' },
];

export default class CreateArticle extends React.Component {
  render() {
    return pug`
      div
        h1.is-size-2.has-text-centered Create Article
        section.section
          .field
            p.control
              input.input.is-primary(type='text', placeholder='Title')
          .field
            p.control
              input.input.is-primary(type='text', placeholder='Author')
          .field
            p.control
              input.input.is-primary(type='text', placeholder='Description')
          .field
            p.control
              Select(isMulti, options=testOptions, className='is-primary')
          .field
            p.control
              textarea.textarea.is-primary(rows='20', placeholder='Article')
    `;
  }
};