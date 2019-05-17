import React from 'react';

import config from '../../config';
const pic = require('../assets/images/avatar.png');

export default function Footer() {
  return (
    <header>
      <span className="image avatar">
        <img src={pic} alt="" />
      </span>
      <h1 id="logo">
        <a href="/#">{config.authorName}</a>
      </h1>
      <p>
        I got reprogrammed by a rogue AI
        <br />
        and now I'm totally cray
      </p>
    </header>
  );
}
