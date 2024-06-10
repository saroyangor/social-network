import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { Logout } from '@/components/Logout';
import { Loading } from '@/components/Loading';
import { LangSwitcher } from '@/components/LangSwitcher';

// import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';

const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Verify = lazy(() => import('./pages/Verify'));
const Profiles = lazy(() => import('./pages/Profiles'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={(
            // <ProtectedRoute>
            <HomePage />
            // </ProtectedRoute>
        )}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<Verify />} />
        <Route
          path="/profiles"
          element={(
            // <ProtectedRoute>
            <Profiles />
            // </ProtectedRoute>
        )}
        />
        <Route
          path="profile/:id"
          element={(
            // <ProtectedRoute>
            <ProfilePage />
            // </ProtectedRoute>
        )}
        />
      </Routes>

      <LangSwitcher />
      <Logout />
    </Suspense>
  );
}

export default App;
