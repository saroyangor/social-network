import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Profile } from '@/types';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';

export const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/data/users.json');
        const users: Profile[] = response.data;
        const foundUser = users.find((user) => user.id === id);
        if (!foundUser) {
          setError('User not found');
        } else {
          setUser(foundUser);
        }
      } catch (error) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!user) {
    return <p>No user found</p>;
  }

  return (
    <div>
      <h1>{t('Profile Page')}</h1>
      <img src={user.image} alt={user.username} width="200" height="200" />
      <h2>{user.username}</h2>
      <p>{user.info}</p>
    </div>
  );
};
