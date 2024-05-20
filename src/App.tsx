import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LangSwitcher } from '@/components/LangSwitcher/LangSwitcher';

const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Verify = lazy(() => import('./pages/Verify'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>

      <LangSwitcher />
    </>
  );
}

export default App;
