import { ScrollContext } from '@/pages/_app';
import React, { useContext, useEffect, useRef } from 'react';
import { useT } from 'talkr';

export const Experiences: React.FC = () => {
  const { setScrollPosition } = useContext(ScrollContext);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const { T } = useT();

  const EXPERIENCES = [
    {
      job: T('skeepers.job'),
      compagny: T('skeepers.compagny'),
      period: T('skeepers.period'),
      project: T('skeepers.project'),
      activities: [
        T('skeepers.activities.1'),
        T('skeepers.activities.2'),
        T('skeepers.activities.3'),
        T('skeepers.activities.4'),
      ],
      technicalEnvironment: T('skeepers.technicalEnvironment'),
    },
    {
      job: T('decathlon.job'),
      compagny: T('decathlon.compagny'),
      period: T('decathlon.period'),
      project: T('decathlon.project'),
      activities: [
        T('decathlon.activities.1'),
        T('decathlon.activities.2'),
        T('decathlon.activities.3'),
        T('decathlon.activities.4'),
        T('decathlon.activities.5'),
        T('decathlon.activities.6'),
        T('decathlon.activities.7'),
        T('decathlon.activities.8'),
      ],
      technicalEnvironment: T('decathlon.technicalEnvironment'),
    },
    {
      job: T('sncf.job'),
      compagny: T('sncf.compagny'),
      period: T('sncf.period'),
      project: T('sncf.project'),
      activities: [
        T('sncf.activities.1'),
        T('sncf.activities.2'),
        T('sncf.activities.3'),
        T('sncf.activities.4'),
      ],
      technicalEnvironment: T('sncf.technicalEnvironment'),
    },
    {
      job: T('lyria.job'),
      compagny: T('lyria.compagny'),
      period: T('lyria.period'),
      project: T('lyria.project'),
      activities: [
        T('lyria.activities.1'),
        T('lyria.activities.2'),
        T('lyria.activities.3'),
        T('lyria.activities.4'),
        T('lyria.activities.5'),
      ],
      technicalEnvironment: T('lyria.technicalEnvironment'),
    },
  ];

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
    <div className="Experiences" ref={experiencesRef}>
      {/* <h2 className='Experiences__Title'>PROFESSIONAL EXPERIENCES</h2> */}
      {EXPERIENCES.map((exp) => (
        <div className="Experiences__Content" key={exp.period}>
          <p className="Experiences__Content__Company">
            {exp.compagny}{' '}
            <span className="Experiences__Content__Company__Period">
              {exp.period}
            </span>
          </p>
          <p className="Experiences__Content__Job">{exp.job}</p>
          <p className="Experiences__Content__Project">{exp.project}</p>
          <p className="Experiences__Content__Activities">
            <span className="Experiences__Content__Activities__Title">
              Activities:
            </span>
            <ul>
              {exp.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </p>
          <div className="Experiences__Content__TechnicalEnvironment">
            <span className="Experiences__Content__TechnicalEnvironment__Title">
              Technical environment:
            </span>
            <p> {exp.technicalEnvironment} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
