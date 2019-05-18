import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <footer>
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
