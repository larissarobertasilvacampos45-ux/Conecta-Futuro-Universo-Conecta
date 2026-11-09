import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Rocket,
  GraduationCap,
  Bot,
  Trophy,
  Flame,
  FlaskConical,
  Compass,
  User,
  Sparkles,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { currentView, navigateTo, student, userRole, setUserRole } = useApp();

  const navItems = [
    { id: 'journey', label: 'Minha Jornada', icon: Rocket, badge: 'Nível ' + student.level },
    { id: 'school', label: 'Escola de Tecnologia', icon: GraduationCap },
    { id: 'professor-ai', label: 'Professor IA', icon: Bot, highlight: true },
    { id: 'quests', label: 'Desafios & Conquistas', icon: Trophy, count: '3' },
    { id: 'lab', label: 'Laboratório Criativo', icon: FlaskConical },
    { id: 'future', label: 'Meu Futuro', icon: Compass },
    { id: 'profile', label: 'Meu Perfil', icon: User }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 min-h-[calc(100vh-61px)] bg-[#0E0C22] border-r border-[#262159] p-4 justify-between">
        <div className="space-y-6">
          
          {/* Mini Student Card in Sidebar */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-b from-[#1B1742] to-[#141130] border border-[#262159] shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#6546D7] to-[#246BFD] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-[10px] bg-[#0E0C22] flex items-center justify-center text-xl">
                  {student.avatar.suit === 'cadete-roxo' ? '🧑‍🚀' : '🚀'}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-[#35C8D5] font-semibold tracking-wide uppercase truncate">
                  {student.levelTitle}
                </p>
                <h3 className="text-sm font-bold text-white truncate">{student.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#FFD45C]">
                    <Sparkles className="w-3 h-3" />
                    {student.xp} XP
                  </span>
                  <span className="text-slate-500 text-[10px]">·</span>
                  <span className="flex items-center gap-0.5 text-[11px] font-semibold text-[#FF8978]">
                    <Flame className="w-3 h-3 fill-[#FF8978]" />
                    {student.streakDays}d
                  </span>
                </div>
              </div>
            </div>

            {/* XP mini bar */}
            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                <span>Rumo ao Nível {student.level + 1}</span>
                <span className="font-mono">{student.xp}/{student.nextLevelXp}</span>
              </div>
              <div className="h-1.5 w-full bg-[#262159] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#6546D7] via-[#246BFD] to-[#35C8D5] transition-all duration-500 rounded-full"
                  style={{ width: `${Math.min(100, Math.round((student.xp / student.nextLevelXp) * 100))}%` }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Menu do Explorador
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6546D7] to-[#246BFD] text-white shadow-md shadow-[#6546D7]/20'
                      : 'text-slate-300 hover:text-white hover:bg-[#1B1742]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : item.highlight
                          ? 'bg-[#35C8D5]/15 text-[#35C8D5] group-hover:bg-[#35C8D5]/25'
                          : 'bg-[#262159]/60 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>

                  {item.badge && !isActive && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#262159] text-slate-300 font-mono">
                      {item.badge}
                    </span>
                  )}
                  {item.count && !isActive && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#FFD45C]/20 text-[#FFD45C] font-semibold">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom educator / admin switchers & safe environment notice */}
        <div className="space-y-3 pt-4 border-t border-[#262159]">
          <div className="p-3 rounded-xl bg-[#141130] border border-[#262159]/70 text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5 text-[#35C8D5] font-semibold mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Ambiente Protegido</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-snug">
              Sem anúncios, sem coleta de dados privados e supervisionado pedagogicamente.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setUserRole('educator')}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#1B1742] hover:bg-[#262159] text-[10px] font-semibold text-slate-300 hover:text-white transition-colors text-center border border-[#262159]"
            >
              🎓 Educador
            </button>
            <button
              onClick={() => setUserRole('admin')}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#1B1742] hover:bg-[#262159] text-[10px] font-semibold text-slate-300 hover:text-white transition-colors text-center border border-[#262159]"
            >
              🛡️ Admin
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E0C22]/95 backdrop-blur-md border-t border-[#262159] px-2 py-2 flex items-center justify-around">
        <button
          onClick={() => navigateTo('journey')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'journey' ? 'text-[#35C8D5]' : 'text-slate-400'
          }`}
        >
          <Rocket className="w-4 h-4" />
          <span>Jornada</span>
        </button>
        <button
          onClick={() => navigateTo('school')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'school' ? 'text-[#35C8D5]' : 'text-slate-400'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Escola</span>
        </button>
        <button
          onClick={() => navigateTo('professor-ai')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'professor-ai' ? 'text-[#35C8D5]' : 'text-slate-400'
          }`}
        >
          <div className="relative">
            <Bot className="w-4 h-4 text-[#FFD45C]" />
          </div>
          <span>Tutor IA</span>
        </button>
        <button
          onClick={() => navigateTo('quests')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'quests' ? 'text-[#35C8D5]' : 'text-slate-400'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Desafios</span>
        </button>
        <button
          onClick={() => navigateTo('profile')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
            currentView === 'profile' ? 'text-[#35C8D5]' : 'text-slate-400'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Perfil</span>
        </button>
      </div>
    </>
  );
};
