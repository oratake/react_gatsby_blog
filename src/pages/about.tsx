import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const Page: FC = () => (
  <div>
    <Header />
    <h1>About</h1>
    <p>about page.</p>
    <Link to="/">Home</Link>
    <Footer />
  </div>
);

export default Page;
