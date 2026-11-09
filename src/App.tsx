import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { ToastContainer } from './components/common/ToastContainer';
import { ConfettiEffect } from './components/common/Confetti';
import { AuthModal } from './components/screens/AuthModal';

// Screens
import { LandingPage } from './components/screens/LandingPage';
import { StudentDashboard } from './components/screens/StudentDashboard';
import { TechnologySchool } from './components/screens/TechnologySchool';
import { LessonPlayer } from './components/screens/LessonPlayer';
import { ProfessorIAChat } from './components/screens/ProfessorIAChat';
import { QuestsAndAchievements } from './components/screens/QuestsAndAchievements';
import { CreativeLab } from './components/screens/CreativeLab';
import { MyFutureCareers } from './components/screens/MyFutureCareers';
import { StudentProfile } from './components/screens/StudentProfile';
import { EducatorDashboard } from './components/screens/EducatorDashboard';
import { AdminDashboard } from './components/screens/AdminDashboard';

const AppContent: React.FC = () => {
  const { currentView, confettiActive, onConfettiEnd, accessibility } = useApp();

  const isPublicLanding = currentView === 'landing';

  // Screen routing switch
  const renderScreen = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'journey':
        return <StudentDashboard />;
      case 'school':
        return <TechnologySchool />;
      case 'lesson':
        return <LessonPlayer />;
      case 'professor-ai':
        return <ProfessorIAChat />;
      case 'quests':
        return <QuestsAndAchievements />;
      case 'lab':
        return <CreativeLab />;
      case 'future':
        return <MyFutureCareers />;
      case 'profile':
        return <StudentProfile />;
      case 'educator':
        return <EducatorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <LandingPage />;
    }
  };

  const getFontSizeClass = () => {
    if (accessibility.fontSize === 'large') return 'text-[17px]';
    if (accessibility.fontSize === 'xlarge') return 'text-[19px]';
    return '';
  };

  return (
    <div
      className={`min-h-screen bg-[#0E0C22] text-slate-100 flex flex-col font-sans ${getFontSizeClass()} ${
        accessibility.highContrast ? 'contrast-125' : ''
      }`}
    >
      {/* Visual Confetti for Achievements */}
      <ConfettiEffect active={confettiActive} onComplete={onConfettiEnd} />

      {/* Floating Toast Alerts */}
      <ToastContainer />

      {/* Login & Registration Modal */}
      <AuthModal />

      {/* Top Bar Navigation (Complies with Top Bar Contract) */}
      <Navbar />

      {/* Main Body */}
      {isPublicLanding ? (
        <main className="flex-1">
          <LandingPage />
        </main>
      ) : (
        <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
          {/* Sidebar Navigation */}
          <Sidebar />

          {/* Main App Content Viewport */}
          <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {renderScreen()}
          </main>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
