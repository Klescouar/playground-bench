import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useT } from 'talkr';
import classNames from 'classnames';
import Contacts from '../Contacts/Contacts';
import { useIsMobile } from '@/hooks/useIsMobile';

export const About: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<
    { content: string; isVisible: boolean }[]
  >([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const { T } = useT();
  const isMobile = useIsMobile();

  useEffect(() => {
    const paragraphsData = ['about.part1', 'about.part2', 'about.part3'];

    const animatedParagraphs = paragraphsData.map((paragraph, index) => ({
      content: paragraph,
      isVisible: false,
    }));

    setParagraphs(animatedParagraphs);
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParagraphs((prevParagraphs) => {
        const updatedParagraphs = [...prevParagraphs];
        const nextIndex = updatedParagraphs.findIndex((p) => !p.isVisible);
        if (nextIndex !== -1) {
          updatedParagraphs[nextIndex].isVisible = true;
        }
        return updatedParagraphs;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [paragraphs]);

  return (
    <div className={classNames('About', { show: isAnimated })}>
      <div className={classNames('About__Description', { show: isAnimated })}>
        <h2
          className={classNames('About__Description__Title', {
            show: isAnimated,
          })}
        >
          Hey,
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={classNames('About__Description__Paragraph', {
              show: paragraph.isVisible,
            })}
          >
            {T(paragraph.content)}
          </p>
        ))}
        {isMobile && <Contacts />}
      </div>
      <div className={classNames('About__Picture', { show: isAnimated })}>
        <Image
          className="About__Picture__Image"
          priority
          src="/about.png"
          alt="Picture of Le Scouarnec Kevin"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};
