import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AvatarConfig } from '../../types';
import {
  User,
  Sparkles,
  Shield,
  Eye,
  Type,
  Activity,
  Award,
  CheckCircle2,
  Calendar,
  Save,
  Palette
} from 'lucide-react';

export const StudentProfile: React.FC = () => {
  const { student, updateAvatar, accessibility, updateAccessibility, badges, certificates, tracks } = useApp();

  const [suit, setSuit] = useState<AvatarConfig['suit']>(student.avatar.suit);
  const [visor, setVisor] = useState<AvatarConfig['visor']>(student.avatar.visor);
  const [pet, setPet] = useState<AvatarConfig['pet']>(student.avatar.pet);
  const [background, setBackground] = useState<AvatarConfig['background']>(student.avatar.background);

  const handleSaveAvatar = () => {
    updateAvatar({ suit, visor, pet, background });
  };

  const completedTracksCount = tracks.filter(
    (t) => t.completedLessons === t.lessonCount
  ).length;

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262159]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6546D7]/15 border border-[#6546D7]/30 text-xs text-[#7E62E6] font-semibold mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Passaporte do Explorador</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Meu Perfil Cósmico
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Personalize seu avatar de astronauta, acompanhe seu histórico de estudos e configure a acessibilidade visual da plataforma.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Idade registrada: <strong className="text-white">{student.age} anos</strong></span>
        </div>
      </div>

      {/* 2-COLUMN: AVATAR CUSTOMIZER (COL 7) + STATS & SAFETY (COL 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Avatar Customizer Studio */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#141130] border border-[#262159] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#35C8D5]" />
              <h3 className="text-base font-bold text-white">Customização do Avatar</h3>
            </div>
            <span className="text-[10px] text-slate-400">Sem foto real (100% Seguro)</span>
          </div>

          {/* Avatar Preview Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1B1742] to-[#0E0C22] border border-[#262159] flex items-center justify-center relative overflow-hidden">
            <div className="text-center space-y-3 relative z-10">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#6546D7] via-[#246BFD] to-[#35C8D5] p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-[22px] bg-[#0E0C22] flex items-center justify-center text-5xl">
                  {suit === 'cadete-roxo' ? '🧑‍🚀' : suit === 'astronauta-azul' ? '👨‍🚀' : suit === 'explorador-ciano' ? '🚀' : '👾'}
                </div>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{student.name}</h4>
                <p className="text-xs text-[#35C8D5] font-semibold">{student.levelTitle} · Nível {student.level}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Pet Acompanhante: {pet.replace('-', ' ')}</p>
              </div>
            </div>
          </div>

          {/* Customization Selectors */}
          <div className="space-y-4">
            {/* Traje Espacial */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Traje Espacial:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'cadete-roxo', label: 'Cadete Roxo' },
                  { id: 'astronauta-azul', label: 'Piloto Azul' },
                  { id: 'explorador-ciano', label: 'Explorador Ciano' },
                  { id: 'guardiao-dourado', label: 'Guardião Ouro' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSuit(s.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                      suit === s.id
                        ? 'bg-[#6546D7] border-white text-white font-bold shadow-md'
                        : 'bg-[#0E0C22] border-[#262159] text-slate-300 hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pet Companheiro */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Companheiro Cósmico:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'robo-conectinho', label: 'Robô Conectinho' },
                  { id: 'cachorro-cyber', label: 'Cyber Dog' },
                  { id: 'gato-espacial', label: 'Gato Cósmico' },
                  { id: 'drone-orb', label: 'Drone Esfera' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPet(p.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                      pet === p.id
                        ? 'bg-[#246BFD] border-white text-white font-bold shadow-md'
                        : 'bg-[#0E0C22] border-[#262159] text-slate-300 hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSaveAvatar}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Estilo do Avatar</span>
            </button>
          </div>
        </div>

        {/* Right: Stats & Accessibility Panel */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Stats Summary */}
          <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
            <h3 className="text-base font-bold text-white">Resumo da Expedição</h3>
            
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-[#0E0C22] border border-[#262159]">
                <span className="text-[10px] text-slate-400 block">Aulas Realizadas</span>
                <span className="text-xl font-extrabold text-white font-mono">{student.completedLessons}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0E0C22] border border-[#262159]">
                <span className="text-[10px] text-slate-400 block">Trilhas Concluídas</span>
                <span className="text-xl font-extrabold text-[#35C8D5] font-mono">{completedTracksCount}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0E0C22] border border-[#262159]">
                <span className="text-[10px] text-slate-400 block">Medalhas Ganhas</span>
                <span className="text-xl font-extrabold text-[#FFD45C] font-mono">{badges.filter((b) => b.unlocked).length}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0E0C22] border border-[#262159]">
                <span className="text-[10px] text-slate-400 block">Certificados</span>
                <span className="text-xl font-extrabold text-[#FF8978] font-mono">{certificates.length}</span>
              </div>
            </div>
          </div>

          {/* Accessibility Settings Panel */}
          <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#35C8D5]" />
              <h3 className="text-base font-bold text-white">Acessibilidade e Conforto</h3>
            </div>

            <div className="space-y-3">
              {/* Font Size */}
              <div>
                <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5" /> Tamanho do Texto:
                </label>
                <div className="flex gap-2">
                  {(['normal', 'large', 'xlarge'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => updateAccessibility({ fontSize: sz })}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        accessibility.fontSize === sz
                          ? 'bg-[#6546D7] border-white text-white'
                          : 'bg-[#0E0C22] border-[#262159] text-slate-400 hover:text-white'
                      }`}
                    >
                      {sz === 'normal' ? 'Padrão' : sz === 'large' ? 'Grande (+)' : 'Extra (+)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C22] border border-[#262159]">
                <div>
                  <p className="text-xs font-semibold text-white">Movimento Reduzido</p>
                  <p className="text-[10px] text-slate-400">Suaviza transições e desliga efeitos visuais</p>
                </div>
                <input
                  type="checkbox"
                  checked={accessibility.reducedMotion}
                  onChange={(e) => updateAccessibility({ reducedMotion: e.target.checked })}
                  className="rounded border-slate-700 text-[#6546D7] focus:ring-0 w-4 h-4"
                />
              </div>

              {/* High Contrast Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C22] border border-[#262159]">
                <div>
                  <p className="text-xs font-semibold text-white">Alto Contraste</p>
                  <p className="text-[10px] text-slate-400">Aumenta o contraste das bordas e textos</p>
                </div>
                <input
                  type="checkbox"
                  checked={accessibility.highContrast}
                  onChange={(e) => updateAccessibility({ highContrast: e.target.checked })}
                  className="rounded border-slate-700 text-[#6546D7] focus:ring-0 w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Privacy and Child Protection Notice */}
          <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] text-xs text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#35C8D5] font-semibold">
              <Shield className="w-4 h-4" />
              <span>Privacidade Blindada</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              O Conecta Futuro não compartilha sua identificação publicamente, não exibe anúncios e não permite mensagens diretas de estranhos. Seu aprendizado é seguro.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
