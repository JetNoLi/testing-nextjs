import React, {FC} from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from '../store/store';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps}/>;

export default wrapper.withRedux(WrappedApp);
