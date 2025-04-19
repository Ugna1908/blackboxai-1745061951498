import React from 'react';
import { Routes, Route } from 'react-router-dom';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/Authentication/LoginForm';
import RegisterForm from './components/Authentication/RegisterForm';

const Home = () => <h1>Welcome to Resume Builder Platform</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      {/* Future routes for Resume Builder, Dashboard, etc. */}
      <Route path="/resume-builder" element={<ResumeBuilderWizard />} />
    </Routes>
  );
}

export default App;
