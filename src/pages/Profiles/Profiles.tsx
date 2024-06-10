import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Profile } from '@/types';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';

import './Profiles.scss';

export const Profiles: FC = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/data/users.json');
        setUsers(response.data);
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="profiles-container">
      <h1 className="profiles-title">{t('Profiles')}</h1>
      <div className="profiles">
        {users.map((user) => (
          <div className="profile-card" key={user.id}>
            <img src={user.image} alt={user.username} />
            <div className="profile-card-content">
              <h2 className="profile-username">{user.username}</h2>
              <p className="profile-email">{user.email}</p>
              <Link className="profile-button" to={`/profile/${user.id}`}>
                {t('View Profile')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
