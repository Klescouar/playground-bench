import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { A11yAnnouncer } from '@react-three/a11y';
import { OrbitControls, Preload } from '@react-three/drei';
import React from 'react';
import { Content } from './content';
import { useIsMobile } from '@/hooks/useIsMobile';

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} enableZoom={false} enabled={false} />;
};
const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <div className='Canvas'>
      <div className='Canvas__Frame'>
        <Content />
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <Controls />
          <Preload all />
          {children}
        </Canvas>
        <A11yAnnouncer />
      </div>
    </div>
  );
};

export default CanvasWrapper;
