import React, { useState } from 'react';
import { Content } from './content';
import ArrowDownIcon from '../../../public/arrow-down-long.svg';
import ArrowUpIcon from '../../../public/arrow-up-long.svg';
import classNames from 'classnames';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useT } from 'talkr';
import { useIsMobile } from '@/hooks/useIsMobile';

export enum CHAPTERS {
  EXPERIENCES = 'experiences',
  WHO_AM_I = 'who_am_i',
}

const CanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  const [chapter, setChapter] = useState(CHAPTERS.WHO_AM_I);
  const { T } = useT();
  const isMobile = useIsMobile();
  const handleChapterChange = () => {
    setChapter(
      chapter === CHAPTERS.EXPERIENCES
        ? CHAPTERS.WHO_AM_I
        : CHAPTERS.EXPERIENCES
    );
  };
  return (
    <div className="Canvas">
      {!isMobile && <LanguageSwitcher />}
      <div className="Canvas__Frame">
        {isMobile && <LanguageSwitcher />}

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
          <p className="Canvas__Nav__Chapters__Item">
            {T(CHAPTERS.EXPERIENCES)}
          </p>
          <p className="Canvas__Nav__Chapters__Item">{T(CHAPTERS.WHO_AM_I)}</p>
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
