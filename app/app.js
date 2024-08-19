import "./globals.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export const metadata = {
  title: "Disney clone",
  description: "A clone of Disney's wrbsite",
};

export default MyApp;
