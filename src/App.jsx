import React, { useState, useEffect } from 'react';
import NetflixTitleScreen from './components/NetflixTitleScreen';
import WhoIsWatchingScreen from './components/WhoIsWatchingScreen';
import NetflixNavbar from './components/NetflixNavbar';
import RecruiterPage from './pages/RecruiterPage';
import DataAnalystPage from './pages/DataAnalystPage';
import DataScienceAIPage from './pages/DataScienceAIPage';
import ExplorerPage from './pages/ExplorerPage';
import ResearcherPage from './pages/ResearcherPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ProjectDetailModal from './components/ProjectDetailModal';
import ResumeModal from './components/ResumeModal';
import RecruiterQuickViewModal from './components/RecruiterQuickViewModal';

export default function App() {
  // Navigation State Machine: 'title' -> 'profiles' -> 'portfolio'
  const [screen, setScreen] = useState('title');
  const [currentRole, setCurrentRole] = useState('recruiter');

  // Global Modals State
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [resumeModalTab, setResumeModalTab] = useState('analyst');
  const [is30sViewOpen, setIs30sViewOpen] = useState(false);

  const handleOpenResume = (tab = 'analyst') => {
    setResumeModalTab(tab);
    setIsResumeModalOpen(true);
  };

  const handleSelectProfile = (roleId) => {
    setCurrentRole(roleId);
    setScreen('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SCREEN 1: Netflix Arched Title Screen with signature sound & zoom animation
  if (screen === 'title') {
    return (
      <NetflixTitleScreen onComplete={() => setScreen('profiles')} />
    );
  }

  // SCREEN 2: Streaming-Style "Who's Watching?" Selection (Immediate 1-Click Entry)
  if (screen === 'profiles') {
    return (
      <WhoIsWatchingScreen onSelectProfile={handleSelectProfile} />
    );
  }

  // SCREEN 3: Dedicated Role-Based Page Browsing
  return (
    <div className="min-h-screen bg-[#090B12] text-slate-100 font-sans selection:bg-red-600/30 selection:text-white antialiased">
      
      {/* Compact Sticky Top Navigation with Active Section Indicator */}
      <NetflixNavbar
        currentRole={currentRole}
        onOpenProfileSelector={() => setScreen('profiles')}
        onOpen30sFastView={() => setIs30sViewOpen(true)}
      />

      {/* Role-Specific Page View */}
      <main className="pt-16">
        {currentRole === 'recruiter' && (
          <RecruiterPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={handleOpenResume}
          />
        )}

        {currentRole === 'data-analyst' && (
          <DataAnalystPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={handleOpenResume}
          />
        )}

        {currentRole === 'data-science-ai' && (
          <DataScienceAIPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={handleOpenResume}
          />
        )}

        {currentRole === 'explorer' && (
          <ExplorerPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={handleOpenResume}
          />
        )}

        {currentRole === 'researcher' && (
          <ResearcherPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={handleOpenResume}
          />
        )}
      </main>

      {/* Clean Global Footer with Portfolio Home link */}
      <Footer onSwitchProfile={() => setScreen('profiles')} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Interactive Project Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Global 1-Page ATS Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        initialTab={resumeModalTab}
      />

      {/* Global 30s Recruiter Fast View Modal */}
      <RecruiterQuickViewModal
        isOpen={is30sViewOpen}
        onClose={() => setIs30sViewOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenResume={handleOpenResume}
      />

    </div>
  );
}
