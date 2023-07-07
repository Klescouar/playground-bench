import { OrbitControls, CameraShake } from '@react-three/drei';
// import { useControls } from 'leva';
import { Particles } from './Particles';
import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Blob() {
  // const props = useControls({
  //   focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 2, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 4.5, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 46, min: 0, max: 200 },
  //   curl: { value: 0.29, min: 0.01, max: 0.5, step: 0.01 },
  //   size: { value: 512, min: 1, max: 1000, step: 1 },
  // });

  const isMobile = useIsMobile();

  const props = isMobile
    ? {
        focus: 2,
        speed: 0.2,
        aperture: 4.9,
        fov: 32,
        curl: 0.25,
        size: 512,
      }
    : {
        focus: 3.7,
        speed: 2,
        aperture: 3.3,
        fov: 62,
        curl: 0.27,
        size: 512,
      };
  return (
    <>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        enabled={false}
      />
      <CameraShake
        yawFrequency={1}
        maxYaw={0.05}
        pitchFrequency={1}
        maxPitch={0.05}
        rollFrequency={0.5}
        maxRoll={0.5}
        intensity={0.3}
      />
      <perspectiveCamera position={[0, 0, isMobile ? 3 : 1]}>
        <Particles {...props} />
      </perspectiveCamera>
    </>
  );
}
