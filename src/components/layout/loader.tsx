import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { LoadingContext } from '@/pages/_app';

const Loader: React.FC = () => {
  const [hideText, setHideText] = useState(false);
  const { setIsLoaded } = useContext(LoadingContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideText(true);
      setTimeout(() => setIsLoaded?.(true), 3000);
    }, 1600);
    return () => clearTimeout(timeout);
  }, [setIsLoaded]);

  const textClassname = classNames('Loader__Text__Part', 'animate-fade', {
    disapear: hideText,
  });

  return (
    <div className={classNames('Loader', { hide: hideText })}>
      <p className="Loader__Text">
        <span className={textClassname}>Kevin Le Scouarnec</span>
        <span className={textClassname}>|</span>
        <span className={textClassname}>Curriculum Vitae</span>
      </p>
    </div>
  );
};

export default Loader;
