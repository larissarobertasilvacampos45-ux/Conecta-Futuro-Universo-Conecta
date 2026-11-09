import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sparkles, Shield, User, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { UserRole } from '../../types';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authModalMode, setUserRole, triggerToast, navigateTo } = useApp();
  const [mode, setMode] = useState<'login' | 'register'>(authModalMode);

  // Form states
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('14');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [parentConsent, setParentConsent] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (mode === 'login') {
      if (!identifier.trim()) {
        setErrorMsg('Por favor, informe seu apelido de explorador ou identificação.');
        return;
      }
      if (!password || password.length < 4) {
        setErrorMsg('A senha precisa ter pelo menos 4 caracteres.');
        return;
      }
      setUserRole(selectedRole);
      closeAuthModal();
      navigateTo(selectedRole === 'educator' ? 'educator' : selectedRole === 'admin' ? 'admin' : 'journey');
      triggerToast('Acesso Liberado!', `Bem-vindo de volta ao Universo Conecta!`, 'success');
    } else {
      if (!name.trim()) {
        setErrorMsg('Por favor, digite como prefere ser chamado.');
        return;
      }
      if (!parentConsent && Number(age) < 18) {
        setErrorMsg('Para menores de 18 anos, é necessário o consentimento do responsável.');
        return;
      }
      setUserRole(selectedRole);
      closeAuthModal();
      navigateTo(selectedRole === 'educator' ? 'educator' : 'journey');
      triggerToast('Cadastro Cósmico Concluído!', 'Seu passaporte estelar foi gerado com sucesso!', 'success');
    }
  };

  const handleQuickDemo = (role: UserRole) => {
    setUserRole(role);
    closeAuthModal();
    navigateTo(role === 'educator' ? 'educator' : role === 'admin' ? 'admin' : 'journey');
    triggerToast('Acesso Rápido de Demonstração', `Entrando com o perfil de ${role === 'student' ? 'Estudante' : role === 'educator' ? 'Educador' : 'Administrador'}.`, 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-[#141130] border border-[#262159] p-6 shadow-2xl overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#6546D7]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#246BFD]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#262159] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[#6546D7] via-[#246BFD] to-[#35C8D5] text-white shadow-lg shadow-[#6546D7]/40 mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">
            {mode === 'login' ? 'Embarque na sua Nave' : 'Criar Conta de Explorador'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'login'
              ? 'Digite suas credenciais para continuar sua trilha de descobertas.'
              : 'Educação tecnológica 100% gratuita para jovens desbravadores.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex p-1 bg-[#0E0C22] rounded-xl border border-[#262159] mb-5">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrorMsg('');
            }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              mode === 'login' ? 'bg-[#6546D7] text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setErrorMsg('');
            }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              mode === 'register' ? 'bg-[#6546D7] text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Error message if any */}
        {errorMsg && (
          <div className="mb-4 p-2.5 rounded-lg bg-[#FF8978]/15 border border-[#FF8978]/40 text-[#FF8978] text-xs">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Como você quer ser chamado?</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Alexandre ou Astronauta Bia"
                  className="w-full pl-9 pr-3 py-2 bg-[#0E0C22] border border-[#262159] focus:border-[#35C8D5] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {mode === 'login' ? 'Apelido ou E-mail' : 'Apelido de Explorador'}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Ex: AlexExplorador"
                className="w-full pl-9 pr-3 py-2 bg-[#0E0C22] border border-[#262159] focus:border-[#35C8D5] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-300">Senha</label>
              {mode === 'login' && (
                <button
                  type="button"
                  onClick={() => triggerToast('Recuperação Segura', 'Peça o código de recuperação ao seu educador ou responsável legal.', 'info')}
                  className="text-[11px] text-[#35C8D5] hover:underline"
                >
                  Esqueci a senha
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2 bg-[#0E0C22] border border-[#262159] focus:border-[#35C8D5] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Faixa Etária</label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0E0C22] border border-[#262159] focus:border-[#35C8D5] rounded-xl text-xs text-white focus:outline-none"
                >
                  <option value="10">10 anos</option>
                  <option value="11">11 anos</option>
                  <option value="12">12 anos</option>
                  <option value="13">13 anos</option>
                  <option value="14">14 anos</option>
                  <option value="15">15 anos</option>
                  <option value="16">16 anos</option>
                  <option value="17">17 anos</option>
                  <option value="18">18+ anos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Tipo de Perfil</label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                  className="w-full px-3 py-2 bg-[#0E0C22] border border-[#262159] focus:border-[#35C8D5] rounded-xl text-xs text-white focus:outline-none"
                >
                  <option value="student">Estudante</option>
                  <option value="educator">Educador / Mentor</option>
                </select>
              </div>
            </div>
          )}

          {mode === 'register' && (
            <div className="p-3 rounded-xl bg-[#0E0C22] border border-[#262159] text-[11px] text-slate-400 space-y-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={parentConsent}
                  onChange={(e) => setParentConsent(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 text-[#6546D7] focus:ring-0"
                />
                <span>
                  Declaro que possuo autorização dos meus pais ou responsáveis legais para participar da plataforma educacional.
                </span>
              </label>
              <p className="flex items-center gap-1 text-[10px] text-[#35C8D5]">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                Coletamos apenas dados mínimos essenciais para o seu progresso educacional.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] shadow-lg shadow-[#6546D7]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{mode === 'login' ? 'Decolar para a Plataforma' : 'Criar meu Passaporte Cósmico'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        {/* Quick Demo Access Bar */}
        <div className="mt-5 pt-4 border-t border-[#262159]">
          <p className="text-[11px] text-center text-slate-400 mb-2">
            Acesso Rápido para Avaliação (1 clique):
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleQuickDemo('student')}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#1B1742] hover:bg-[#262159] text-[11px] font-medium text-slate-200 hover:text-white transition-colors border border-[#262159]"
            >
              🚀 Aluno
            </button>
            <button
              onClick={() => handleQuickDemo('educator')}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#1B1742] hover:bg-[#262159] text-[11px] font-medium text-slate-200 hover:text-white transition-colors border border-[#262159]"
            >
              🎓 Educador
            </button>
            <button
              onClick={() => handleQuickDemo('admin')}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#1B1742] hover:bg-[#262159] text-[11px] font-medium text-slate-200 hover:text-white transition-colors border border-[#262159]"
            >
              🛡️ Admin
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
