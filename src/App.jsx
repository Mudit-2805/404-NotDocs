import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './pages/SignInPage';
import Dashboard from './pages/DashboardPage';
import Diagnosis from './pages/DiagnosisPage';
import Pharmacy from './pages/PharmacyPage';
import Consultant from './pages/ConsultantPage';
import Profile from './pages/ProfilePage';
import ProtectedRoute from './components/common/ProtectedRoute';
import './styles/global.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/diagnosis" element={
              <ProtectedRoute>
                <Diagnosis />
              </ProtectedRoute>
            } />
            <Route path="/pharmacy" element={
              <ProtectedRoute>
                <Pharmacy />
              </ProtectedRoute>
            } />
            <Route path="/consultant" element={
              <ProtectedRoute>
                <Consultant />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;