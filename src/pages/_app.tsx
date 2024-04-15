import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactNode } from 'react';
import Layout from "@/Components/Layout";
import "react-kod/dist/styles.css";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return <>{getLayout(<Component {...pageProps} />)}</>
}
