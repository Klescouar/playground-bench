import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const About: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<
    { content: string; isVisible: boolean }[]
  >([]);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const paragraphsData = [
      "Développeur Full-Stack avec près de 7 années d'expérience, je possède une solide expertise de l'écosystème JavaScript, en particulier avec React.js, TypeScript et Node.js. J'ai eu l'opportunité de travailler sur des projets complexes de moyenne à grande envergure, et parfois en tant que référent technique.",
      "Passionné par mon métier, j'ai la capacité de m'adapter facilement aux différents contextes techniques et fonctionnels. J'apprécie les défis et je suis en mesure de proposer des solutions aux problèmes qui bloquent la progression des projets de mes clients.",
      "Travailler en équipe est une source d'épanouissement pour moi, tout comme accompagner les développeurs juniors dans leur montée en compétences. Je suis également curieux et constamment à l'affût des nouvelles innovations technologiques, afin de développer de nouvelles compétences et expertises.",
    ];

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
            {paragraph.content}
          </p>
        ))}
      </div>
      <div className={`About__Picture ${isAnimated ? 'show' : ''}`}>
        <Image
          priority
          src="/about.png"
          alt="Picture of Le Scouarnec Kevin"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
