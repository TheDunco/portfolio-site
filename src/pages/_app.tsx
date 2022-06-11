import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
);

export default MyApp;
