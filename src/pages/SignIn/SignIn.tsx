import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';

import type { TAuth, TErrorMessage } from '@/types';
import axios from '@/config/axiosConfig';

import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TAuth>();

  const onSubmit = async (data: TAuth) => {
    try {
      const res = await axios.post('/auth/signin', data);

      setError('');
      localStorage.setItem('token', res.data.meta.token);
    } catch (error) {
      const err = error as AxiosError<TErrorMessage>;

      setError(err.response?.data.message ?? '');
    }
  };

  return (
    <div className={styles.signIn}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {
          error && <p>{error}</p>
        }
        <input type="email" {...register('email')} />
        <input {...register('password')} />
        <input {...register('username')} />

        <button type="submit">{t('SignIn')}</button>
      </form>
    </div>
  );
};
