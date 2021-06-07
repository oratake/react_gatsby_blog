import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const Page: FC = () => (
  <div>
    <Header />
    <h1>Home</h1>
    <p>Hello, Gatsby.js!</p>
    <Link to="/about">About this blog</Link>
    <Footer />
  </div>
);

export default Page;
