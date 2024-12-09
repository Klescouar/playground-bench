import { OrbitControls, CameraShake } from "@react-three/drei";
import { Particles } from "./Particles";
import React from "react";
import useDeviceType from "@/hooks/useDeviceType";

export default function Blob() {
  const device = useDeviceType();
  const isMobile = device === "mobile";

  const props = isMobile
    ? {
        focus: 3,
        speed: 0.1,
        aperture: 4,
        fov: 164,
        curl: 0.01,
        size: 175,
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
