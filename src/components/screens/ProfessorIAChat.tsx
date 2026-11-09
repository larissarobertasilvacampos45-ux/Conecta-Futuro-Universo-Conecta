import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Bot,
  Send,
  Sparkles,
  HelpCircle,
  Shield,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  Terminal,
  Volume2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  codeSnippet?: string;
  analogy?: string;
  timestamp: string;
}

export const ProfessorIAChat: React.FC = () => {
  const { student, triggerToast } = useApp();

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: `Olá, ${student.name.split(' ')[0]}! Eu sou o Conectinho, seu Professor IA no Universo Conecta. Estou aqui para te ajudar a entender qualquer conceito de tecnologia, código ou internet de um jeito simples e descomplicado. O que você gostaria de explorar hoje?`,
      timestamp: '10:00'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    'Explique programação de um jeito fácil.',
    'Me dê um exemplo de como funciona a internet.',
    'Crie um exercício de lógica para mim.',
    'O que é Inteligência Artificial e Redes Neurais?',
    'Como criar uma senha realmente segura?',
    'Não entendi variáveis, me explique com outra analogia.'
  ];

  const generateSimulatedResponse = (query: string): Omit<ChatMessage, 'id' | 'sender' | 'timestamp'> => {
    const q = query.toLowerCase();

    if (q.includes('programação') || q.includes('programar') || q.includes('código')) {
      return {
        text: 'Programação é simplesmente a arte de conversar com os computadores! Imagine que a máquina é um robô muito rápido, mas que não tem iniciativa própria. Você precisa entregar uma "receita de bolo" detalhada com cada passo.',
        analogy: '💡 Pense numa receita: 1. Pegue os ovos, 2. Misture a farinha, 3. Asse por 30 minutos. Se esquecer de ligar o forno, o bolo não sai! O código funciona exatamente assim.',
        codeSnippet: '// Exemplo simples:\nse (tem_fome == verdadeiro) {\n  fazer_lanche();\n} senao {\n  continuar_estudando();\n}'
      };
    }

    if (q.includes('internet') || q.includes('rede') || q.includes('site')) {
      return {
        text: 'A internet é como um sistema gigantesco de correios cósmicos! Quando você clica num vídeo, seu aparelho quebra o pedido em milhares de "pacotinhos" de dados. Eles viajam por cabos de fibra óptica embaixo do oceano e chegam ao servidor em milésimos de segundo.',
        analogy: '🌐 É como enviar um quebra-cabeça de 1000 peças pelo correio em vários envelopes numerados. O seu navegador junta tudo de novo em fração de segundos!'
      };
    }

    if (q.includes('exercício') || q.includes('desafio') || q.includes('teste')) {
      return {
        text: 'Aqui está um desafio de lógica rápida para treinar sua mente de programador:',
        codeSnippet: 'Desafio Cósmico:\nVocê tem 3 naves espaciais: Alfa, Beta e Gama.\n- Alfa viaja mais rápido que Beta.\n- Gama viaja mais rápido que Alfa.\n\nPergunta: Qual é a nave mais veloz de todas?',
        analogy: '🎯 Resposta de raciocínio: Gama! Porque se Gama > Alfa e Alfa > Beta, logo Gama é a campeã da frota!'
      };
    }

    if (q.includes('ia') || q.includes('inteligência artificial') || q.includes('neural')) {
      return {
        text: 'Inteligência Artificial não é mágica, é matemática e observação de padrões! Em vez de nós dizermos todas as regras para o computador, mostramos milhares de exemplos para ele aprender sozinho.',
        analogy: '🤖 Como você aprendeu a reconhecer um gato quando era pequeno? Vendo muitos gatos! A IA faz a mesma coisa, calculando probabilidades baseadas em dados.',
        codeSnippet: 'Entrada (milhares de imagens de estrelas) ➔ Análise de padrões ➔ Identificação de constelações com 99% de precisão.'
      };
    }

    if (q.includes('senha') || q.includes('segurança') || q.includes('segura')) {
      return {
        text: 'Para criar uma senha ultra resistente, o segredo é o comprimento e a variedade de caracteres. Evite palavras comuns do dicionário.',
        analogy: '🛡️ Em vez de usar "senha123", use uma frase memorável: "MeuCachorroAstronautaVoa2026!". É muito mais fácil de você lembrar e quase impossível de um robô malicioso adivinhar!'
      };
    }

    if (q.includes('variável') || q.includes('variáveis') || q.includes('analogia')) {
      return {
        text: 'Variáveis são como gavetas com etiquetas na sua mesa de estudos. Cada gaveta tem um nome e guarda uma coisa específica.',
        analogy: '📦 Gaveta "lápis_de_cor": guarda 12. Se você quebrar 2, atualiza o valor da gaveta para 10! Na programação, nós guardamos números, nomes e informações que mudam durante o jogo.',
        codeSnippet: 'let moedas_coletadas = 0;\n// Quando você pega uma estrela:\nmoedas_coletadas = moedas_coletadas + 1;'
      };
    }

    // Default friendly educational response
    return {
      text: `Excelente pergunta sobre "${query}"! No Universo Conecta, sempre que nos deparamos com um enigma tecnológico novo, começamos decompondo o problema em partes menores: O que entra? Como processa? O que sai?`,
      analogy: '🚀 Todo grande cientista da computação começou com a mesma curiosidade que você tem agora.',
      codeSnippet: '// Passo 1: Entender o objetivo\n// Passo 2: Testar uma solução pequena\n// Passo 3: Pedir ajuda quando travar!'
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const responseData = generateSimulatedResponse(query);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseData.text,
        analogy: responseData.analogy,
        codeSnippet: responseData.codeSnippet,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleSpeechSimulation = (text: string) => {
    triggerToast('Leitura em Voz Alta (Simulada)', 'Reproduzindo a explicação do Conectinho com voz amigável para acessibilidade.', 'info');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      
      {/* HEADER / MASCOT BAR */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1B1742] via-[#141130] to-[#262159] border border-[#262159] flex flex-col sm:flex-row items-center gap-5">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#35C8D5]/50 bg-[#0E0C22] shrink-0 shadow-lg shadow-[#35C8D5]/20">
          <img
            src="/src/assets/images/mascot_robot_conector_1794257415788.jpg"
            alt="Mascote Robô Conectinho"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0E0C22]" />
        </div>

        <div className="flex-1 text-center sm:text-left space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-xl font-bold font-display text-white">Professor IA · Robô Conectinho</h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#35C8D5]/20 text-[#35C8D5] border border-[#35C8D5]/30">
              Tutor Virtual Seguro
            </span>
          </div>
          <p className="text-xs text-slate-300 max-w-xl">
            Tutor virtual especializado em ensino de tecnologia para jovens. Paciente, acolhedor e com explicações passo a passo.
          </p>
        </div>

        {/* Supervision safety tag */}
        <div className="px-3 py-2 rounded-xl bg-[#0E0C22]/80 border border-[#262159] text-[11px] text-slate-400 flex items-center gap-1.5 shrink-0">
          <Shield className="w-3.5 h-3.5 text-[#35C8D5]" />
          <span>Supervisão Pedagógica Ativa</span>
        </div>
      </div>

      {/* CHAT CONTAINER */}
      <div className="rounded-3xl bg-[#141130] border border-[#262159] shadow-xl overflow-hidden flex flex-col h-[600px]">
        
        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Transparent Simulation Notice Banner */}
          <div className="p-3 rounded-xl bg-[#1B1742]/50 border border-[#262159] text-[11px] text-slate-400 text-center flex items-center justify-center gap-2">
            <Lightbulb className="w-3.5 h-3.5 text-[#FFD45C]" />
            <span>
              <strong>Simulação Pedagógica Demonstrativa:</strong> Respostas adaptadas para demonstrar o potencial educacional com segurança total.
            </span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-[#246BFD] text-white shadow-md'
                    : 'bg-[#6546D7] text-[#FFD45C] shadow-md border border-[#35C8D5]/30'
                }`}
              >
                {msg.sender === 'user' ? '🧑‍🚀' : '🤖'}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed space-y-3 ${
                  msg.sender === 'user'
                    ? 'bg-[#246BFD] text-white rounded-tr-none'
                    : 'bg-[#1B1742] text-slate-200 border border-[#262159] rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className="font-bold text-[11px] text-[#35C8D5]">
                    {msg.sender === 'user' ? student.name.split(' ')[0] : 'Conectinho'}
                  </span>
                  <div className="flex items-center gap-2">
                    {msg.sender === 'ai' && (
                      <button
                        onClick={() => handleSpeechSimulation(msg.text)}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Ouvir leitura em voz alta"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <span className="text-[10px] text-slate-400 font-mono">{msg.timestamp}</span>
                  </div>
                </div>

                <p>{msg.text}</p>

                {msg.analogy && (
                  <div className="p-3 rounded-xl bg-[#0E0C22] border border-[#262159] text-xs text-[#FFD45C] space-y-1">
                    <p className="font-medium">{msg.analogy}</p>
                  </div>
                )}

                {msg.codeSnippet && (
                  <div className="rounded-xl bg-[#090714] border border-[#262159] p-3 font-mono text-[11px] text-[#35C8D5] overflow-x-auto">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1.5 pb-1 border-b border-[#262159] text-[9px] uppercase">
                      <Terminal className="w-3 h-3" />
                      <span>Exemplo Demonstrativo</span>
                    </div>
                    <pre className="whitespace-pre-wrap">{msg.codeSnippet}</pre>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing State */}
          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#6546D7] text-[#FFD45C] flex items-center justify-center text-xs shrink-0">
                🤖
              </div>
              <div className="p-3 rounded-2xl bg-[#1B1742] border border-[#262159] rounded-tl-none flex items-center gap-1.5">
                <span className="text-xs text-slate-400">Conectinho está pensando...</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C8D5] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C8D5] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C8D5] animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-[#0E0C22] border-t border-[#262159] flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-500 shrink-0 font-medium">Perguntas Rápidas:</span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-lg bg-[#1B1742] hover:bg-[#262159] text-slate-300 hover:text-white border border-[#262159] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form Bar */}
        <div className="p-4 bg-[#141130] border-t border-[#262159]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida ou peça um exemplo simples para o Conectinho..."
              className="flex-1 px-4 py-3 bg-[#0E0C22] border border-[#262159] focus:border-[#35C8D5] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`p-3 rounded-xl transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                input.trim() && !isTyping
                  ? 'bg-gradient-to-r from-[#6546D7] to-[#246BFD] text-white shadow-md hover:scale-105'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
              title="Enviar pergunta"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 px-1">
            <span>Todas as conversas respeitam as diretrizes de proteção e privacidade de menores.</span>
            <span>Sem registro de dados sensíveis</span>
          </div>
        </div>

      </div>

    </div>
  );
};
