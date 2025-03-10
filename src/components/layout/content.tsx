import React, { useContext } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import { Experiences } from "../Experiences/Experiences";
import { Canvas } from "@react-three/fiber";
import { CHAPTERS } from "./canvas";
import { About } from "../About/About";
import { LoadingContext } from "@/pages/_app";
import { useT } from "talkr";
import Contacts from "../Contacts/Contacts";

export const Content = ({
  children,
  chapter,
}: {
  children: React.ReactNode;
  chapter: `${CHAPTERS}`;
}) => {
  const device = useDeviceType();
  const isMobile = device === "mobile";
  const { isLoaded } = useContext(LoadingContext);
  const { T } = useT();

  return (
    <div className="Content">
      <div className="Content__Presentation">
        <div className="Content__Presentation__Header">
          <h1 className="Content__Presentation__Header__Name Ellipsis">
            KEVIN {isMobile && <br />} LE SCOUARNEC
          </h1>
          <p className="Content__Presentation__Header__Role">
            {T("post")}
            <span className="Content__Presentation__Header__Role__Date">
              -&nbsp; {T("since")} 2016
            </span>
          </p>
        </div>
        {!isMobile && <Contacts />}
        <Canvas
          style={{
            position: isMobile ? "absolute" : "relative",
            left: 0,
            bottom: 0,
            flex: 1,
          }}
        >
          {children}
        </Canvas>
      </div>
      {isLoaded ? (
        chapter === CHAPTERS.EXPERIENCES ? (
          <Experiences />
        ) : (
          <About />
        )
      ) : null}
    </div>
  );
};
