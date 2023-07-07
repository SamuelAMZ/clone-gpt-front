'use client';

import React from 'react';

import Header from '../components/home-2/Header';
import Footer from '../components/home-2/Footer';
import './home-2.css';
 
export default function Layout({ children }) {
  return (
    <div className="home-2">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}