import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Compass, Shield, UserCircle, ChevronDown, LogOut } from 'lucide-react';
import { UserRole } from '../../types';

export const Navbar: React.FC = () => {
  const { currentView, navigateTo, openAuthModal, userRole, setUserRole, student } = useApp();
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const isPublicLanding = currentView === 'landing';

  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole);
    setRoleMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#262159]/80 bg-[#0E0C22]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Brand Wordmark (Single element) */}
        <button
          onClick={() => navigateTo(userRole === 'guest' ? 'landing' : 'journey')}
          className="flex items-center gap-2.5 text-left text-white group cursor-pointer whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6546D7] via-[#246BFD] to-[#35C8D5] flex items-center justify-center shadow-md shadow-[#6546D7]/30 group-hover:scale-105 transition-transform">
            <Compass className="w-4 h-4 text-white animate-spin-slow" />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-white via-[#F5F3FF] to-[#FFD45C] bg-clip-text text-transparent">
              Conecta Futuro
            </span>
          </div>
        </button>

        {/* Zone 2: 4–5 single-line clean text links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => navigateTo('landing')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'landing' ? 'text-[#35C8D5] font-semibold' : ''
            }`}
          >
            Início
          </button>
          <button
            onClick={() => navigateTo('school')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'school' ? 'text-[#35C8D5] font-semibold' : ''
            }`}
          >
            Trilhas de Tecnologia
          </button>
          <button
            onClick={() => navigateTo('professor-ai')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'professor-ai' ? 'text-[#35C8D5] font-semibold' : ''
            }`}
          >
            Professor IA
          </button>
          <button
            onClick={() => navigateTo('quests')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'quests' ? 'text-[#35C8D5] font-semibold' : ''
            }`}
          >
            Desafios & Conquistas
          </button>
          <button
            onClick={() => navigateTo('future')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'future' ? 'text-[#35C8D5] font-semibold' : ''
            }`}
          >
            Profissões do Futuro
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action / Profile Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {isPublicLanding ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => openAuthModal('login')}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#262159]/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Entrar
              </button>
              <button
                onClick={() => {
                  setUserRole('student');
                  navigateTo('journey');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] rounded-lg shadow-md shadow-[#6546D7]/30 transition-all hover:scale-[1.02] whitespace-nowrap shrink-0"
              >
                Começar Jornada
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1B1742] border border-[#262159] hover:border-[#6546D7] transition-colors text-xs text-white"
                aria-expanded={roleMenuOpen}
              >
                <div className="w-6 h-6 rounded-md bg-[#6546D7]/40 text-[#FFD45C] flex items-center justify-center font-bold">
                  {userRole === 'student' ? '🚀' : userRole === 'educator' ? '🎓' : '🛡️'}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="font-semibold leading-none truncate max-w-[120px]">
                    {userRole === 'student' ? student.name.split(' ')[0] : userRole === 'educator' ? 'Prof. Rafael' : 'Admin Conecta'}
                  </p>
                  <p className="text-[10px] text-slate-400 capitalize">{userRole === 'student' ? `${student.xp} XP` : userRole}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </button>

              {roleMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#141130] border border-[#262159] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-2 border-b border-[#262159] mb-1">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Alternar Perfil Demo</p>
                    <p className="text-xs text-slate-300 mt-0.5">Explore as 3 visões do sistema:</p>
                  </div>

                  <button
                    onClick={() => handleRoleChange('student')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      userRole === 'student' ? 'bg-[#6546D7] text-white font-semibold' : 'text-slate-300 hover:bg-[#262159] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🚀</span> Estudante (Alexandre)
                    </span>
                    {userRole === 'student' && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Ativo</span>}
                  </button>

                  <button
                    onClick={() => handleRoleChange('educator')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors mt-1 ${
                      userRole === 'educator' ? 'bg-[#6546D7] text-white font-semibold' : 'text-slate-300 hover:bg-[#262159] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🎓</span> Painel do Educador
                    </span>
                    {userRole === 'educator' && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Ativo</span>}
                  </button>

                  <button
                    onClick={() => handleRoleChange('admin')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors mt-1 ${
                      userRole === 'admin' ? 'bg-[#6546D7] text-white font-semibold' : 'text-slate-300 hover:bg-[#262159] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🛡️</span> Painel do Administrador
                    </span>
                    {userRole === 'admin' && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Ativo</span>}
                  </button>

                  <div className="border-t border-[#262159] mt-2 pt-1">
                    <button
                      onClick={() => {
                        setRoleMenuOpen(false);
                        navigateTo('landing');
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-[#262159] flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Ir para Página Inicial Pública
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
