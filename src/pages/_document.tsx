import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="BeTokenized" />
        <meta
          name="description"
          content="Get Tokenized and enjoy hassle-free payments at your next event, you can
        start by registering for your event."
        />

        <meta property="og:site_name" content="BeTokenized" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://ccs.csivit.com/" /> */}
        <meta property="og:title" content="BeTokenized" />
        <meta
          property="og:description"
          content="Get Tokenized and enjoy hassle-free payments at your next event, you can
        start by registering for your event."
        />
        {/* <meta
          property="og:image"
          itemProp="image"
          content="https://ccs.csivit.com/ccs_banner.png"
        /> */}

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://ccs.csivit.com/" /> */}
        <meta
          property="twitter:title"
          content="BeTokenized"
        />
        <meta
          property="twitter:description"
          content="Get Tokenized and enjoy hassle-free payments at your next event, you can
        start by registering for your event."
        />
        {/* <meta
          property="twitter:image"
          content="https://ccs.csivit.com/ccs_banner.png"
        /> */}

        {/* <meta name="keywords" content="ccs" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
