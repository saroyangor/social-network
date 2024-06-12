import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Profile } from '@/types';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';

import './ProfilePage.scss';

export const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/data/users.json');
        const users: Profile[] = response.data;
        const foundUser = users.find((user) => user.id === id);
        if (!foundUser) {
          setError('User is not found');
        } else {
          setUser(foundUser);
        }
      } catch (error) {
        setError('Failed to retrieve user information');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="profile-container">
      <h1>{t('Profile page')}</h1>
      {user && (
        <>
          <img
            className="profile-image"
            src={user.image}
            alt={user.username}
            onClick={toggleImage}
          />
          <div className={`image-modal ${isImageOpen ? 'active' : ''}`} onClick={toggleImage}>
            <img
              className="modal-image"
              src={user.image}
              alt={user.username}
            />
          </div>
          <h2 className="profile-username">{user.username}</h2>
          <p className="profile-info">{t(user.info)}</p>
        </>
      )}
    </div>
  );
};
