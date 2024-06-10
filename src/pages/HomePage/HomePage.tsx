// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/profiles">Go to Profiles</Link>
  </div>
);
