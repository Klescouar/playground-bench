import { ScrollContext } from '@/pages/_app';
import React, { useContext, useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    job: 'Developer Fullstack',
    compagny: 'Skeepers',
    period: 'Since July 2022',
    project:
      'Development of a live shopping interface to offer customers a live and interactive experience allowing users to interact in real time with sellers or influencers, ask questions about products, get personalized recommendations and make purchases instantly during the live broadcast.',
    activities: [
      'Development of new functionalities (front-end/backend)',
      'Study and estimation of new functionalities',
      'Introduction of best practices (strict typing, linters, code checker, tests)',
      'Creation/improvement of various REST APIs',
    ],
    technicalEnvironment:
      'Vanilla JS, Typescript, ReactJS, StencilJS, Material-Ui, NodeJS, NestJS, AWS, socket.io, React-Testing-Library, Trunk based development, Docker, PostgresSQL, microservices',
  },
  {
    job: 'Developer Fullstack',
    compagny: 'Decathlon',
    period: 'June 2020 - July 2022',
    project:
      'Development of the Decathlon Activités mobile application and website, designed to put athletes and coaches in touch with each other. Decathlon Activités also offers sporting events, workshops and training programs to promote regular exercise and encourage physical and mental well-being.',
    activities: [
      'Development of the mobile application for Android and IOS using React-native',
      'Development of new website functionalities (front-end/backend)',
      'Study and estimation of new functionalities',
      'Implementation of best practices (strict typing, linters, code checker, tests)',
      'Occasional facilitation of an agile ceremony (sprint planning, retrospective, etc.)',
      'Implementation of a powerful search system using Algolia',
      'Automated deployment of the mobile application to the various stores using Bitrise',
      'SEO implementation and optimization',
    ],
    technicalEnvironment:
      'Vanilla JS, Typescript, ReactJS, React-Native, NextJS, Redux, NodeJS, Algolia, React-Testing-Library, Typescript, Bitrise, PostgresSQL, Heroku, Docker, Stripe, storybook',
  },
  {
    job: 'Developer Fullstack',
    compagny: 'OUI.SNCF',
    period: 'June 2017 - March 2020',
    project:
      'Development of the INOUI on-board WIFI connection portal. Give passengers access to WIFI using their reservation information, provide information on the journey in progress (train location, arrival time, bot assistance, current disruption, etc.), entertain (games, videos, passenger chat).',
    activities: [
      'Development of new functionalities (front-end/backend)',
      'Participation in the study and estimation of new functionalities',
      'Participation in the implementation of best practices (strict typing, linters, code checker, tests)',
      'Occasional agile ceremony facilitation',
    ],
    technicalEnvironment: 'Vanilla JS, ReactJS, Redux, Flow, Jest, LESS, NodeJS, socket.io, Webpack',
  },
  {
    job: 'Developer Frontend',
    compagny: 'LYRIA',
    period: 'June 2016 - June 2017',
    project:
      'Development of the LYRIA website, enabling passengers to manage their train ticket reservations (travel information, exchange, payment), and their passenger account.',
    activities: [
      'Development of new functionalities (front-end/backend)',
      'Participation in the study and estimation of new functionalities',
      'Participation in the implementation of best practices (strict typing, linters, code checker, tests)',
      'Occasional agile ceremony facilitation',
      'Analysis and definition of new website design',
    ],
    technicalEnvironment: 'Vanilla JS, AngularJS, SASS, NodeJS, Karma, Gulp',
  },
];

export const Experiences: React.FC = () => {
  const { setScrollPosition } = useContext(ScrollContext);
  const experiencesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = experiencesRef.current?.scrollTop || 0;
      setScrollPosition?.(scrollPosition);
    };

    experiencesRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      experiencesRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollPosition]);

  return (
    <div className='Experiences' ref={experiencesRef}>
      {/* <h2 className='Experiences__Title'>PROFESSIONAL EXPERIENCES</h2> */}
      {EXPERIENCES.map((exp) => (
        <div className='Experiences__Content' key={exp.period}>
          <p className='Experiences__Content__Company'>
            {exp.compagny} <span className='Experiences__Content__Company__Period'>{exp.period}</span>
          </p>
          <p className='Experiences__Content__Job'>{exp.job}</p>
          <p className='Experiences__Content__Project'>{exp.project}</p>
          <p className='Experiences__Content__Activities'>
            <span className='Experiences__Content__Activities__Title'>Activities:</span>
            <ul>
              {exp.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </p>
          <div className='Experiences__Content__TechnicalEnvironment'>
            <span className='Experiences__Content__TechnicalEnvironment__Title'>Technical environment:</span>
            <p> {exp.technicalEnvironment} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
