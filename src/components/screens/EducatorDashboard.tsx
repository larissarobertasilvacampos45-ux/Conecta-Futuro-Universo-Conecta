import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EducatorStudent } from '../../types';
import {
  GraduationCap,
  Users,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
  Send,
  MessageSquare,
  BarChart2,
  TrendingUp,
  X
} from 'lucide-react';

export const EducatorDashboard: React.FC = () => {
  const { educatorStudents, sendMentorMessage } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'precisa_apoio' | 'destaque' | 'em_dia'>('all');
  const [selectedStudentForMessage, setSelectedStudentForMessage] = useState<EducatorStudent | null>(null);
  const [messageText, setMessageText] = useState('');

  const filteredStudents = educatorStudents.filter((st) => {
    const matchesSearch = st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.currentTrack.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || st.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const studentsNeedingSupportCount = educatorStudents.filter((s) => s.status === 'precisa_apoio').length;
  const highlightCount = educatorStudents.filter((s) => s.status === 'destaque').length;

  const handleSendMessage = () => {
    if (!selectedStudentForMessage || !messageText.trim()) return;
    sendMentorMessage(selectedStudentForMessage.id, messageText);
    setSelectedStudentForMessage(null);
    setMessageText('');
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262159]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#246BFD]/15 border border-[#246BFD]/30 text-xs text-[#246BFD] font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Portal Pedagógico e Tutoria</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Painel do Educador & Mentor
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Acompanhe o engajamento individual da turma, identifique estudantes com dificuldades conceituais e envie incentivos pedagógicos.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Turma Ativa: <strong className="text-white">Estrelas do Amanhã (48 Alunos)</strong></span>
        </div>
      </div>

      {/* KPI METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-5 rounded-3xl bg-[#141130] border border-[#262159] space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Alunos na Turma</span>
            <Users className="w-4 h-4 text-[#35C8D5]" />
          </div>
          <div className="text-2xl font-bold font-display text-white">{educatorStudents.length} Ativos</div>
          <p className="text-[11px] text-slate-400">100% frequência na última quinzena</p>
        </div>

        <div className="p-5 rounded-3xl bg-[#141130] border border-[#262159] space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Média de Conclusão</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-display text-emerald-400">60% Concluído</div>
          <p className="text-[11px] text-slate-400">+12% em relação à semana anterior</p>
        </div>

        <div className="p-5 rounded-3xl bg-[#141130] border border-[#FF8978]/40 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Precisam de Apoio</span>
            <AlertTriangle className="w-4 h-4 text-[#FF8978]" />
          </div>
          <div className="text-2xl font-bold font-display text-[#FF8978]">{studentsNeedingSupportCount} Estudantes</div>
          <p className="text-[11px] text-slate-400">Dúvidas acumuladas ou inatividade</p>
        </div>

        <div className="p-5 rounded-3xl bg-[#141130] border border-[#FFD45C]/40 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Estudantes Destaque</span>
            <Sparkles className="w-4 h-4 text-[#FFD45C]" />
          </div>
          <div className="text-2xl font-bold font-display text-[#FFD45C]">{highlightCount} Estudantes</div>
          <p className="text-[11px] text-slate-400">Ritmo acelerado e projetos no lab</p>
        </div>

      </div>

      {/* TRACKS PROGRESS OVERVIEW (VISUAL CHART BARS) */}
      <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-[#35C8D5]" />
          Desempenho por Trilha Temática
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-white">Fundamentos de Computação</span>
              <span className="font-mono text-[#35C8D5]">85%</span>
            </div>
            <div className="h-2 w-full bg-[#1B1742] rounded-full overflow-hidden">
              <div className="h-full bg-[#35C8D5] rounded-full" style={{ width: '85%' }} />
            </div>
            <p className="text-[10px] text-slate-400">Excelente compreensão de hardware e internet.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-white">Lógica & Programação</span>
              <span className="font-mono text-[#6546D7]">62%</span>
            </div>
            <div className="h-2 w-full bg-[#1B1742] rounded-full overflow-hidden">
              <div className="h-full bg-[#6546D7] rounded-full" style={{ width: '62%' }} />
            </div>
            <p className="text-[10px] text-slate-400">Atenção em loops e condições aninhadas.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E0C22] border border-[#262159] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-white">Inteligência Artificial Ética</span>
              <span className="font-mono text-[#FFD45C]">74%</span>
            </div>
            <div className="h-2 w-full bg-[#1B1742] rounded-full overflow-hidden">
              <div className="h-full bg-[#FFD45C] rounded-full" style={{ width: '74%' }} />
            </div>
            <p className="text-[10px] text-slate-400">Alto interesse em testes de prompts com Conectinho.</p>
          </div>
        </div>
      </div>

      {/* STUDENTS TABLE AND FILTERS */}
      <div className="p-6 rounded-3xl bg-[#141130] border border-[#262159] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Acompanhamento Individual dos Estudantes</h3>
            <p className="text-xs text-slate-400">Clique em "Enviar Mensagem" para mandar uma orientação ou elogio direto.</p>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar estudante ou trilha..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-[#0E0C22] border border-[#262159] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35C8D5] w-52 sm:w-60"
              />
            </div>
          </div>
        </div>

        {/* Status Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1">
          <span className="text-slate-500 text-[11px]">Filtrar Status:</span>
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors ${
              statusFilter === 'all'
                ? 'bg-[#262159] border-white text-white'
                : 'bg-[#0E0C22] border-[#262159] text-slate-400 hover:text-white'
            }`}
          >
            Todos ({educatorStudents.length})
          </button>
          <button
            onClick={() => setStatusFilter('precisa_apoio')}
            className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors ${
              statusFilter === 'precisa_apoio'
                ? 'bg-[#FF8978]/20 border-[#FF8978] text-[#FF8978]'
                : 'bg-[#0E0C22] border-[#262159] text-slate-400 hover:text-white'
            }`}
          >
            Precisa de Apoio ({studentsNeedingSupportCount})
          </button>
          <button
            onClick={() => setStatusFilter('destaque')}
            className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors ${
              statusFilter === 'destaque'
                ? 'bg-[#FFD45C]/20 border-[#FFD45C] text-[#FFD45C]'
                : 'bg-[#0E0C22] border-[#262159] text-slate-400 hover:text-white'
            }`}
          >
            Destaques ({highlightCount})
          </button>
          <button
            onClick={() => setStatusFilter('em_dia')}
            className={`px-3 py-1 rounded-lg border text-xs font-medium transition-colors ${
              statusFilter === 'em_dia'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400'
                : 'bg-[#0E0C22] border-[#262159] text-slate-400 hover:text-white'
            }`}
          >
            Em Dia
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#262159] text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-3">Estudante</th>
                <th className="py-3 px-3">Trilha Atual</th>
                <th className="py-3 px-3">Progresso</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Último Acesso</th>
                <th className="py-3 px-3 text-right">Ações Pedagógicas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262159]/60">
              {filteredStudents.map((st) => (
                <tr key={st.id} className="hover:bg-[#1B1742]/40 transition-colors">
                  <td className="py-3 px-3">
                    <div className="font-semibold text-white">{st.name}</div>
                    <div className="text-[10px] text-slate-400">{st.age} anos · {st.completedExercises} exercícios</div>
                  </td>
                  <td className="py-3 px-3 text-slate-200">{st.currentTrack}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-[#0E0C22] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#6546D7] to-[#35C8D5] rounded-full"
                          style={{ width: `${st.progressPercent}%` }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-slate-300">{st.progressPercent}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    {st.status === 'destaque' ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#FFD45C]/15 text-[#FFD45C] border border-[#FFD45C]/30 text-[10px] font-semibold">
                        ★ Destaque
                      </span>
                    ) : st.status === 'precisa_apoio' ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#FF8978]/15 text-[#FF8978] border border-[#FF8978]/30 text-[10px] font-semibold">
                        ⚠️ Precisa Apoio
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold">
                        ✓ Em Dia
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-slate-400 text-[11px]">{st.lastActive}</td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => {
                        setSelectedStudentForMessage(st);
                        setMessageText(st.status === 'precisa_apoio' ? `Oi ${st.name.split(' ')[0]}, vi que você teve dúvidas no último exercício. Quer fazer uma revisão rápida juntos?` : `Parabéns pela dedicação na trilha de ${st.currentTrack}, continue firme!`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#262159] hover:bg-[#6546D7] text-white text-xs font-medium transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Mensagem</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PEDAGOGICAL MESSAGE MODAL */}
      {selectedStudentForMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#141130] border border-[#262159] p-6 shadow-2xl space-y-4">
            <button
              onClick={() => setSelectedStudentForMessage(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6546D7]/20 text-[#6546D7] flex items-center justify-center font-bold">
                ✉️
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Enviar Mensagem de Incentivo
                </h3>
                <p className="text-xs text-slate-400">
                  Para: <strong>{selectedStudentForMessage.name}</strong> ({selectedStudentForMessage.currentTrack})
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0E0C22] border border-[#262159] text-xs text-slate-300">
              <strong className="text-slate-400 block mb-1">Notas do Mentor:</strong>
              {selectedStudentForMessage.mentorNotes}
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1 font-medium">Sua Mensagem de Apoio:</label>
              <textarea
                rows={4}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full p-3 bg-[#0E0C22] border border-[#262159] rounded-xl text-xs text-white focus:outline-none focus:border-[#35C8D5]"
                placeholder="Escreva uma mensagem acolhedora e motivadora..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedStudentForMessage(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar para o Estudante</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
