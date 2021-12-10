import React from "react";
import Head from "next/head";

const HeadPage = (props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="img/favicon-3.png" />
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
    </>
  );
};

export default HeadPage;
