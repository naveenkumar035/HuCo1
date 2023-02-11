// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import  Layout  from './components/Layout';

import "../styles/globals.css";
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps: {session, ...pageProps}}) {
  return (
    <>
    <SessionProvider session={session}>
    
    <NextUIProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
    </SessionProvider>
    </>
  );
}

export default MyApp;


