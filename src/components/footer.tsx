import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';

export const Footer: FC = () => (
  <footer>
    <p>&copy; Yamada Taro</p>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="mailto:example@example.com">Contact(dummy address)</a>
      </li>
    </ul>
  </footer>
);
