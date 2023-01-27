import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Header } from '@/components';

interface TemplateType {
  children: ReactNode;
}
const Template = ({ children }: TemplateType) => {
  return (
    <>
      <Head>
        <title>Japan Guide</title>
        <meta name="description" content="Welcome to Anna's Japan Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary min-h-screen max-w-screen">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Template;
