import React from 'react';

export const About: React.FC = () => {
  return (
    <div className='About'>
      <div className='About__Description'>
        <h2 className='About__Description__Title'>Hey,</h2>
        <p className='About__Description__Paragraph'>
          Développeur Full-Stack avec près de 7 années d&apos;expérience, je possède une solide expertise de
          l&apos;écosystème JavaScript, en particulier avec React.js, TypeScript et Node.js. J&apos;ai eu
          l&apos;opportunité de travailler sur des projets complexes de moyenne à grande envergure, et parfois en tant
          que référent technique.
        </p>
        <p className='About__Description__Paragraph'>
          Passionné par mon métier, j&apos;ai la capacité de m&apos;adapter facilement aux différents contextes
          techniques et fonctionnels. J&apos;apprécie les défis et je suis en mesure de proposer des solutions aux
          problèmes qui bloquent la progression des projets de mes clients.
        </p>
        <p className='About__Description__Paragraph'>
          Travailler en équipe est une source d&apos;épanouissement pour moi, tout comme accompagner les développeurs
          juniors dans leur montée en compétences. Je suis également curieux et constamment à l&apos;affût des nouvelles
          innovations technologiques, afin de développer de nouvelles compétences et expertises.
        </p>
      </div>
      <img loading='lazy' className='About__Picture' src='../../../profilPicture.png' alt='Profil Picture' />
    </div>
  );
};
