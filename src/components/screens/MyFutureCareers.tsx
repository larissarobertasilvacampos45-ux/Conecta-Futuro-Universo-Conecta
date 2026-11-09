import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Career } from '../../types';
import {
  Compass,
  Sparkles,
  ArrowRight,
  Code2,
  Bot,
  BarChart3,
  Shield,
  Palette,
  ExternalLink,
  BookOpen,
  X,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const MyFutureCareers: React.FC = () => {
  const { careers, navigateTo } = useApp();
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const getCareerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Bot': return Bot;
      case 'BarChart3': return BarChart3;
      case 'Shield': return Shield;
      case 'Palette': return Palette;
      default: return Briefcase;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262159]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#35C8D5]/15 border border-[#35C8D5]/30 text-xs text-[#35C8D5] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Bússola de Oportunidades</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Meu Futuro · Carreiras em Tecnologia
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Descubra as profissões do presente e do amanhã. Veja o que cada profissional faz, quais ferramentas usa e encontre cursos gratuitos para iniciar hoje mesmo.
          </p>
        </div>

        <div className="text-xs text-slate-400">
          <span className="font-mono text-white font-bold">{careers.length}</span> Carreiras Mapeadas
        </div>
      </div>

      {/* CAREERS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((career) => {
          const Icon = getCareerIcon(career.icon);

          return (
            <div
              key={career.id}
              className="p-6 rounded-3xl bg-[#141130] border border-[#262159] hover:border-[#35C8D5] transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
                    style={{ backgroundColor: `${career.color}20`, color: career.color, border: `1px solid ${career.color}40` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Carreira Tech
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#35C8D5] transition-colors mb-1.5">
                  {career.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {career.subtitle}
                </p>

                {/* Everyday tools pills */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                    Ferramentas Comuns:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {career.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#0E0C22] text-slate-300 border border-[#262159]"
                      >
                        {tool}
                      </span>
                    ))}
                    {career.tools.length > 3 && (
                      <span className="text-[10px] text-slate-500 self-center">
                        +{career.tools.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#262159]">
                <button
                  onClick={() => setSelectedCareer(career)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explorar Esta Profissão</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* CAREER DETAILS MODAL / DRAWER */}
      {selectedCareer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#141130] border border-[#262159] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedCareer(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#262159]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header of Modal */}
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg"
                style={{ backgroundColor: `${selectedCareer.color}25`, color: selectedCareer.color }}
              >
                {React.createElement(getCareerIcon(selectedCareer.icon), { className: 'w-7 h-7' })}
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-white">
                  {selectedCareer.title}
                </h2>
                <p className="text-xs text-[#35C8D5] font-medium mt-0.5">
                  {selectedCareer.subtitle}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedCareer.description}
            </p>

            {/* What they do (Daily Tasks) */}
            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFD45C] flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                O que essa pessoa faz no dia a dia?
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedCareer.dailyTasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#35C8D5] mt-0.5">✓</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Habilidades Essenciais
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {selectedCareer.essentialSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6546D7]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ferramentas Principais
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedCareer.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#1B1742] text-white border border-[#262159]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#35C8D5] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Possível Roteiro de Estudos
              </h3>
              <div className="space-y-1 text-xs text-slate-300">
                {selectedCareer.studyRoadmap.map((step, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {step}
                  </p>
                ))}
              </div>
            </div>

            {/* Free courses suggestions */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#FF8978]" />
                Onde começar a estudar de graça?
              </h3>
              <div className="space-y-2">
                {selectedCareer.freeCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#1B1742]/60 border border-[#262159] flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-semibold text-white">{course.name}</p>
                      <p className="text-[11px] text-slate-400">Plataforma: {course.platform} · {course.urlText}</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#FFD45C] bg-[#FFD45C]/15 px-2 py-0.5 rounded-full">
                      {course.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#1B1742] border border-[#262159] text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Panorama no Brasil:</strong>
              {selectedCareer.marketOverview}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#262159]">
              <button
                onClick={() => setSelectedCareer(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#262159] hover:bg-[#6546D7] rounded-xl transition-colors"
              >
                Concluir Exploração
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
