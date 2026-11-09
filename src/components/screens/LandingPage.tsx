import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Rocket,
  Bot,
  GraduationCap,
  ShieldCheck,
  Compass,
  ArrowRight,
  Code2,
  CheckCircle2,
  Users,
  Award,
  Globe2,
  Lock,
  HeartHandshake
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { navigateTo, openAuthModal, setUserRole } = useApp();

  const handleStartJourney = () => {
    setUserRole('student');
    navigateTo('journey');
  };

  return (
    <div className="min-w-0 bg-[#0E0C22] text-white">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-[#262159]">
        {/* Glow backdrop blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6546D7]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#246BFD]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] text-balance">
                Seu futuro começa com{' '}
                <span className="bg-gradient-to-r from-[#35C8D5] via-[#246BFD] to-[#6546D7] bg-clip-text text-transparent">
                  uma descoberta.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                O <strong className="text-white font-semibold">Conecta Futuro</strong> é um universo digital gamificado onde você aprende informática, lógica de programação e Inteligência Artificial no seu próprio ritmo, com o apoio de um tutor virtual dedicado e desafios divertidos.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handleStartJourney}
                  className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] rounded-xl shadow-xl shadow-[#6546D7]/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Rocket className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Começar Minha Jornada Grátis</span>
                </button>

                <button
                  onClick={() => navigateTo('school')}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#1B1742] hover:bg-[#262159] border border-[#262159] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-[#35C8D5]" />
                  <span>Conhecer as Trilhas</span>
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35C8D5]" />
                  Acesso 100% gratuito
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFD45C]" />
                  Ambiente seguro e protegido
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#FF8978]" />
                  Certificados inclusos
                </span>
              </div>
            </div>

            {/* Right Column: 3D Cosmic Hero Illustration */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden border border-[#262159] bg-[#141130] shadow-2xl shadow-[#6546D7]/20 group">
                <img
                  src="/src/assets/images/hero_cosmic_learning_1794257413820.jpg"
                  alt="Universo Conecta - Plataforma Espacial de Aprendizagem Tecnológica"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C22] via-transparent to-transparent opacity-60" />
                
                {/* Floating mini stat card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0E0C22]/90 backdrop-blur-md border border-[#262159] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#6546D7]/30 text-[#FFD45C] flex items-center justify-center font-bold text-xs">
                      ✨
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Pronto para a decolagem</p>
                      <p className="text-xs font-bold text-white">Mais de 25 missões práticas</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#35C8D5] bg-[#35C8D5]/10 px-2 py-1 rounded-md">
                    Interativo
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: COMO FUNCIONA A PLATAFORMA */}
      <section className="py-16 md:py-24 border-b border-[#262159] bg-[#141130]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#35C8D5] uppercase">
              Metodologia Descomplicada
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white mt-2">
              Como funciona o Universo Conecta?
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Três passos simples para transformar curiosidade em superpoderes digitais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#1B1742]/80 border border-[#262159] relative group hover:border-[#6546D7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#6546D7]/20 text-[#6546D7] flex items-center justify-center font-display font-extrabold text-xl mb-4 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Escolha sua Trilha Estelar</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comece do zero com fundamentos de computação e internet ou avance para lógica, programação em blocos, Python e Inteligência Artificial.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#1B1742]/80 border border-[#262159] relative group hover:border-[#246BFD] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#246BFD]/20 text-[#246BFD] flex items-center justify-center font-display font-extrabold text-xl mb-4 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Aprenda com o Professor IA</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Um tutor virtual amigável e paciente, sempre disponível para tirar dúvidas, dar exemplos da sua vida e propor exercícios no seu ritmo.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#1B1742]/80 border border-[#262159] relative group hover:border-[#35C8D5] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#35C8D5]/20 text-[#35C8D5] flex items-center justify-center font-display font-extrabold text-xl mb-4 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Conquiste XP e Crie Projetos</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Complete missões, ganhe medalhas espaciais e crie seus próprios jogos e páginas no Laboratório Criativo para descobrir seu futuro profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AS 4 TRILHAS DE APRENDIZAGEM */}
      <section className="py-16 md:py-24 border-b border-[#262159]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#FFD45C] uppercase">
                Da Base ao Futuro
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white mt-1">
                4 Níveis de Aprendizagem
              </h2>
            </div>
            <button
              onClick={() => navigateTo('school')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35C8D5] hover:text-white transition-colors"
            >
              <span>Ver todas as trilhas detalhadas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level 1 */}
            <div className="p-5 rounded-2xl bg-[#141130] border border-[#262159] hover:border-[#35C8D5] transition-all space-y-3">
              <div className="text-[10px] font-bold text-[#35C8D5] tracking-wider uppercase">Nível 1</div>
              <h3 className="text-base font-bold text-white">Exploradores Digitais</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hardware, funcionamento da internet, ferramentas de colaboração e escudo de segurança e senhas.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <span>Iniciante</span>
                <span aria-hidden="true">·</span>
                <span>4 Trilhas</span>
              </div>
            </div>

            {/* Level 2 */}
            <div className="p-5 rounded-2xl bg-[#141130] border border-[#262159] hover:border-[#6546D7] transition-all space-y-3">
              <div className="text-[10px] font-bold text-[#6546D7] tracking-wider uppercase">Nível 2</div>
              <h3 className="text-base font-bold text-white">Criadores Digitais</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pensamento computacional, variáveis, condições Se/Senão, programação em blocos e criação de jogos.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <span>Lógica Pura</span>
                <span aria-hidden="true">·</span>
                <span>4 Trilhas</span>
              </div>
            </div>

            {/* Level 3 */}
            <div className="p-5 rounded-2xl bg-[#141130] border border-[#262159] hover:border-[#246BFD] transition-all space-y-3">
              <div className="text-[10px] font-bold text-[#246BFD] tracking-wider uppercase">Nível 3</div>
              <h3 className="text-base font-bold text-white">Desenvolvedores do Futuro</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Primeiros passos reais em Python, criação de páginas com HTML5 & CSS3 e montagem de mini aplicativos.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <span>Código Real</span>
                <span aria-hidden="true">·</span>
                <span>4 Trilhas</span>
              </div>
            </div>

            {/* Level 4 */}
            <div className="p-5 rounded-2xl bg-[#141130] border border-[#262159] hover:border-[#FF8978] transition-all space-y-3">
              <div className="text-[10px] font-bold text-[#FF8978] tracking-wider uppercase">Nível 4</div>
              <h3 className="text-base font-bold text-white">Inovadores com IA</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Como as redes neurais aprendem, engenharia de prompts, ética, verificação de fake news e projetos com IA.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <span>Vanguarda Tech</span>
                <span aria-hidden="true">·</span>
                <span>5 Trilhas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROFESSOR IA (TUTOR VIRTUAL) */}
      <section className="py-16 md:py-24 border-b border-[#262159] bg-gradient-to-b from-[#0E0C22] to-[#141130]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Robot mascot image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-[#6546D7]/40 shadow-2xl shadow-[#6546D7]/30 bg-[#1B1742]">
                <img
                  src="/src/assets/images/mascot_robot_conector_1794257415788.jpg"
                  alt="Conectinho - Mascote e Tutor de Inteligência Artificial do Conecta Futuro"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#0E0C22]/80 backdrop-blur-md border border-[#262159] text-[11px] font-semibold text-[#FFD45C] flex items-center gap-1">
                  <span>🤖 Robô Conectinho</span>
                </div>
              </div>
            </div>

            {/* Description and quick questions */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="text-xs font-bold tracking-widest text-[#35C8D5] uppercase">
                Tutor Virtual Inteligente
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
                Dúvidas em código? O Professor IA explica do seu jeito.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                O Conectinho foi calibrado especialmente para crianças e adolescentes. Ele usa analogias do dia a dia, não julga seus erros e ajuda você a raciocinar até encontrar a solução.
              </p>

              {/* Sample questions pills */}
              <div className="space-y-2 pt-2">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Exemplos do que você pode perguntar:
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1.5 rounded-lg bg-[#1B1742] border border-[#262159] text-xs text-slate-200">
                    "Explique programação como se eu tivesse 10 anos."
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#1B1742] border border-[#262159] text-xs text-slate-200">
                    "Como uma IA sabe diferenciar um cachorro de um gato?"
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#1B1742] border border-[#262159] text-xs text-slate-200">
                    "Me ajude a criar uma ideia de jogo espacial!"
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => navigateTo('professor-ai')}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#6546D7] to-[#246BFD] hover:from-[#7E62E6] hover:to-[#4D87FF] shadow-lg shadow-[#6546D7]/30 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Conversar com o Conectinho Agora</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: IMPACTO SOCIAL E INCLUSÃO */}
      <section className="py-16 md:py-24 border-b border-[#262159]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#FF8978] uppercase">
              Compromisso Social
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white mt-2">
              Educação que transforma realidades
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Nossa missão é democratizar a tecnologia e abrir caminhos profissionais para quem mais precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#141130] border border-[#262159]">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#35C8D5]">
                100%
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-2">Gratuito para Sempre</div>
              <p className="text-[11px] text-slate-400 mt-1">Sem mensalidades, sem pegadinhas.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141130] border border-[#262159]">
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#6546D7]">
                +1.400
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-2">Estudantes Atendidos</div>
              <p className="text-[11px] text-slate-400 mt-1">Em comunidades e escolas parceiras.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141130] border border-[#262159]">
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FF8978]">
                Privacidade & Segurança
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-2">Proteção de Dados</div>
              <p className="text-[11px] text-slate-400 mt-1">Zero rastreamento invasivo ou anúncios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL FOOTER */}
      <footer className="py-12 bg-[#090714] border-t border-[#262159] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#6546D7] to-[#246BFD] flex items-center justify-center text-white">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm text-white font-display">Conecta Futuro</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Plataforma de inclusão sociodigital e educação tecnológica para jovens de comunidades e escolas públicas.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Navegação</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigateTo('school')} className="hover:text-white transition-colors">Escola de Tecnologia</button></li>
                <li><button onClick={() => navigateTo('professor-ai')} className="hover:text-white transition-colors">Professor IA</button></li>
                <li><button onClick={() => navigateTo('quests')} className="hover:text-white transition-colors">Desafios e Conquistas</button></li>
                <li><button onClick={() => navigateTo('future')} className="hover:text-white transition-colors">Profissões do Futuro</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Segurança e Ética</h4>
              <ul className="space-y-2">
                <li><span className="text-slate-400">Termos de Participação Segura</span></li>
                <li><span className="text-slate-400">Aviso aos Pais e Responsáveis</span></li>
                <li><span className="text-slate-400">Diretrizes de IA Responsável</span></li>
                <li><span className="text-slate-400">Supervisão Pedagógica</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Perfis de Acesso</h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => { setUserRole('student'); navigateTo('journey'); }}
                  className="px-3 py-1.5 text-left rounded-lg bg-[#141130] hover:bg-[#1B1742] text-slate-200 border border-[#262159] transition-colors"
                >
                  🚀 Entrar como Estudante
                </button>
                <button
                  onClick={() => { setUserRole('educator'); navigateTo('educator'); }}
                  className="px-3 py-1.5 text-left rounded-lg bg-[#141130] hover:bg-[#1B1742] text-slate-200 border border-[#262159] transition-colors"
                >
                  🎓 Painel do Educador
                </button>
                <button
                  onClick={() => { setUserRole('admin'); navigateTo('admin'); }}
                  className="px-3 py-1.5 text-left rounded-lg bg-[#141130] hover:bg-[#1B1742] text-slate-200 border border-[#262159] transition-colors"
                >
                  🛡️ Painel Administrativo
                </button>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-[#262159]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 Conecta Futuro — Universo Conecta. Todos os direitos reservados. Iniciativa Social Aberta.</p>
            <p>Construído com respeito e empatia para empoderar a próxima geração de talentos da tecnologia.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};
