import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Provider from '../src/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth Front',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body classNameName={inter.classNameName}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
