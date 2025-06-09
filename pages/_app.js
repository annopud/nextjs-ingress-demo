import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("MyApp");
  return <Component {...pageProps} />;
}

export default MyApp;
