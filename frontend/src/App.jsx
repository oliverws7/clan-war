import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('loading');

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setCurrentView('dashboard');
    } else {
      setCurrentView('landing');
    }
  }, []);

  const navigateTo = (view) => {
    if (view === 'landing' || view === 'login') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    setCurrentView(view);
  };

  if (currentView === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 font-black uppercase tracking-widest text-slate-400 animate-pulse">
        Carregando Sessão...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {currentView === 'landing' && <LandingPage onNavigate={navigateTo} />}
      {currentView === 'login' && <LoginPage onNavigate={navigateTo} />}
      {currentView === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
    </div>
  );
}
