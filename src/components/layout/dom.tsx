import React from 'react';

const Dom = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='dom'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default Dom;
