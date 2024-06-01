import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchProfiles } from '@/store/profileSlice';
import { RootState } from '@/store';
import userImage from '@/assets/images/userimage.jpeg';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { profiles, loading, error } = useAppSelector((state: RootState) => state.profiles);
  // console.log(profiles);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  return (
    <div>
      <h1>Profiles</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <img src={userImage} alt="user" />
            <li key={profile.id}>{profile.username}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
