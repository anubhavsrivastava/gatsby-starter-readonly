import React from 'react';

export default function TopNav({ title, onMenuClick = () => {} }) {
  return (
    <div id="titleBar">
      <a
        href="/#"
        className="toggle"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        {' '}
      </a>
      <span className="title">
        <a href="/#">{title}</a>
      </span>
    </div>
  );
}
