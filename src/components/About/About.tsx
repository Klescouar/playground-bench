import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useT } from 'talkr';

export const About: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<
    { content: string; isVisible: boolean }[]
  >([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const { T } = useT();
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
    <div className={`About ${isAnimated ? 'show' : ''}`}>
      <div className={`About__Description ${isAnimated ? 'show' : ''}`}>
        <h2 className="About__Description__Title">Hey,</h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`About__Description__Paragraph ${
              paragraph.isVisible ? 'show' : ''
            }`}
          >
            {T(paragraph.content)}
          </p>
        ))}
      </div>
      <div className={`About__Picture ${isAnimated ? 'show' : ''}`}>
        <Image
          priority
          src="/profilPicture.png"
          alt="Picture of Le Scouarnec Kevin"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
