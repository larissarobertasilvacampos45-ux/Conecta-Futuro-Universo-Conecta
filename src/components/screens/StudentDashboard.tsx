import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Rocket,
  Sparkles,
  Bot,
  Play,
  Trophy,
  Flame,
  ArrowRight,
  Compass,
  CheckCircle2,
  Clock,
  Layers,
  ShieldAlert
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { student, tracks, quests, badges, navigateTo, claimQuest } = useApp();

  // Find ongoing track & next lesson
  const currentTrack = tracks.find((t) => t.id === student.currentTrackId) || tracks[0];
  let nextLesson = currentTrack?.modules[0]?.lessons.find((l) => !l.completed) || currentTrack?.modules[0]?.lessons[0];

  // Daily quest
  const recommendedQuest = quests.find((q) => !q.claimed) || quests[0];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* GREETING HERO BAR */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1B1742] via-[#141130] to-[#262159] border border-[#262159] shadow-xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#6546D7]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#35C8D5]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#35C8D5]/15 border border-[#35C8D5]/30 text-xs text-[#35C8D5] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estação Orbital Alpha</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Olá, explorador <span className="text-[#FFD45C]">{student.name.split(' ')[0]}</span>! Pronto para uma nova descoberta?
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Você está na trilha de <strong className="text-white">{currentTrack.title}</strong>. Hoje é um ótimo dia para conquistar mais 50 XP e avançar rumo ao próximo nível!
            </p>
          </div>

          {/* Quick Stat Pill Group */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-[#0E0C22]/80 border border-[#262159] text-center min-w-[90px]">
              <span className="text-xs text-slate-400 block">Nível Atual</span>
              <span className="text-xl font-extrabold text-[#35C8D5] font-display">{student.level}</span>
              <span className="text-[10px] text-slate-400 block truncate">{student.levelTitle}</span>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-[#0E0C22]/80 border border-[#262159] text-center min-w-[90px]">
              <span className="text-xs text-slate-400 block">XP Cósmico</span>
              <span className="text-xl font-extrabold text-[#FFD45C] font-mono">{student.xp}</span>
              <span className="text-[10px] text-slate-400 block">+{student.nextLevelXp - student.xp} p/ próx</span>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-[#0E0C22]/80 border border-[#262159] text-center min-w-[80px]">
              <span className="text-xs text-slate-400 block">Sequência</span>
              <span className="text-xl font-extrabold text-[#FF8978] flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 fill-[#FF8978]" />
                {student.streakDays}
              </span>
              <span className="text-[10px] text-slate-400 block">dias seguidos</span>
            </div>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="mt-6 pt-5 border-t border-[#262159]/80">
          <div className="flex justify-between text-xs text-slate-300 mb-2">
            <span className="font-semibold text-white">Progresso de Nível: {student.levelTitle}</span>
            <span className="font-mono text-[#35C8D5]">
              {student.xp} / {student.nextLevelXp} XP ({Math.round((student.xp / student.nextLevelXp) * 100)}%)
            </span>
          </div>
          <div className="h-3 w-full bg-[#0E0C22] rounded-full overflow-hidden p-0.5 border border-[#262159]">
            <div
              className="h-full bg-gradient-to-r from-[#6546D7] via-[#246BFD] to-[#35C8D5] rounded-full transition-all duration-700 shadow-md shadow-[#35C8D5]/30"
              style={{ width: `${Math.min(100, Math.round((student.xp / student.nextLevelXp) * 100))}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2-COLUMN MAIN CONTENT: NEXT ACTIVITY & DAILY MISSION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Next Lesson Card (Col 7) */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-[#141130] border border-[#262159] relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#35C8D5] flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5" />
                Continuar Onde Parou
              </span>
              <span className="text-xs text-slate-400">
                Trilha: {currentTrack.title}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {nextLesson ? nextLesson.title : 'Todas as aulas concluídas!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {nextLesson?.content.intro || 'Parabéns, você completou este módulo! Escolha uma nova trilha na Escola de Tecnologia.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {nextLesson?.durationMin || 15} minutos
              </span>
              <span>·</span>
              <span className="text-[#FFD45C] font-semibold">+50 XP ao finalizar</span>
              <span>·</span>
              <span>Inclui desafio interativo</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-[#262159]">
            <button
              onClick={() => navigateTo('lesson', { trackId: currentTrack.id, lessonId: nextLesson?.id })}
              className="flex-1 py-3 px-5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] shadow-lg shadow-[#6546D7]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Entrar na Aula Agora</span>
            </button>

            <button
              onClick={() => navigateTo('school')}
              className="py-3 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#1B1742] hover:bg-[#262159] border border-[#262159] transition-colors"
            >
              Outras Trilhas
            </button>
          </div>
        </div>

        {/* Recommended Mission & AI Shortcut (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Daily Quest Card */}
          <div className="p-5 rounded-3xl bg-[#141130] border border-[#262159] relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD45C] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                Missão Recomendada
              </span>
              <span className="text-xs font-mono font-bold text-[#FFD45C]">+{recommendedQuest.xp} XP</span>
            </div>

            <h4 className="text-sm font-bold text-white mb-1">{recommendedQuest.title}</h4>
            <p className="text-xs text-slate-300 mb-3">{recommendedQuest.description}</p>

            {/* Progress */}
            <div className="space-y-1.5 mb-3">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Progresso</span>
                <span className="font-mono">{recommendedQuest.progress}/{recommendedQuest.maxProgress}</span>
              </div>
              <div className="h-2 w-full bg-[#0E0C22] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FFD45C] rounded-full transition-all"
                  style={{ width: `${(recommendedQuest.progress / recommendedQuest.maxProgress) * 100}%` }}
                />
              </div>
            </div>

            {recommendedQuest.completed && !recommendedQuest.claimed ? (
              <button
                onClick={() => claimQuest(recommendedQuest.id)}
                className="w-full py-2 rounded-xl text-xs font-bold text-[#0E0C22] bg-[#FFD45C] hover:bg-[#ffe082] shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reivindicar +{recommendedQuest.xp} XP</span>
              </button>
            ) : (
              <button
                onClick={() => navigateTo('quests')}
                className="w-full py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#1B1742] hover:bg-[#262159] border border-[#262159] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Ver Todos os Desafios</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Shortcut to Professor IA */}
          <div className="p-4 rounded-3xl bg-gradient-to-r from-[#1B1742] to-[#262159] border border-[#262159] flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E0C22] p-1 border border-[#35C8D5]/30 shrink-0 overflow-hidden">
              <img
                src="/src/assets/images/mascot_robot_conector_1794257415788.jpg"
                alt="Conectinho Tutor IA"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Dúvidas na atividade?</span>
                <span className="w-2 h-2 rounded-full bg-[#35C8D5]" />
              </h4>
              <p className="text-[11px] text-slate-300 truncate">O Professor IA está pronto para te ajudar.</p>
            </div>
            <button
              onClick={() => navigateTo('professor-ai')}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-white bg-[#6546D7] hover:bg-[#7E62E6] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Chamar</span>
            </button>
          </div>

        </div>

      </div>

      {/* INTERACTIVE VISUAL COSMIC MAP: "MAPA DA GALÁXIA DO CONHECIMENTO" */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#141130] border border-[#262159] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#35C8D5]" />
              <h3 className="text-lg font-bold text-white font-display">
                Mapa da Galáxia do Conhecimento
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Explore os 4 quadrantes da galáxia de aprendizagem. Clique nos setores para abrir as trilhas.
            </p>
          </div>
          <span className="text-xs text-[#FFD45C] font-semibold bg-[#FFD45C]/10 border border-[#FFD45C]/20 px-3 py-1 rounded-full self-start">
            4 Setores Estelares Mapeados
          </span>
        </div>

        {/* 3D Map Visual with Interactive Sector Hotspots */}
        <div className="relative rounded-2xl overflow-hidden border border-[#262159] bg-[#0E0C22]">
          <img
            src="/src/assets/images/learning_galaxy_map_1794257416023.jpg"
            alt="Mapa Interativo dos 4 Territórios do Universo Conecta"
            className="w-full h-auto object-cover max-h-[420px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C22]/80 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive Clickable Sector Cards Placed on Map */}
          <div className="absolute inset-0 p-4 grid grid-cols-2 gap-3 sm:gap-4 pointer-events-auto">
            {/* Sector 1: Exploradores */}
            <button
              onClick={() => navigateTo('school')}
              className="p-3 sm:p-4 rounded-xl bg-[#0E0C22]/85 hover:bg-[#1B1742]/95 border border-[#35C8D5]/40 backdrop-blur-md text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold text-[#35C8D5] uppercase tracking-wider block">Setor 1</span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#35C8D5] transition-colors">
                  Exploradores Digitais
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block mt-1">
                  Hardware, internet e segurança de dados.
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span className="text-emerald-400 font-semibold">100% Concluído</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#35C8D5] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Sector 2: Criadores */}
            <button
              onClick={() => navigateTo('school')}
              className="p-3 sm:p-4 rounded-xl bg-[#0E0C22]/85 hover:bg-[#1B1742]/95 border border-[#6546D7]/60 backdrop-blur-md text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold text-[#6546D7] uppercase tracking-wider block">Setor 2</span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#7E62E6] transition-colors">
                  Criadores Digitais
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block mt-1">
                  Pensamento computacional e lógica de programação.
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span className="text-[#FFD45C] font-semibold">Em Progresso (65%)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6546D7] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Sector 3: Desenvolvedores */}
            <button
              onClick={() => navigateTo('school')}
              className="p-3 sm:p-4 rounded-xl bg-[#0E0C22]/85 hover:bg-[#1B1742]/95 border border-[#246BFD]/40 backdrop-blur-md text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold text-[#246BFD] uppercase tracking-wider block">Setor 3</span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#4D87FF] transition-colors">
                  Desenvolvedores do Futuro
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block mt-1">
                  Python, HTML, CSS e criação de sites e apps.
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span className="text-slate-400">Pronto para iniciar</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#246BFD] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Sector 4: Inovadores com IA */}
            <button
              onClick={() => navigateTo('school')}
              className="p-3 sm:p-4 rounded-xl bg-[#0E0C22]/85 hover:bg-[#1B1742]/95 border border-[#FF8978]/40 backdrop-blur-md text-left transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold text-[#FF8978] uppercase tracking-wider block">Setor 4</span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF8978] transition-colors">
                  Inovadores com IA
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-300 hidden sm:block mt-1">
                  Redes neurais, prompts, ética e projetos com IA.
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span className="text-[#FFD45C]">Nível Avançado</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF8978] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* UNLOCKED BADGES MINI PREVIEW */}
      <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white">Últimas Medalhas Conquistadas</h3>
            <p className="text-xs text-slate-400">Você já desbloqueou {badges.filter((b) => b.unlocked).length} de {badges.length} medalhas estelares.</p>
          </div>
          <button
            onClick={() => navigateTo('quests')}
            className="text-xs font-semibold text-[#35C8D5] hover:text-white transition-colors"
          >
            Ver galeria completa
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.filter((b) => b.unlocked).slice(0, 4).map((badge) => (
            <div
              key={badge.id}
              className="p-3.5 rounded-2xl bg-[#1B1742]/60 border border-[#262159] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6546D7] to-[#246BFD] flex items-center justify-center text-lg shrink-0 shadow-md">
                {badge.icon === 'Rocket' ? '🚀' : badge.icon === 'Shield' ? '🛡️' : badge.icon === 'Bot' ? '🤖' : '✨'}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-white truncate">{badge.title}</h4>
                <p className="text-[10px] text-slate-400 truncate">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
