import React from 'react';
import FrIcon from '../../../public/fr.svg';
import EnIcon from '../../../public/en.svg';
import { useT } from 'talkr';
import classNames from 'classnames';

enum LANGUAGES {
  EN = 'en',
  FR = 'fr',
}

export const LanguageSwitcher: React.FC = () => {
  const { setLocale, locale } = useT();
  console.log(locale);
  return (
    <div className="LanguageSwitcher">
      <button
        className={classNames('LanguageSwitcher__CTA', {
          '--active': locale === LANGUAGES.FR,
        })}
        onClick={() => setLocale(LANGUAGES.FR)}
      >
        <FrIcon />
      </button>
      <button
        className={classNames('LanguageSwitcher__CTA', {
          '--active': locale === LANGUAGES.EN,
        })}
        onClick={() => setLocale(LANGUAGES.EN)}
      >
        <EnIcon />
      </button>
    </div>
  );
};
