import React from 'react';

import './404.sass';

const NoMatch = () => pug`
  pre.column.not-found 
    h1.is-size-1.has-text-centered 404
    center
      pre.not-found ${`
|      .    ,,       +                       .-.   .           |
|          || |                       .       ) )              |
|.         || |   ,        .                 '-'         .     |
|      +   || |  | |          .                                |
|   .      || '--' |                    .                      |
|    ,,    || .----'                                 .         |
|   || | . || |       .                                        |
| . |  '---'| |                .               .               |
|   '------.| |                            +     _____         |
|   ((_))  || |   .  (  _                       / /|\\ \\     .  |
|   (o o)  || |      ))("),               .    | | | | |       |
|____\\_/___||_|_____((__^_))____________________\\_\\|/_/_____ldb|
    `}
    p.has-text-centered There's nothing here!
`;

export default NoMatch;