import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  const [hide, setHide] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 2600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`Loader ${!showText ? 'hide' : ''}`}>
      <p className='Loader__Text'>
        <span className={`Loader__Text__Part animate-fade ${showText ? '' : 'disapear'}`}>Kevin Le Scouarnec</span>
        <span className={`Loader__Text__Part animate-fade ${showText ? '' : 'disapear'}`}>|</span>
        <span className={`Loader__Text__Part animate-fade ${showText ? '' : 'disapear'}`}>Curriculum Vitae</span>
      </p>
    </div>
  );
};

export default Loader;
