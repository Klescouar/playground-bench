import type { AppProps } from 'next/app';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import Dom from '../components/layout/dom';
import dynamic from 'next/dynamic';
import Loader from '../components/layout/loader';
import localFont from 'next/font/local';
import { DefaultSeo } from 'next-seo';
import { Talkr } from 'talkr';

import '@/styles/index.scss';
import '@/styles/canvas.scss';
import '@/styles/loader.scss';
import '@/styles/content.scss';
import '@/styles/experiences.scss';
import '@/styles/about.scss';
import '@/styles/contacts.scss';
import '@/styles/languageSwitcher.scss';

import en from '../translations/en.json';
import fr from '../translations/fr.json';

const futura = localFont({ src: '../styles/fonts/Gotham.otf' });

const Canvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
});

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const newChildren = React.Children.map(children, (child, index) =>
    index % 2 === 0 ? <Dom>{child}</Dom> : <Canvas>{child}</Canvas>
  );

  return newChildren;
};

export const ScrollContext = createContext<{
  scrollPosition: number;
  setScrollPosition: Dispatch<SetStateAction<number>> | undefined;
}>({
  scrollPosition: 0,
  setScrollPosition: undefined,
});

export const LoadingContext = createContext<{
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>> | undefined;
}>({
  isLoaded: false,
  setIsLoaded: undefined,
});

function App({ Component, pageProps = { title: 'index' } }: AppProps) {
  //@ts-ignore
  const children = Component(pageProps).props.children;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(2);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setScaleFactor(scrollPosition > 10 ? 2 : 1.5);
  }, [scrollPosition]);

  return (
    <>
      <DefaultSeo
        title="Kevin Le Scouarnec | Curriculum Vitae"
        description="Kevin Le Scouarnec | Developer Fullstack | Curriculum Vitae | Portfolio"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Kevin Le Scouarnec CV Portfolio Curriculum Vitae Developer Fullstack Javascript React ReactJS Node NodeJS job',
          },
        ]}
      />
      <div
        className={futura.className}
        // @ts-ignore
        style={{ '--scale-factor': scaleFactor }}
      >
        <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
          <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
            <Loader />
            <Talkr languages={{ en, fr }} defaultLanguage="fr">
              <AppLayout>{children}</AppLayout>
            </Talkr>
          </ScrollContext.Provider>
        </LoadingContext.Provider>
      </div>
    </>
  );
}

export default App;
