import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { LangSwitcher } from '@/components/LangSwitcher';
import { Logout } from '@/components/Logout/Logout';
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';

const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Verify = lazy(() => import('./pages/Verify'));

function App() {
  return (
    <>
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
      </Routes>

      <LangSwitcher />
      <Logout />
    </>
  );
}

export default App;
