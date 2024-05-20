import { useState } from 'react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { TErrorMessage, TAuth } from '@/types';
import axios from '@/config/axiosConfig';

import styles from './SignUp.module.scss';

export const SignUp = () => {
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TAuth>();
  const navigate = useNavigate();

  const onSubmit = async (data: TAuth) => {
    try {
      await axios.post('/auth/signup', data);
      setError('');
      navigate('/verify');
    } catch (error) {
      const err = error as AxiosError<TErrorMessage>;

      setError(err.response?.data.message ?? '');
    }
  };

  return (
    <div className={styles.signUp}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        { error && <p>{error}</p> }
        <input type="email" {...register('email')} />
        <input {...register('password')} />
        <input {...register('username')} />

        <button type="submit">{t('SignUp')}</button>
      </form>
    </div>
  );
};
