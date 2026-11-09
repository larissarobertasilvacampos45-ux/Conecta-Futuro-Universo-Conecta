import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { CreativeProject } from '../../types';
import {
  FlaskConical,
  Sparkles,
  Play,
  Code2,
  Gamepad2,
  Layout,
  BookOpen,
  Bot,
  X,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

export const CreativeLab: React.FC = () => {
  const { projects, triggerToast } = useApp();
  const [filter, setFilter] = useState<'all' | 'concluido' | 'em_andamento' | 'explorar'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<CreativeProject | null>(null);

  // Interactive Mini-Game state for "Corrida Espacial Cósmica"
  const [gameScore, setGameScore] = useState(0);
  const [gamePlaying, setGamePlaying] = useState(false);
  const [shipX, setShipX] = useState(50); // percentage
  const [starsCollected, setStarsCollected] = useState(0);

  // Web Builder preview state for "Meu Cartão Web"
  const [cardTitle, setCardTitle] = useState('Alex Conector');
  const [cardThemeColor, setCardThemeColor] = useState('#6546D7');
  const [cardBio, setCardBio] = useState('Explorador de Lógica e Futuro Engenheiro de IA');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  const handleCollectStar = () => {
    setStarsCollected((prev) => prev + 1);
    setGameScore((prev) => prev + 25);
    triggerToast('Estrela Coletada!', '+25 pontos de energia!', 'xp');
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER WITH CREATIVE LAB WORKSHOP BANNER */}
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1B1742] via-[#141130] to-[#262159] border border-[#262159]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#35C8D5]/15 border border-[#35C8D5]/30 text-xs text-[#35C8D5] font-semibold">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Espaço Maker & Inovação</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Laboratório Criativo
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Aqui o conhecimento vira criação! Explore protótipos de jogos, páginas web, histórias interativas e experimentos com IA desenvolvidos para consolidar suas descobertas.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#262159] bg-[#0E0C22] shadow-xl">
              <img
                src="/src/assets/images/creative_lab_showcase_1794257417496.jpg"
                alt="Laboratório Criativo do Universo Conecta"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex border-b border-[#262159] gap-2 pb-1 text-xs font-semibold">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl transition-all ${
            filter === 'all'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Todos os Projetos ({projects.length})
        </button>
        <button
          onClick={() => setFilter('em_andamento')}
          className={`px-4 py-2 rounded-xl transition-all ${
            filter === 'em_andamento'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Em Andamento
        </button>
        <button
          onClick={() => setFilter('concluido')}
          className={`px-4 py-2 rounded-xl transition-all ${
            filter === 'concluido'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Concluídos
        </button>
        <button
          onClick={() => setFilter('explorar')}
          className={`px-4 py-2 rounded-xl transition-all ${
            filter === 'explorar'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Para Explorar
        </button>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-3xl bg-[#141130] border border-[#262159] hover:border-[#6546D7] transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[10px] font-bold text-[#35C8D5] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#1B1742] text-slate-300">
                  {project.difficulty}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-[#FFD45C] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#0E0C22] text-slate-400 border border-[#262159]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#262159] space-y-3">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Status</span>
                <span className="capitalize font-medium text-slate-200">
                  {project.status === 'concluido' ? '✓ Concluído' : project.status === 'em_andamento' ? 'Em Criação (65%)' : 'Pronto para Iniciar'}
                </span>
              </div>

              <button
                onClick={() => setActiveProjectModal(project)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Explorar Projeto & Testar Demo</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE RUNNABLE PROJECT MODAL */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#141130] border border-[#262159] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#262159]"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold text-[#35C8D5] uppercase tracking-wider">
                {activeProjectModal.category} · Demonstração Interativa
              </span>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                {activeProjectModal.title}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                {activeProjectModal.description}
              </p>
            </div>

            {/* DEMO 1: SPACE RUNNER MINI-GAME */}
            {activeProjectModal.interactiveType === 'game' && (
              <div className="p-4 rounded-2xl bg-[#090714] border border-[#262159] space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white">Pontuação: <strong className="text-[#FFD45C] font-mono">{gameScore}</strong></span>
                    <span className="text-slate-400">Estrelas: <strong className="text-[#35C8D5] font-mono">{starsCollected}</strong></span>
                  </div>
                  <button
                    onClick={() => { setGameScore(0); setStarsCollected(0); }}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Resetar
                  </button>
                </div>

                {/* Game Canvas Area */}
                <div className="relative h-48 rounded-xl bg-gradient-to-b from-[#0E0C22] to-[#1B1742] border border-[#262159] overflow-hidden flex flex-col justify-between p-4">
                  {/* Floating Stars */}
                  <div className="flex justify-around items-center pt-2">
                    <button
                      onClick={handleCollectStar}
                      className="text-2xl hover:scale-125 transition-transform animate-pulse cursor-pointer"
                      title="Clique para coletar!"
                    >
                      ⭐
                    </button>
                    <button
                      onClick={handleCollectStar}
                      className="text-2xl hover:scale-125 transition-transform animate-bounce cursor-pointer [animation-delay:0.3s]"
                      title="Clique para coletar!"
                    >
                      ✨
                    </button>
                    <button
                      onClick={handleCollectStar}
                      className="text-2xl hover:scale-125 transition-transform animate-pulse cursor-pointer [animation-delay:0.6s]"
                      title="Clique para coletar!"
                    >
                      🌟
                    </button>
                  </div>

                  {/* Player Ship */}
                  <div className="flex flex-col items-center">
                    <div
                      className="text-3xl transition-all duration-200"
                      style={{ transform: `translateX(${(shipX - 50) * 2}px)` }}
                    >
                      🚀
                    </div>
                  </div>
                </div>

                {/* Ship Controls */}
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setShipX((prev) => Math.max(10, prev - 15))}
                    className="flex-1 py-2 rounded-xl bg-[#1B1742] text-xs font-semibold text-white hover:bg-[#262159]"
                  >
                    ◀ Desviar para Esquerda
                  </button>
                  <button
                    onClick={() => setShipX((prev) => Math.min(90, prev + 15))}
                    className="flex-1 py-2 rounded-xl bg-[#1B1742] text-xs font-semibold text-white hover:bg-[#262159]"
                  >
                    Desviar para Direita ▶
                  </button>
                </div>
              </div>
            )}

            {/* DEMO 2: WEB CARD CUSTOMIZER */}
            {activeProjectModal.interactiveType === 'builder' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Seu Nome Cósmico</label>
                    <input
                      type="text"
                      value={cardTitle}
                      onChange={(e) => setCardTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0E0C22] border border-[#262159] rounded-xl text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Cor do Escudo</label>
                    <div className="flex gap-2">
                      {['#6546D7', '#246BFD', '#35C8D5', '#FFD45C', '#FF8978'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setCardThemeColor(c)}
                          className="w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110"
                          style={{
                            backgroundColor: c,
                            borderColor: cardThemeColor === c ? '#FFFFFF' : 'transparent'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Sua Bio de Explorador</label>
                  <input
                    type="text"
                    value={cardBio}
                    onChange={(e) => setCardBio(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0E0C22] border border-[#262159] rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>

                {/* Live Preview Card */}
                <div
                  className="p-6 rounded-2xl border text-center space-y-2 shadow-xl transition-all"
                  style={{
                    backgroundColor: '#0E0C22',
                    borderColor: cardThemeColor
                  }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-xl bg-white/10">
                    🧑‍🚀
                  </div>
                  <h3 className="text-base font-bold text-white">{cardTitle}</h3>
                  <p className="text-xs text-slate-300">{cardBio}</p>
                  <span
                    className="inline-block text-[10px] font-bold px-3 py-1 rounded-full text-white mt-2"
                    style={{ backgroundColor: cardThemeColor }}
                  >
                    Estudante Conecta Futuro
                  </span>
                </div>
              </div>
            )}

            {/* DEMO 3: DEFAULT CODE & PROMPT DEMOS */}
            {(activeProjectModal.interactiveType === 'code' || activeProjectModal.interactiveType === 'prompt') && (
              <div className="p-4 rounded-2xl bg-[#090714] border border-[#262159] space-y-3 font-mono text-xs">
                <div className="text-slate-400 text-[10px] pb-2 border-b border-[#262159]">
                  // Visualizador de Protótipo e Algoritmo
                </div>
                <pre className="text-[#35C8D5] whitespace-pre-wrap leading-relaxed">
{`const projeto = {
  nome: "${activeProjectModal.title}",
  dificuldade: "${activeProjectModal.difficulty}",
  status: "Pronto para expandir no próximo módulo!"
};

console.log("Iniciando simulação interativa...");`}
                </pre>
              </div>
            )}

            <div className="flex justify-end pt-3 border-t border-[#262159]">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#262159] hover:bg-[#6546D7] rounded-xl transition-colors"
              >
                Fechar Demonstração
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
