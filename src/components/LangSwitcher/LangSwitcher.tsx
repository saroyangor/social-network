import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/lib/classNames';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

/* eslint-disable react/display-name */
export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button
      type="button"
      className={classNames('', [className])}
      onClick={toggle}
    >
      {t(short ? 'Short language' : 'Language')}
    </button>
  );
});
