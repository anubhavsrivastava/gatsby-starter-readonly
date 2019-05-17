import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

export default function Nav() {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={['one', 'two', 'three', 'four']}
          currentClassName="active"
          offset={-300}
        >
          <li>
            <Scroll type="id" element="one">
              <a href="#one">About</a>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="two">
              <a href="#two">Things I Can Do</a>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="three">
              <a href="#three">A Few Accomplishments</a>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="four">
              <a href="#four">Contact</a>
            </Scroll>
          </li>
        </Scrollspy>
      </ul>
    </nav>
  );
}
