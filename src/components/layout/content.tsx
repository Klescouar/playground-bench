import React from 'react';
import Image from 'next/image';
import GithubIcon from '../../../public/github.png';
import LinkedinIcon from '../../../public/linkedin.png';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Experiences } from '../Experiences/Experiences';

export const Content = () => {
  const isMobile = useIsMobile();
  return (
    <div className='Content'>
      <div>
        <div className='Content__Header'>
          <h1 className='Content__Header__Name'>
            KEVIN <br /> LE SCOUARNEC
          </h1>
          <p className='Content__Header__Role'>
            Fullstack Developer<span className='Content__Header__Role__Date'>-&nbsp; since 2017</span>
          </p>
        </div>
        <div className='Content__Infos'>
          <div className='Content__Infos__Contact'>
            <a className='Content__Infos__Contact__Link' href='https://github.com/Klescouar' target='_blank'>
              <Image priority src={GithubIcon} alt='Github link' />
            </a>
            <a
              className='Content__Infos__Contact__Link'
              href='https://www.linkedin.com/in/kevin-le-scouarnec-70aa76b0/'
              target='_blank'
            >
              <Image priority src={LinkedinIcon} alt='Linkedin link' />
            </a>
          </div>
          <p className='Content__Infos__Item'>+1 (438) 927 0412</p>
          <p className='Content__Infos__Item'>lescouarneckevin@protonmail.com</p>
        </div>
      </div>
      <Experiences />
    </div>
  );
};
