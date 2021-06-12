import React from 'react';
import type { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';

interface PageProps {
  data: GatsbyTypes.AboutPageQuery;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <h1>About {data.site?.siteMetadata?.title ?? '(無題)'}</h1>
    <p>about page.</p>
    <Link to="/">Home</Link>
  </Layout>
);

export default Page;

export const query = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
