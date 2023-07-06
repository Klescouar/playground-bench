import React, { useRef } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Experiences } from '../Experiences/Experiences';
import { Canvas } from '@react-three/fiber';
import { A11yAnnouncer } from '@react-three/a11y';
import { OrbitControls, Preload } from '@react-three/drei';
import { CHAPTERS } from './canvas';
import { About } from '../About/About';

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} enableZoom={false} enabled={false} />;
};

export const Content = ({
  children,
  chapter,
}: {
  children: React.ReactNode;
  chapter: `${CHAPTERS}`;
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="Content">
      <div className="Content__Presentation">
        <div className="Content__Presentation__Header">
          <h1 className="Content__Presentation__Header__Name">
            KEVIN {isMobile && <br />} LE SCOUARNEC
          </h1>
          <p className="Content__Presentation__Header__Role">
            Fullstack Developer
            <span className="Content__Presentation__Header__Role__Date">
              -&nbsp; since 2017
            </span>
          </p>
        </div>
        {!isMobile && (
          <div className="Content__Presentation__Infos">
            <div className="Content__Presentation__Infos__Contact">
              <a
                rel="noreferrer"
                className="Content__Presentation__Infos__Contact__Link"
                href="https://github.com/Klescouar"
                target="_blank"
              >
                <Image priority src="/github.png" alt="Github link" fill />
              </a>
              <a
                rel="noreferrer"
                className="Content__Presentation__Infos__Contact__Link"
                href="https://www.linkedin.com/in/kevin-le-scouarnec-70aa76b0/"
                target="_blank"
              >
                <Image priority src="/linkedin.png" alt="Linkedin link" fill />
              </a>
            </div>
            <p className="Content__Presentation__Infos__Item">
              +1 (438) 927 0412
            </p>
            <p className="Content__Presentation__Infos__Item">
              lescouarneckevin@protonmail.com
            </p>
          </div>
        )}
        <Canvas
          style={{
            position: isMobile ? 'absolute' : 'relative',
            left: 0,
            bottom: 0,
            flex: 1,
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          <Controls />
          <Preload all />
          {children}
        </Canvas>
        <A11yAnnouncer />
      </div>
      {chapter === CHAPTERS.EXPERIENCES ? <Experiences /> : <About />}
    </div>
  );
};
