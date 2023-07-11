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

  return (
    <div className="LanguageSwitcher">
      <button
        className={classNames('LanguageSwitcher__CTA', {
          '--active': locale === LANGUAGES.FR,
        })}
        aria-label="Switch to french"
        onClick={() => setLocale(LANGUAGES.FR)}
      >
        <FrIcon />
      </button>
      <button
        className={classNames('LanguageSwitcher__CTA', {
          '--active': locale === LANGUAGES.EN,
        })}
        aria-label="Switch to english"
        onClick={() => setLocale(LANGUAGES.EN)}
      >
        <EnIcon />
      </button>
    </div>
  );
};
