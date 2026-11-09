import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Code2,
  Clock,
  HelpCircle,
  Play,
  RotateCcw,
  Bot
} from 'lucide-react';

export const LessonPlayer: React.FC = () => {
  const { tracks, activeTrackId, activeLessonId, completeLesson, navigateTo, student } = useApp();

  const track = tracks.find((t) => t.id === activeTrackId) || tracks[0];
  const allLessons = track.modules.flatMap((m) => m.lessons);
  const currentLessonIndex = allLessons.findIndex((l) => l.id === activeLessonId);
  const lesson = allLessons[currentLessonIndex >= 0 ? currentLessonIndex : 0];

  // Quiz state
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'content' | 'quiz' | 'example'>('content');

  if (!lesson) {
    return (
      <div className="p-8 text-center text-white space-y-4">
        <p>Nenhuma aula encontrada.</p>
        <button
          onClick={() => navigateTo('school')}
          className="px-4 py-2 bg-[#6546D7] rounded-xl text-xs font-semibold"
        >
          Voltar para Escola de Tecnologia
        </button>
      </div>
    );
  }

  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const handleCompleteLesson = () => {
    completeLesson(lesson.id, track.id, 50);
  };

  const handleNext = () => {
    if (nextLesson) {
      navigateTo('lesson', { trackId: track.id, lessonId: nextLesson.id });
      setSelectedQuizAnswer(null);
      setQuizSubmitted(false);
      setActiveTab('content');
    } else {
      navigateTo('school');
    }
  };

  const handlePrev = () => {
    if (prevLesson) {
      navigateTo('lesson', { trackId: track.id, lessonId: prevLesson.id });
      setSelectedQuizAnswer(null);
      setQuizSubmitted(false);
      setActiveTab('content');
    }
  };

  const isQuizCorrect =
    lesson.content.quiz && selectedQuizAnswer === lesson.content.quiz.correctAnswerIndex;

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      {/* TOP BREADCRUMB / NAV BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#141130] border border-[#262159]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo('school')}
            className="p-2 rounded-xl bg-[#1B1742] hover:bg-[#262159] text-slate-300 hover:text-white transition-colors"
            title="Voltar para a Escola de Tecnologia"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#35C8D5] block">
              {track.title}
            </span>
            <h1 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
              {lesson.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {lesson.completed ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Aula Concluída (+50 XP)
            </span>
          ) : (
            <button
              onClick={handleCompleteLesson}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0E0C22] bg-[#FFD45C] hover:bg-[#ffe082] shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concluir Aula (+50 XP)</span>
            </button>
          )}

          <button
            onClick={() => navigateTo('professor-ai')}
            className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-[#1B1742] hover:bg-[#262159] border border-[#262159] transition-colors flex items-center gap-1.5"
            title="Tirar dúvida com o Professor IA"
          >
            <Bot className="w-3.5 h-3.5 text-[#35C8D5]" />
            <span className="hidden sm:inline">Dúvida com IA</span>
          </button>
        </div>
      </div>

      {/* 2-COLUMN LAYOUT: LESSON CONTENT (COL 8) + MODULE CURRICULUM (COL 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Content Card with Tabs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141130] border border-[#262159] space-y-6">
            
            {/* Nav Tabs inside lesson */}
            <div className="flex border-b border-[#262159] pb-3 gap-4 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('content')}
                className={`pb-1 transition-colors ${
                  activeTab === 'content'
                    ? 'text-[#35C8D5] border-b-2 border-[#35C8D5]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Conteúdo Teórico & Ideia Central
              </button>
              {lesson.content.practicalExampleCode && (
                <button
                  onClick={() => setActiveTab('example')}
                  className={`pb-1 transition-colors ${
                    activeTab === 'example'
                      ? 'text-[#35C8D5] border-b-2 border-[#35C8D5]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Exemplo Prático
                </button>
              )}
              {lesson.content.quiz && (
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`pb-1 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'quiz'
                      ? 'text-[#FFD45C] border-b-2 border-[#FFD45C]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Desafio Rápido (Quiz)</span>
                  <span className="text-[10px] bg-[#FFD45C]/20 text-[#FFD45C] px-1.5 py-0.5 rounded-full">
                    1 Pergunta
                  </span>
                </button>
              )}
            </div>

            {/* TAB: CONTENT */}
            {activeTab === 'content' && (
              <div className="space-y-6 leading-relaxed text-slate-200">
                {/* Intro Callout */}
                <div className="p-4 rounded-2xl bg-[#1B1742]/70 border border-[#262159] text-sm text-slate-200">
                  <p className="font-medium">{lesson.content.intro}</p>
                </div>

                {/* Theory Points */}
                <div className="space-y-4 text-sm sm:text-base">
                  {lesson.content.theory.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="p-5 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD45C] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pontos Fundamentais para Lembrar:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {lesson.content.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#35C8D5] mt-1 shrink-0">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: PRACTICAL EXAMPLE */}
            {activeTab === 'example' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">
                  {lesson.content.practicalExampleTitle || 'Demonstração Interativa'}
                </h4>
                <div className="rounded-2xl bg-[#090714] border border-[#262159] p-4 font-mono text-xs text-[#35C8D5] overflow-x-auto">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#262159] text-slate-500 text-[10px]">
                    <span>// Código de Exemplo</span>
                    <span className="uppercase">{lesson.content.practicalExampleLanguage || 'código'}</span>
                  </div>
                  <pre className="leading-relaxed whitespace-pre-wrap">
                    {lesson.content.practicalExampleCode}
                  </pre>
                </div>
                <p className="text-xs text-slate-400">
                  Você pode testar esse padrão mental no Laboratório Criativo ou perguntar variações para o Professor IA!
                </p>
              </div>
            )}

            {/* TAB: QUIZ CHALLENGE */}
            {activeTab === 'quiz' && lesson.content.quiz && (
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD45C] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Desafio de Fixação</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {lesson.content.quiz.question}
                </h3>

                <div className="space-y-2.5">
                  {lesson.content.quiz.options.map((option, idx) => {
                    const isSelected = selectedQuizAnswer === idx;
                    const isCorrect = idx === lesson.content.quiz?.correctAnswerIndex;

                    let btnStyle = 'bg-[#1B1742]/50 border-[#262159] text-slate-200 hover:bg-[#1B1742]';
                    if (quizSubmitted) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                      } else if (isSelected) {
                        btnStyle = 'bg-[#FF8978]/20 border-[#FF8978] text-[#FF8978]';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-[#6546D7]/40 border-[#6546D7] text-white';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (!quizSubmitted) setSelectedQuizAnswer(idx);
                        }}
                        className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {quizSubmitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <button
                    disabled={selectedQuizAnswer === null}
                    onClick={() => {
                      setQuizSubmitted(true);
                      if (selectedQuizAnswer === lesson.content.quiz?.correctAnswerIndex) {
                        handleCompleteLesson();
                      }
                    }}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                      selectedQuizAnswer !== null
                        ? 'bg-gradient-to-r from-[#6546D7] to-[#246BFD] text-white shadow-lg cursor-pointer'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Verificar Minha Resposta
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-3">
                    <p
                      className={`text-xs font-bold ${
                        isQuizCorrect ? 'text-emerald-400' : 'text-[#FF8978]'
                      }`}
                    >
                      {isQuizCorrect ? '🎉 Resposta Correta! Excelente reflexão!' : 'Quase lá! Tente refletir sobre a explicação abaixo:'}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lesson.content.quiz.explanation}
                    </p>
                    {!isQuizCorrect && (
                      <button
                        onClick={() => {
                          setQuizSubmitted(false);
                          setSelectedQuizAnswer(null);
                        }}
                        className="py-1.5 px-3 rounded-lg bg-[#1B1742] text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Tentar Novamente</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* PREV / NEXT NAVIGATION CONTROLS */}
            <div className="flex items-center justify-between pt-6 border-t border-[#262159] gap-4">
              <button
                disabled={!prevLesson}
                onClick={handlePrev}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                  prevLesson
                    ? 'bg-[#1B1742] hover:bg-[#262159] text-slate-200 cursor-pointer'
                    : 'bg-slate-900 text-slate-600 cursor-not-allowed'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Aula Anterior</span>
              </button>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{nextLesson ? 'Próxima Aula' : 'Concluir Módulo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Sidebar Curriculum Tree (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-5 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#35C8D5]">
                {track.levelName}
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">{track.title}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {allLessons.filter((l) => l.completed).length} de {allLessons.length} aulas concluídas
              </p>
            </div>

            {/* Track Progress Bar */}
            <div className="h-1.5 w-full bg-[#0E0C22] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6546D7] to-[#35C8D5] rounded-full transition-all"
                style={{
                  width: `${Math.round(
                    (allLessons.filter((l) => l.completed).length / allLessons.length) * 100
                  )}%`
                }}
              />
            </div>

            {/* Modules and Lessons Tree */}
            <div className="space-y-4 pt-2">
              {track.modules.map((mod) => (
                <div key={mod.id} className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {mod.title}
                  </h4>
                  <div className="space-y-1.5">
                    {mod.lessons.map((les) => {
                      const isCurrent = les.id === lesson.id;
                      return (
                        <button
                          key={les.id}
                          onClick={() => {
                            navigateTo('lesson', { trackId: track.id, lessonId: les.id });
                            setSelectedQuizAnswer(null);
                            setQuizSubmitted(false);
                            setActiveTab('content');
                          }}
                          className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isCurrent
                              ? 'bg-[#6546D7] text-white font-semibold shadow-md'
                              : 'bg-[#0E0C22] text-slate-300 hover:bg-[#1B1742] hover:text-white border border-[#262159]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            {les.completed ? (
                              <CheckCircle2
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  isCurrent ? 'text-white' : 'text-emerald-400'
                                }`}
                              />
                            ) : (
                              <div
                                className={`w-3.5 h-3.5 rounded-full border shrink-0 ${
                                  isCurrent ? 'border-white' : 'border-slate-600'
                                }`}
                              />
                            )}
                            <span className="truncate">{les.title}</span>
                          </div>
                          <span className={`text-[10px] ${isCurrent ? 'text-white/80' : 'text-slate-500'}`}>
                            {les.durationMin}m
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
