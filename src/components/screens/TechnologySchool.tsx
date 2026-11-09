import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CourseTrack } from '../../types';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Clock,
  Play,
  CheckCircle2,
  Lock,
  ArrowRight,
  Filter,
  X,
  Cpu,
  Globe,
  ShieldCheck,
  Binary,
  Boxes,
  Terminal,
  Layout,
  Bot,
  MessageSquareCode,
  Compass
} from 'lucide-react';

export const TechnologySchool: React.FC = () => {
  const { tracks, navigateTo } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalTrack, setActiveModalTrack] = useState<CourseTrack | null>(null);

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      case 'ShieldCheck': return ShieldCheck;
      case 'Binary': return Binary;
      case 'Boxes': return Boxes;
      case 'Terminal': return Terminal;
      case 'Layout': return Layout;
      case 'Bot': return Bot;
      case 'MessageSquareCode': return MessageSquareCode;
      case 'Compass': return Compass;
      default: return Sparkles;
    }
  };

  const filteredTracks = tracks.filter((track) => {
    const matchLevel = selectedLevel === 'all' || track.level === selectedLevel;
    const matchCategory = selectedCategory === 'all' || track.category === selectedCategory;
    return matchLevel && matchCategory;
  });

  const handleStartOrContinue = (track: CourseTrack) => {
    const firstIncomplete = track.modules[0]?.lessons.find((l) => !l.completed) || track.modules[0]?.lessons[0];
    navigateTo('lesson', { trackId: track.id, lessonId: firstIncomplete?.id });
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262159]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6546D7]/15 border border-[#6546D7]/30 text-xs text-[#7E62E6] font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Biblioteca Espacial de Conhecimento</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Escola de Tecnologia
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Navegue pelos 4 níveis da nossa grade curricular. Cada trilha foi desenhada com linguagem clara, exemplos práticos e desafios interativos.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-mono text-white font-bold">{tracks.length}</span> Trilhas Disponíveis
        </div>
      </div>

      {/* FILTER BAR: LEVEL TABS & CATEGORIES */}
      <div className="space-y-4">
        {/* Level Segmented Control */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#141130] border border-[#262159]">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedLevel === 'all'
                ? 'bg-gradient-to-r from-[#6546D7] to-[#246BFD] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Todos os Níveis
          </button>
          <button
            onClick={() => setSelectedLevel(1)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedLevel === 1
                ? 'bg-[#35C8D5] text-[#0E0C22] font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Nível 1 · Exploradores Digitais
          </button>
          <button
            onClick={() => setSelectedLevel(2)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedLevel === 2
                ? 'bg-[#6546D7] text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Nível 2 · Criadores Digitais
          </button>
          <button
            onClick={() => setSelectedLevel(3)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedLevel === 3
                ? 'bg-[#246BFD] text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Nível 3 · Desenvolvedores
          </button>
          <button
            onClick={() => setSelectedLevel(4)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedLevel === 4
                ? 'bg-[#FF8978] text-[#0E0C22] font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Nível 4 · Inovadores com IA
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-500 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filtrar:
          </span>
          {[
            { id: 'all', label: 'Todas as Áreas' },
            { id: 'informática', label: 'Informática & Internet' },
            { id: 'lógica', label: 'Lógica & Raciocínio' },
            { id: 'programação', label: 'Programação (Blocos & Python)' },
            { id: 'ia', label: 'Inteligência Artificial & Prompts' },
            { id: 'segurança', label: 'Segurança & Privacidade' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#262159] border-[#35C8D5] text-[#35C8D5]'
                  : 'bg-[#141130] border-[#262159] text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* TRACKS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track) => {
          const Icon = getTrackIcon(track.iconName);
          const percent = Math.round((track.completedLessons / track.lessonCount) * 100);
          const isComplete = percent === 100;

          return (
            <div
              key={track.id}
              className="p-6 rounded-3xl bg-[#141130] border border-[#262159] hover:border-[#6546D7]/60 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#6546D7]/10"
            >
              <div>
                {/* Header of card: Icon + Level tag */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
                    style={{ backgroundColor: `${track.colorAccent}20`, color: track.colorAccent, border: `1px solid ${track.colorAccent}40` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Nível {track.level}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 block capitalize">
                      {track.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#35C8D5] transition-colors mb-2">
                  {track.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-5">
                  {track.description}
                </p>

                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-5">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    {track.lessonCount} aulas
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {track.durationHours}h
                  </span>
                  <span>·</span>
                  <span className="text-[#FFD45C] font-semibold">+{track.xpReward} XP</span>
                </div>
              </div>

              {/* Progress and actions */}
              <div className="pt-4 border-t border-[#262159]/70 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Progresso</span>
                    <span className={`font-mono font-semibold ${isComplete ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {percent}% {isComplete && '(Concluído)'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[#0E0C22] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isComplete ? 'bg-emerald-400' : 'bg-gradient-to-r from-[#6546D7] to-[#35C8D5]'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleStartOrContinue(track)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{percent > 0 ? (isComplete ? 'Rever Trilha' : 'Continuar Aprendendo') : 'Começar Trilha'}</span>
                  </button>

                  <button
                    onClick={() => setActiveModalTrack(track)}
                    className="py-2.5 px-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-[#1B1742] hover:bg-[#262159] border border-[#262159] transition-colors"
                  >
                    Grade
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TRACK CURRICULUM MODAL */}
      {activeModalTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#141130] border border-[#262159] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalTrack(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#262159] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 mb-6">
              <span className="text-[11px] font-bold text-[#35C8D5] uppercase tracking-wider">
                {activeModalTrack.levelName}
              </span>
              <h2 className="text-2xl font-bold font-display text-white">
                {activeModalTrack.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalTrack.description}
              </p>
            </div>

            {/* Modules and Lesson List */}
            <div className="space-y-4 mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Grade de Aulas e Atividades:
              </h3>
              {activeModalTrack.modules.map((module) => (
                <div key={module.id} className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159]">
                  <h4 className="text-sm font-bold text-white mb-3">{module.title}</h4>
                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          setActiveModalTrack(null);
                          navigateTo('lesson', { trackId: activeModalTrack.id, lessonId: lesson.id });
                        }}
                        className="p-3 rounded-xl bg-[#1B1742]/50 hover:bg-[#1B1742] border border-[#262159] hover:border-[#6546D7] transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-500 shrink-0" />
                          )}
                          <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span>{lesson.durationMin} min</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#35C8D5] group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#262159]">
              <button
                onClick={() => setActiveModalTrack(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  const trackToStart = activeModalTrack;
                  setActiveModalTrack(null);
                  handleStartOrContinue(trackToStart);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF]"
              >
                Abrir Aulas Agora
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
