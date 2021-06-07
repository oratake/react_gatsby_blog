import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

const Page: FC = () => (
  <Layout>
    <h1>About</h1>
    <p>about page.</p>
    <Link to="/">Home</Link>
  </Layout>
);

export default Page;
