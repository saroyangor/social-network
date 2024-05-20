import { useState } from 'react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { TErrorMessage, TVerificationCode } from '@/types';
import axios from '@/config/axiosConfig';

import styles from './Verify.module.scss';

export const Verify = () => {
  const [error, setError] = useState('');
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<TVerificationCode>();
  const navigate = useNavigate();

  const onSubmit = async (data: TVerificationCode) => {
    try {
      const token = localStorage.getItem('token');

      await axios.post('/auth/verify', data, {
        headers: {
          token,
        },
      });

      navigate('/signin');
    } catch (error) {
      const err = error as AxiosError<TErrorMessage>;

      setError(err.response?.data.message ?? '');
    }
  };

  return (
    <div className={styles.signIn}>
      { error && <p>{error}</p> }
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input {...register('code')} />

        <button type="submit">{t('Verify')}</button>
      </form>
    </div>
  );
};
