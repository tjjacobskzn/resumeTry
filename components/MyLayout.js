import Head from "next/head";
import Header from "./Header";

// css in JSX format
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

// this will be the overall layout of our page styled with above css.
const Layout = (props) => (
  <div>
    <Head>
    <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-229683137-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />




      <link
        rel="stylesheet"
        // this styles the head.
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>

    <div style={layoutStyle}>
      <Header />
      <hr></hr>
      {props.children}
    </div>
  </div>
);

export default Layout;
