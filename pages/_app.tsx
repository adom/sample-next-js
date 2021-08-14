import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppContext, AppProps } from 'next/app';
import { reduxWrapper, StoreActions } from 'src/store';
import { loadState } from 'src/store/persist';

const App: FC<AppProps> & { getInitialProps: Function } = ({ Component, pageProps, bot }: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
      <Component {...pageProps} />
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  loadState(ctx);
  const pageProps = !Component.getInitialProps ? {} : await Component.getInitialProps(ctx);
  return { pageProps };
};

// eslint-disable-next-line import/no-default-export
export default reduxWrapper.withRedux(App);
