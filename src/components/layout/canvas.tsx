import React, { useContext, useRef, useState } from "react";
import { Content } from "./content";
import ArrowDownIcon from "../../../public/arrow-down-long.svg";
import ArrowUpIcon from "../../../public/arrow-up-long.svg";
import classNames from "classnames";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useT } from "talkr";
import useDeviceType from "@/hooks/useDeviceType";
import { ScrollContext } from "@/pages/_app";

export enum CHAPTERS {
  EXPERIENCES = "experiences",
  WHO_AM_I = "who_am_i",
}

const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  const [chapter, setChapter] = useState(CHAPTERS.WHO_AM_I);
  const wheelStartedRef = useRef(false);
  const { T } = useT();
  const device = useDeviceType();
  const isMobile = device === "mobile";
  const { scrollPosition } = useContext(ScrollContext);
  const handleChapterChange = () => {
    setChapter(
      chapter === CHAPTERS.EXPERIENCES
        ? CHAPTERS.WHO_AM_I
        : CHAPTERS.EXPERIENCES
    );
  };

  const handleWheel = (event: any) => {
    if (event.deltaY === 1 || event.deltaY === -1) {
      wheelStartedRef.current = false;
      return;
    }
    if (!wheelStartedRef.current) {
      wheelStartedRef.current = true;
      if (event.deltaY > 0 && chapter === CHAPTERS.WHO_AM_I) {
        setChapter(CHAPTERS.EXPERIENCES);
      }
      if (
        event.deltaY < 0 &&
        chapter === CHAPTERS.EXPERIENCES &&
        scrollPosition === 0
      ) {
        setChapter(CHAPTERS.WHO_AM_I);
      }
    }
  };

  return (
    <div className="Canvas" onWheel={isMobile ? undefined : handleWheel}>
      {!isMobile && <LanguageSwitcher />}
      <div className="Canvas__Frame">
        {isMobile && <LanguageSwitcher />}

        <Content chapter={chapter}>{children}</Content>
      </div>
      <div className="Canvas__Nav">
        <button
          className={classNames("Canvas__Nav__Arrow", {
            "--hide": chapter === CHAPTERS.WHO_AM_I,
          })}
          aria-label='Scroll to "Who am I"'
          onClick={handleChapterChange}
        >
          <ArrowUpIcon />
        </button>
        <div
          className={classNames("Canvas__Nav__Chapters", {
            "--switched": chapter === CHAPTERS.WHO_AM_I,
          })}
        >
          <p className="Canvas__Nav__Chapters__Item">
            {T(CHAPTERS.EXPERIENCES)}
          </p>
          <p className="Canvas__Nav__Chapters__Item">{T(CHAPTERS.WHO_AM_I)}</p>
        </div>

        <button
          className={classNames("Canvas__Nav__Arrow", {
            "--hide": chapter === CHAPTERS.EXPERIENCES,
          })}
          aria-label='Scroll to "Experiences"'
          onClick={handleChapterChange}
        >
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
};

export default CanvasWrapper;
