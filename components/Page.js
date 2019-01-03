import React from 'react';
import Head from 'next/head';

export default function Page(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          background: #333;
          color: #f0f0f0;
          font: 14px menlo;
          margin: 0;
          padding: 0;
        }
      `}</style>
      {props.children}
    </div>
  );
}
