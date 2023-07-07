import React, { useState } from 'react';
import { Content } from './content';
import ArrowDownIcon from '../../../public/arrow-down-long.svg';
import ArrowUpIcon from '../../../public/arrow-up-long.svg';
import classNames from 'classnames';

export enum CHAPTERS {
  EXPERIENCES = 'Experiences',
  WHO_AM_I = 'Qui suis-je ?',
}

const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  const [chapter, setChapter] = useState(CHAPTERS.WHO_AM_I);
  const handleChapterChange = () => {
    setChapter(
      chapter === CHAPTERS.EXPERIENCES
        ? CHAPTERS.WHO_AM_I
        : CHAPTERS.EXPERIENCES
    );
  };
  return (
    <div className="Canvas">
      <div className="Canvas__Frame">
        <Content chapter={chapter}>{children}</Content>
      </div>
      <div className="Canvas__Nav">
        <button
          className={classNames('Canvas__Nav__Arrow', {
            '--hide': chapter === CHAPTERS.WHO_AM_I,
          })}
          onClick={handleChapterChange}
        >
          <ArrowUpIcon />
        </button>
        <div
          className={classNames('Canvas__Nav__Chapters', {
            '--switched': chapter === CHAPTERS.WHO_AM_I,
          })}
        >
          <p className="Canvas__Nav__Chapters__Item">{CHAPTERS.EXPERIENCES}</p>
          <p className="Canvas__Nav__Chapters__Item">{CHAPTERS.WHO_AM_I}</p>
        </div>

        <button
          className={classNames('Canvas__Nav__Arrow', {
            '--hide': chapter === CHAPTERS.EXPERIENCES,
          })}
          onClick={handleChapterChange}
        >
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
};

export default CanvasWrapper;
