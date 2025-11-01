import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TaskBoardPage from './pages/TaskBoardPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* The index route (default page) will be our task board.
            We'll add logic later to redirect to /login if not authenticated. */}
        <Route path="/" element={<TaskBoardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;