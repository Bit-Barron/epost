import '../styles/globals.css';
import type { AppProps } from 'next/app';
import axios from 'axios';

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:4000/api';
  return <Component {...pageProps} />;
}
