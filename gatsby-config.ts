import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Blog title',
    author: 'Shoichi Yokoi',
    description: 'Example blog using GatsbyJS',
    email: 'example@example.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typegen'
  ]
};
export default config;
