import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Loader: React.FC = () => {
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideText(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const textClassname = classNames('Loader__Text__Part', 'animate-fade', { disapear: hideText });

  return (
    <div className={classNames('Loader', { hide: hideText })}>
      <p className='Loader__Text'>
        <span className={textClassname}>Kevin Le Scouarnec</span>
        <span className={textClassname}>|</span>
        <span className={textClassname}>Curriculum Vitae</span>
      </p>
    </div>
  );
};

export default Loader;
