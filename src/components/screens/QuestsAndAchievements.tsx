import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Trophy,
  Sparkles,
  Award,
  CheckCircle2,
  Lock,
  Flame,
  Shield,
  FileCheck,
  X,
  ExternalLink,
  Printer
} from 'lucide-react';
import { Certificate } from '../../types';

export const QuestsAndAchievements: React.FC = () => {
  const { quests, badges, certificates, student, claimQuest, triggerToast } = useApp();
  const [activeTab, setActiveTab] = useState<'quests' | 'badges' | 'certificates' | 'levels'>('quests');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const pendingQuests = quests.filter((q) => !q.claimed);
  const completedQuests = quests.filter((q) => q.claimed);

  const levelsRoadmap = [
    { level: 1, title: 'Cadete Digital', xp: 500, perk: 'Acesso à Estação Orbital e primeiros módulos' },
    { level: 2, title: 'Explorador da Rede', xp: 1200, perk: 'Desbloqueio de temas e visor de holograma' },
    { level: 3, title: 'Criador de Códigos', xp: 2000, perk: 'Acesso ao Laboratório Criativo e mini-jogos' },
    { level: 4, title: 'Navegador Estelar (Atual)', xp: 3500, perk: 'Acesso às trilhas de Python e IA Avançada' },
    { level: 5, title: 'Comandante da Frota', xp: 5000, perk: 'Medalha cósmica e certificado de liderança' },
    { level: 6, title: 'Mestre Cósmico da IA', xp: 7500, perk: 'Mentoria estelar e projetos livres de IA' }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER / SUMMARY BAR */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262159]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD45C]/15 border border-[#FFD45C]/30 text-xs text-[#FFD45C] font-semibold mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Sistema Gamificado Inclusivo</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Desafios e Conquistas
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Aqui sua dedicação gera recompensas reais! Complete missões pedagógicas, desbloqueie medalhas e resgate certificados para comprovar seu aprendizado.
          </p>
        </div>

        {/* Total XP Highlight Card */}
        <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#141130] border border-[#262159] self-start md:self-auto">
          <div className="w-10 h-10 rounded-xl bg-[#FFD45C]/20 text-[#FFD45C] flex items-center justify-center font-bold">
            ✨
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Pontuação Total</span>
            <span className="text-lg font-extrabold font-mono text-[#FFD45C]">{student.xp} XP</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex border-b border-[#262159] gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('quests')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            activeTab === 'quests'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Missões ({pendingQuests.length} Ativas)
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            activeTab === 'badges'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Medalhas ({badges.filter((b) => b.unlocked).length}/{badges.length})
        </button>
        <button
          onClick={() => setActiveTab('certificates')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            activeTab === 'certificates'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Certificados ({certificates.length})
        </button>
        <button
          onClick={() => setActiveTab('levels')}
          className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            activeTab === 'levels'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Roteiro de Níveis
        </button>
      </div>

      {/* TAB 1: MISSIONS / QUESTS */}
      {activeTab === 'quests' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quests.map((quest) => {
              const isReadyToClaim = quest.completed && !quest.claimed;

              return (
                <div
                  key={quest.id}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                    quest.claimed
                      ? 'bg-[#0E0C22]/60 border-[#262159]/60 opacity-80'
                      : isReadyToClaim
                      ? 'bg-gradient-to-br from-[#1B1742] to-[#262159] border-[#FFD45C] shadow-lg shadow-[#FFD45C]/10'
                      : 'bg-[#141130] border-[#262159]'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#35C8D5]">
                        Missão {quest.category === 'diaria' ? 'Diária' : quest.category === 'trilha' ? 'de Trilha' : 'Especial'}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#FFD45C]">+{quest.xp} XP</span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1.5">{quest.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{quest.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#262159]/70 space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Progresso</span>
                        <span className="font-mono">
                          {quest.progress} de {quest.maxProgress}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-[#0E0C22] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            quest.claimed
                              ? 'bg-emerald-400'
                              : isReadyToClaim
                              ? 'bg-[#FFD45C]'
                              : 'bg-gradient-to-r from-[#6546D7] to-[#35C8D5]'
                          }`}
                          style={{
                            width: `${Math.min(100, (quest.progress / quest.maxProgress) * 100)}%`
                          }}
                        />
                      </div>
                    </div>

                    {quest.claimed ? (
                      <div className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-xl">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Recompensa Resgatada (+{quest.xp} XP)</span>
                      </div>
                    ) : isReadyToClaim ? (
                      <button
                        onClick={() => claimQuest(quest.id)}
                        className="w-full py-2.5 rounded-xl text-xs font-bold text-[#0E0C22] bg-[#FFD45C] hover:bg-[#ffe082] shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
                      >
                        <Sparkles className="w-4 h-4 animate-spin-slow" />
                        <span>Reivindicar Recompensa (+{quest.xp} XP)</span>
                      </button>
                    ) : (
                      <div className="py-2 text-center text-xs text-slate-400 font-medium">
                        Em andamento (continue praticando)
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: BADGES GALLERY */}
      {activeTab === 'badges' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-6 rounded-3xl border transition-all text-center flex flex-col items-center justify-between ${
                  badge.unlocked
                    ? 'bg-[#141130] border-[#6546D7]/60 shadow-lg shadow-[#6546D7]/10'
                    : 'bg-[#0E0C22]/60 border-[#262159]/40 opacity-50'
                }`}
              >
                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-md ${
                      badge.unlocked
                        ? 'bg-gradient-to-tr from-[#6546D7] via-[#246BFD] to-[#35C8D5]'
                        : 'bg-[#1B1742] text-slate-600'
                    }`}
                  >
                    {badge.unlocked ? (
                      badge.icon === 'Rocket' ? '🚀' : badge.icon === 'Shield' ? '🛡️' : badge.icon === 'Bot' ? '🤖' : badge.icon === 'Cpu' ? '💻' : badge.icon === 'Flame' ? '🔥' : '✨'
                    ) : (
                      <Lock className="w-6 h-6 text-slate-600" />
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1">{badge.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{badge.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#262159] w-full text-[11px]">
                  {badge.unlocked ? (
                    <span className="text-[#35C8D5] font-semibold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Desbloqueada em {badge.unlockedDate}
                    </span>
                  ) : (
                    <span className="text-slate-500 font-medium">Bloqueada</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CERTIFICATES */}
      {activeTab === 'certificates' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl bg-[#141130] border border-[#262159] hover:border-[#FFD45C]/60 transition-all space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD45C]/20 text-[#FFD45C] flex items-center justify-center text-xl shrink-0">
                    📜
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-[#0E0C22] px-2.5 py-1 rounded-md border border-[#262159]">
                    Código: {cert.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{cert.title}</h3>
                  <p className="text-xs text-[#35C8D5] font-medium mt-0.5">{cert.trackName}</p>
                </div>

                <div className="text-xs text-slate-400 space-y-1">
                  <p>Aluno(a): <strong className="text-slate-200">{cert.studentName}</strong></p>
                  <p>Carga Horária: <strong className="text-slate-200">{cert.hours} horas</strong></p>
                  <p>Emissão: <strong className="text-slate-200">{cert.issuedDate}</strong></p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#1B1742] text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262159] flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Autêntico & Verificado
                  </span>
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-[#0E0C22] bg-[#FFD45C] hover:bg-[#ffe082] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Visualizar Certificado</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: LEVELS ROADMAP */}
      {activeTab === 'levels' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Cada nível desbloqueia novos privilégios e recursos dentro do Universo Conecta:
          </p>
          <div className="space-y-3">
            {levelsRoadmap.map((lvl) => {
              const isCurrent = student.level === lvl.level;
              const isPassed = student.level > lvl.level;

              return (
                <div
                  key={lvl.level}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[#1B1742] to-[#262159] border-[#35C8D5]'
                      : isPassed
                      ? 'bg-[#141130]/60 border-[#262159]'
                      : 'bg-[#0E0C22]/40 border-[#262159]/40 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold font-display text-sm ${
                        isCurrent
                          ? 'bg-[#35C8D5] text-[#0E0C22]'
                          : isPassed
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-[#1B1742] text-slate-500'
                      }`}
                    >
                      N{lvl.level}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{lvl.title}</h4>
                        {isCurrent && (
                          <span className="text-[10px] bg-[#35C8D5]/20 text-[#35C8D5] px-2 py-0.5 rounded-full font-bold">
                            SEU NÍVEL ATUAL
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">{lvl.perk}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-[#FFD45C]">{lvl.xp} XP</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CERTIFICATE PREVIEW MODAL */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#141130] border-2 border-[#FFD45C] p-6 sm:p-10 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate layout */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0E0C22] to-[#141130] border border-[#262159] text-center space-y-5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFD45C]/20 text-[#FFD45C] text-2xl shadow-lg">
                📜
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#35C8D5]">
                  UNIVERSO CONECTA · INCLUSÃO SOCIODIGITAL
                </span>
                <h2 className="text-2xl font-extrabold font-display text-white">
                  CERTIFICADO DE RECONHECIMENTO
                </h2>
              </div>

              <p className="text-xs text-slate-300">
                Certificamos solenemente que o(a) explorador(a)
              </p>

              <h3 className="text-2xl font-extrabold text-[#FFD45C] font-display">
                {selectedCertificate.studentName}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                concluiu com êxito e dedicação exemplar as atividades e avaliações práticas da trilha de <strong>{selectedCertificate.trackName}</strong>, com carga horária de {selectedCertificate.hours} horas de formação tecnológica.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-2">
                {selectedCertificate.skills.map((s, idx) => (
                  <span key={idx} className="text-[10px] px-2.5 py-1 rounded-full bg-[#1B1742] text-slate-300 border border-[#262159]">
                    ✦ {s}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-[#262159] flex items-center justify-between text-[11px] text-slate-400">
                <span>Data: {selectedCertificate.issuedDate}</span>
                <span className="font-mono text-emerald-400">Autenticação: {selectedCertificate.code}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Fechar
              </button>
              <button
                onClick={() => triggerToast('Impressão Solicitada', 'Preparando versão para download ou impressão.', 'success')}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0E0C22] bg-[#FFD45C] hover:bg-[#ffe082] flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / Salvar PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
