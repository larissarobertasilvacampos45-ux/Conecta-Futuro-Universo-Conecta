import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Shield,
  Users,
  School,
  BookOpen,
  Award,
  Download,
  Plus,
  TrendingUp,
  BarChart,
  CheckCircle2,
  Lock,
  Layers,
  Settings,
  X
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { adminStats, tracks, triggerToast } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'tracks' | 'reports'>('overview');
  const [isAddTrackModalOpen, setIsAddTrackModalOpen] = useState(false);
  const [newTrackTitle, setNewTrackTitle] = useState('');
  const [newTrackLevel, setNewTrackLevel] = useState<number>(1);

  const handleExportReport = () => {
    triggerToast('Relatório Gerado', 'O arquivo CSV de impacto social foi exportado com sucesso.', 'success');
  };

  const handleAddTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTrackTitle.trim()) return;
    triggerToast('Trilha Publicada', `Nova trilha "${newTrackTitle}" criada e disponível no catálogo.`, 'success');
    setIsAddTrackModalOpen(false);
    setNewTrackTitle('');
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262159]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6546D7]/15 border border-[#6546D7]/30 text-xs text-[#7E62E6] font-semibold mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Centro de Controle Geral</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Painel do Administrador
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Monitoramento de impacto social, infraestrutura pedagógica, gestão de trilhas e relatórios institucionais.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportReport}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-[#1B1742] hover:bg-[#262159] border border-[#262159] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar Relatório</span>
          </button>
          <button
            onClick={() => setIsAddTrackModalOpen(true)}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nova Trilha</span>
          </button>
        </div>
      </div>

      {/* METRIC KPIS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Estudantes Inscritos</span>
            <Users className="w-4 h-4 text-[#35C8D5]" />
          </div>
          <div className="text-3xl font-extrabold font-display text-white">
            {adminStats.totalStudents.toLocaleString()}
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold">+18% no último mês</p>
        </div>

        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Escolas e ONGs Parceiras</span>
            <School className="w-4 h-4 text-[#FFD45C]" />
          </div>
          <div className="text-3xl font-extrabold font-display text-white">
            {adminStats.activeSchools}
          </div>
          <p className="text-[11px] text-slate-400">Distribuídas em 5 estados</p>
        </div>

        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Taxa de Conclusão</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-display text-emerald-400">
            {adminStats.completionRate}%
          </div>
          <p className="text-[11px] text-slate-400">Bem acima da média de cursos online (12%)</p>
        </div>

        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Índice de Impacto Social</span>
            <Award className="w-4 h-4 text-[#FF8978]" />
          </div>
          <div className="text-3xl font-extrabold font-display text-[#FF8978]">
            {adminStats.socialImpactScore}/100
          </div>
          <p className="text-[11px] text-slate-400">Avaliação de impacto comunitário</p>
        </div>
      </div>

      {/* ADMIN SECTION TABS */}
      <div className="flex border-b border-[#262159] gap-2 pb-1 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === 'overview'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Visão Geral & Indicadores
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === 'users'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Gestão de Usuários e Permissões
        </button>
        <button
          onClick={() => setActiveTab('tracks')}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === 'tracks'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Trilhas e Conteúdos ({tracks.length})
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2.5 rounded-xl transition-all ${
            activeTab === 'reports'
              ? 'bg-[#6546D7] text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-[#141130]'
          }`}
        >
          Relatórios de Aprendizagem
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
            <h3 className="text-base font-bold text-white">Distribuição por Faixa Etária</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">10 a 12 anos (Exploradores Mirins)</span>
                  <span className="font-mono text-[#35C8D5]">35% (497 alunos)</span>
                </div>
                <div className="h-2 w-full bg-[#0E0C22] rounded-full overflow-hidden">
                  <div className="h-full bg-[#35C8D5] rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">13 a 15 anos (Criadores Digitais)</span>
                  <span className="font-mono text-[#6546D7]">45% (639 alunos)</span>
                </div>
                <div className="h-2 w-full bg-[#0E0C22] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6546D7] rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">16 e 17 anos (Desenvolvedores Jovens)</span>
                  <span className="font-mono text-[#FFD45C]">20% (284 alunos)</span>
                </div>
                <div className="h-2 w-full bg-[#0E0C22] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFD45C] rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
            <h3 className="text-base font-bold text-white">Status da Infraestrutura e Segurança</h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C22] border border-[#262159]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-white">Filtro de Conteúdo Infantil / Juvenil</span>
                </div>
                <span className="text-emerald-400 font-semibold">Ativo (100%)</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C22] border border-[#262159]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-white">Isolamento de Dados Sensíveis</span>
                </div>
                <span className="text-emerald-400 font-semibold">Conforme LGPD</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C22] border border-[#262159]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-white">Auditoria de Conversas do Professor IA</span>
                </div>
                <span className="text-emerald-400 font-semibold">Supervisionada</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: USERS AND PERMISSIONS */}
      {activeTab === 'users' && (
        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
          <h3 className="text-base font-bold text-white">Controle de Papéis e Permissões</h3>
          <p className="text-xs text-slate-400">
            A plataforma opera com separação estrita de escopos para garantir a integridade dos menores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
              <h4 className="text-xs font-bold text-[#35C8D5] uppercase tracking-wider">Estudante</h4>
              <p className="text-xs text-slate-300">
                Acesso às aulas, desafios, simulador de IA, laboratório de criação e perfil customizável.
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-[#262159]">
                Permissões: Leitura, resolução, salvamento de progresso local.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
              <h4 className="text-xs font-bold text-[#6546D7] uppercase tracking-wider">Educador / Mentor</h4>
              <p className="text-xs text-slate-300">
                Acompanhamento da turma, notas pedagógicas, envio de mensagens motivacionais e alertas de apoio.
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-[#262159]">
                Permissões: Visualização agregada de métricas da turma designada.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
              <h4 className="text-xs font-bold text-[#FFD45C] uppercase tracking-wider">Administrador</h4>
              <p className="text-xs text-slate-300">
                Gestão da grade de trilhas, relatórios de impacto para doadores/governo e auditoria geral.
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-[#262159]">
                Permissões: Gestão global do sistema e publicação de conteúdos.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TRACKS MANAGEMENT */}
      {activeTab === 'tracks' && (
        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Catálogo de Trilhas Cadastradas</h3>
            <span className="text-xs text-slate-400">{tracks.length} Trilhas Ativas</span>
          </div>

          <div className="divide-y divide-[#262159]">
            {tracks.map((track) => (
              <div key={track.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#35C8D5]">
                    Nível {track.level}
                  </span>
                  <h4 className="font-semibold text-white">{track.title}</h4>
                  <p className="text-[11px] text-slate-400">{track.lessonCount} aulas · {track.durationHours}h de carga horária</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Publicada
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: REPORTS */}
      {activeTab === 'reports' && (
        <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
          <h3 className="text-base font-bold text-white">Relatórios para Prestação de Contas Sociais</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Dados compilados e anonimizados para comprovação de impacto perante secretarias de educação, escolas parceiras e mantenedores.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-white">Relatório Anual de Inclusão Sociodigital 2026</p>
                <p className="text-[11px] text-slate-400">1.420 estudantes · 18 polos de inclusão · Formato PDF/CSV</p>
              </div>
              <button
                onClick={handleExportReport}
                className="px-3 py-1.5 rounded-lg bg-[#262159] hover:bg-[#6546D7] text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-white">Diagnóstico de Alfabetização em Inteligência Artificial</p>
                <p className="text-[11px] text-slate-400">Métricas de compreensão de prompts e ética</p>
              </div>
              <button
                onClick={handleExportReport}
                className="px-3 py-1.5 rounded-lg bg-[#262159] hover:bg-[#6546D7] text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD TRACK */}
      {isAddTrackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-[#141130] border border-[#262159] p-6 shadow-2xl space-y-4">
            <button
              onClick={() => setIsAddTrackModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-white">Adicionar Nova Trilha de Tecnologia</h3>

            <form onSubmit={handleAddTrack} className="space-y-3.5">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Título da Trilha</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Introdução à Robótica com Micro:bit"
                  value={newTrackTitle}
                  onChange={(e) => setNewTrackTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0E0C22] border border-[#262159] rounded-xl text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Nível Pedagógico</label>
                <select
                  value={newTrackLevel}
                  onChange={(e) => setNewTrackLevel(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-[#0E0C22] border border-[#262159] rounded-xl text-xs text-white focus:outline-none"
                >
                  <option value={1}>Nível 1 · Exploradores Digitais</option>
                  <option value={2}>Nível 2 · Criadores Digitais</option>
                  <option value={3}>Nível 3 · Desenvolvedores do Futuro</option>
                  <option value={4}>Nível 4 · Inovadores com IA</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddTrackModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF]"
                >
                  Publicar Trilha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
