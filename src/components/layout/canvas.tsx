import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { A11yAnnouncer } from '@react-three/a11y';
import { OrbitControls, Preload, Stats } from '@react-three/drei';
import React from 'react';
import localFont from 'next/font/local';

const futura = localFont({ src: '../../styles/fonts/Gotham.otf' });

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} enableZoom={false} />;
};
const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`Canvas ${futura.className}`}>
      <div className='Canvas__Frame'>
        <div className='Canvas__Frame__Header'>
          <h1 className='Canvas__Frame__Header__Name'>
            KEVIN <br /> LE SCOUARNEC
          </h1>
          <p className='Canvas__Frame__Header__Role'>Fullstack Developer</p>
        </div>

        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          {/* <Stats /> */}
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
