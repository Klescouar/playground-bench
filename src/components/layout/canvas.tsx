import React from 'react';
import { Content } from './content';

const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='Canvas'>
      <div className='Canvas__Frame'>
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default CanvasWrapper;
