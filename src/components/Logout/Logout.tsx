import { useTranslation } from 'react-i18next';

export const Logout = () => {
  const { t } = useTranslation();
  const onLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <button type="button" onClick={onLogout}>{t('Logout')}</button>
  );
};
