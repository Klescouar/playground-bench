import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { A11yAnnouncer } from '@react-three/a11y';
import { OrbitControls, Preload, Stats } from '@react-three/drei';
import React from 'react';

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} />;
};
const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
        }}
      >
        <Stats />
        <Controls />
        <Preload all />
        {children}
      </Canvas>
      <A11yAnnouncer />
    </>
  );
};

export default CanvasWrapper;
