import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    }
    return "desktop";
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType("mobile");
      else if (width < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
