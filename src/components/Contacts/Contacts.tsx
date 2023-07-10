import React from 'react';
import Image from 'next/image';

const Contacts: React.FC = () => {
  return (
    <div className="Contacts">
      <div className="Contacts__Contact">
        <a
          rel="noreferrer"
          className="Contacts__Contact__Link"
          href="https://github.com/Klescouar"
          target="_blank"
        >
          <Image priority src="/github.png" alt="Github link" fill />
        </a>
        <a
          rel="noreferrer"
          className="Contacts__Contact__Link"
          href="https://www.linkedin.com/in/kevin-le-scouarnec-70aa76b0/"
          target="_blank"
        >
          <Image priority src="/linkedin.png" alt="Linkedin link" fill />
        </a>
      </div>
      <p className="Contacts__Item">+1 (438) 927 0412</p>
      <p className="Contacts__Item">lescouarneckevin@protonmail.com</p>
    </div>
  );
};

export default Contacts;
