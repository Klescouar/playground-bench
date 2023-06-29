import type { AppProps } from 'next/app';
import React from 'react';
import Dom from '../components/layout/dom';
import dynamic from 'next/dynamic';
import '@/styles/index.css';

const Canvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
});

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const newChildren = React.Children.map(children, (child, index) =>
    index % 2 === 0 ? <Dom>{child}</Dom> : <Canvas>{child}</Canvas>
  );

  return newChildren;
};

function App({ Component, pageProps = { title: 'index' } }: AppProps) {
  // Get the children from each page so we can split them
  //@ts-ignore
  const children = Component(pageProps).props.children;

  return <AppLayout>{children}</AppLayout>;
}

export default App;
