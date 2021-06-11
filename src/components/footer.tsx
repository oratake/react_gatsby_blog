import React from 'react';
import type { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export const Footer: FC = () => {
  const data = useStaticQuery<GatsbyTypes.FooterComponentQuery>(graphql`
    query FooterComponent {
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `);

  return (
    <footer>
      <p>&copy; {data.site?.siteMetadata?.author ?? '(著者未設定)'}</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href={`mailto:${data.site?.siteMetadata?.email ?? ''}`}>Contact(dummy address)</a>
        </li>
      </ul>
    </footer>
  );
};
