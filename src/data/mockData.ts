import { CourseTrack, Quest, Badge, Certificate, Career, CreativeProject, EducatorStudent, AdminStats, StudentProfile } from '../types';

export const initialStudentProfile: StudentProfile = {
  id: 'usr-explorador-01',
  name: 'Alexandre Campos',
  username: 'AlexExplorador',
  age: 14,
  level: 4,
  levelTitle: 'Navegador Estelar',
  xp: 2650,
  nextLevelXp: 3500,
  streakDays: 7,
  completedLessons: 18,
  unlockedBadgesCount: 8,
  avatar: {
    suit: 'cadete-roxo',
    visor: 'visor-sorriso',
    pet: 'robo-conectinho',
    background: 'nebulosa-purpura'
  },
  currentTrackId: 'trk-logica-programacao',
  guardianAuthorized: true
};

export const courseTracks: CourseTrack[] = [
  // --- NÍVEL 1: EXPLORADORES DIGITAIS ---
  {
    id: 'trk-fundamentos-computacao',
    level: 1,
    levelName: 'NÍVEL 1 — EXPLORADORES DIGITAIS',
    title: 'Fundamentos de Informática',
    tagline: 'Desvende o cérebro das máquinas e como o hardware se conecta com o software.',
    description: 'Aprenda como um computador funciona por dentro: o que são processadores, memória RAM, discos de armazenamento e como a eletricidade se transforma em códigos binários de 0s e 1s.',
    category: 'informática',
    iconName: 'Cpu',
    durationHours: 6,
    lessonCount: 4,
    completedLessons: 4,
    xpReward: 400,
    difficulty: 'Iniciante',
    colorAccent: '#35C8D5',
    modules: [
      {
        id: 'mod-1-1',
        title: 'Módulo 1: Anatomia da Máquina',
        lessons: [
          {
            id: 'les-1-1-1',
            title: '1. O que é Hardware e Software?',
            durationMin: 12,
            completed: true,
            content: {
              intro: 'Bem-vindo ao primeiro salto da sua expedição! Para entender o universo da tecnologia, precisamos decifrar os dois pilares fundamentais.',
              theory: [
                'Hardware é a parte física: tudo o que você pode tocar no mundo real. Inclui tela, teclado, fios, chips e bateria.',
                'Software é a mente da máquina: os programas, instruções lógicas, jogos e sistemas que dizem ao hardware o que fazer.',
                'Sem software, o hardware é só uma caixa de metal; sem hardware, o software não tem onde existir no espaço físico.'
              ],
              practicalExampleTitle: 'Analogia do Robô Astronauta',
              practicalExampleCode: '// Exemplo simples:\nHardware = O corpo de metal, rodas e sensores do robô\nSoftware = O cérebro programado que sabe desviar de crateras em Marte!',
              practicalExampleLanguage: 'text',
              keyTakeaways: [
                'Hardware = componentes físicos que você toca.',
                'Software = instruções e programas invisíveis a olho nu.',
                'Os dois precisam um do outro para criar a magia digital.'
              ],
              quiz: {
                question: 'Qual dos seguintes itens é um exemplo de SOFTWARE?',
                options: ['O teclado mecânico', 'O navegador de internet', 'O cabo USB', 'A tela do monitor'],
                correctAnswerIndex: 1,
                explanation: 'O navegador é um programa de computador feito de código de instruções, ou seja, software!'
              }
            }
          },
          {
            id: 'les-1-1-2',
            title: '2. Memória RAM vs Armazenamento (SSD/HD)',
            durationMin: 15,
            completed: true,
            content: {
              intro: 'Por que os computadores têm dois tipos de memória diferentes? Vamos viajar dentro da placa-mãe.',
              theory: [
                'A memória RAM é a "mesa de trabalho" do computador. Rápida e temporária: tudo o que está aberto agora fica nela.',
                'O armazenamento (SSD ou HD) é o "armário de arquivos": guarda suas fotos, jogos e trabalhos mesmo quando o PC está desligado.'
              ],
              practicalExampleTitle: 'Dica do Conectinho',
              practicalExampleCode: 'Quando a luz acaba:\n- O que estava na RAM se apaga instantaneamente.\n- O que você salvou no SSD fica são e salvo!',
              keyTakeaways: ['RAM é rápida e volátil.', 'SSD é o cofre permanente de longo prazo.'],
              quiz: {
                question: 'O que acontece com os dados na memória RAM quando você desliga o computador?',
                options: ['Eles continuam salvos para sempre', 'Eles são apagados imediatamente', 'Eles viram um aplicativo', 'Eles vão para a nuvem sozinhos'],
                correctAnswerIndex: 1,
                explanation: 'A RAM é uma memória volátil: precisa de energia constante para segurar os dados.'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-como-funciona-internet',
    level: 1,
    levelName: 'NÍVEL 1 — EXPLORADORES DIGITAIS',
    title: 'A Grande Teia da Internet',
    tagline: 'Como uma mensagem no WhatsApp atravessa oceanos em milissegundos?',
    description: 'Explore a infraestrutura global da internet: cabos de fibra óptica submarinos, servidores, endereços IP e como os dados viajam em pacotinhos pelo planeta.',
    category: 'informática',
    iconName: 'Globe',
    durationHours: 8,
    lessonCount: 4,
    completedLessons: 4,
    xpReward: 450,
    difficulty: 'Iniciante',
    colorAccent: '#246BFD',
    modules: [
      {
        id: 'mod-1-2',
        title: 'Módulo 1: A Rodovia dos Dados',
        lessons: [
          {
            id: 'les-1-2-1',
            title: '1. O que é um Endereço IP e DNS?',
            durationMin: 14,
            completed: true,
            content: {
              intro: 'Na internet, cada dispositivo conectado recebe um endereço único para que os dados saibam para onde ir.',
              theory: [
                'O Endereço IP (Internet Protocol) funciona como o CEP e número da sua casa cósmica.',
                'O DNS (Domain Name System) é a agenda telefônica da internet: ele traduz nomes fáceis como "conectafuturo.org" para números que as máquinas entendem, como 192.168.1.1.'
              ],
              practicalExampleTitle: 'Tradutor de Endereços',
              practicalExampleCode: 'conectafuturo.org ──[DNS]──> 172.217.16.206 (Servidor no Datacenter)',
              keyTakeaways: ['IP identifica aparelhos.', 'DNS traduz nomes humanos para números de máquina.'],
              quiz: {
                question: 'Qual é o papel principal do servidor DNS?',
                options: ['Armazenar jogos pesados', 'Traduzir nomes de sites (como google.com) para números IP', 'Consertar teclados quebrados', 'Criar senhas aleatórias'],
                correctAnswerIndex: 1,
                explanation: 'O DNS evita que você precise decorar sequências numéricas enormes para abrir um site!'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-seguranca-digital-privacidade',
    level: 1,
    levelName: 'NÍVEL 1 — EXPLORADORES DIGITAIS',
    title: 'Segurança Online e Cidadania Digital',
    tagline: 'Construa um escudo digital indestrutível para navegar seguro na rede.',
    description: 'Aprenda a criar senhas fortes, identificar golpes e phishing, configurar privacidade nas redes e proteger suas informações no ambiente online.',
    category: 'segurança',
    iconName: 'ShieldCheck',
    durationHours: 6,
    lessonCount: 3,
    completedLessons: 3,
    xpReward: 500,
    difficulty: 'Iniciante',
    colorAccent: '#FFD45C',
    modules: [
      {
        id: 'mod-1-3',
        title: 'Módulo 1: Escudo Protetor',
        lessons: [
          {
            id: 'les-1-3-1',
            title: '1. A Anatomia de uma Senha Mestre',
            durationMin: 15,
            completed: true,
            content: {
              intro: 'Sua senha é a chave do seu foguete digital. Se for fraca, invasores podem entrar sem pedir licença.',
              theory: [
                'Evite usar seu nome, data de aniversário ou sequências como "123456" ou "senha123".',
                'Uma senha forte combina: mais de 12 caracteres, letras maiúsculas e minúsculas, números e símbolos especiais (!@#$).',
                'Melhor ainda é usar uma frase secreta: "MeuCachorroAstronautaComeu2Pizzas!".'
              ],
              practicalExampleTitle: 'Comparação de Resistência',
              practicalExampleCode: '❌ "joao2010" -> Quebrada em menos de 1 segundo por um computador.\n✅ "Estrela!Azul#Voa2026" -> Levaria séculos para um supercomputador adivinhar!',
              keyTakeaways: ['Use frases longas com símbolos.', 'Nunca compartilhe senhas nem com melhores amigos.', 'Ative autenticação em duas etapas sempre que possível.'],
              quiz: {
                question: 'Qual é a melhor prática para proteger suas contas online?',
                options: ['Usar a mesma senha curta em todas as redes', 'Anotar a senha num post-it colado no monitor', 'Criar senhas longas com símbolos e ativar verificação em duas etapas', 'Enviar sua senha por mensagem para o suporte'],
                correctAnswerIndex: 2,
                explanation: 'A combinação de senha forte e verificação em duas etapas cria uma barreira quase impenetrável!'
              }
            }
          }
        ]
      }
    ]
  },

  // --- NÍVEL 2: CRIADORES DIGITAIS ---
  {
    id: 'trk-pensamento-computacional',
    level: 2,
    levelName: 'NÍVEL 2 — CRIADORES DIGITAIS',
    title: 'Pensamento Computacional',
    tagline: 'A arte de decompor problemas gigantes em passos simples e geniais.',
    description: 'Os 4 pilares do raciocínio lógico: decomposição, reconhecimento de padrões, abstração e criação de algoritmos para resolver qualquer enigma do mundo.',
    category: 'lógica',
    iconName: 'Sparkles',
    durationHours: 8,
    lessonCount: 4,
    completedLessons: 4,
    xpReward: 550,
    difficulty: 'Iniciante',
    colorAccent: '#6546D7',
    modules: [
      {
        id: 'mod-2-1',
        title: 'Módulo 1: Os Quatro Pilares',
        lessons: [
          {
            id: 'les-2-1-1',
            title: '1. Decomposição: Fatiando o Desafio',
            durationMin: 15,
            completed: true,
            content: {
              intro: 'Como você come uma pizza inteira? Fatia por fatia. O pensamento computacional começa aqui.',
              theory: [
                'Decomposição é dividir uma tarefa complexa em pedacinhos menores e mais fáceis de resolver.',
                'Se você quer criar um jogo, não tenta fazer tudo de uma vez. Primeiro cria o movimento do personagem, depois os obstáculos, depois o placar de pontos.'
              ],
              practicalExampleTitle: 'Passo a Passo Algorítmico',
              practicalExampleCode: '// Desafio: Fazer um bolo cósmico\n1. Separar ingredientes (ovos, farinha, poeira de estrelas)\n2. Misturar a massa\n3. Assar no forno a 180°C por 30 minutos\n4. Decorar com cobertura de cometa',
              keyTakeaways: ['Grandes problemas são apenas conjuntos de problemas pequenos bem organizados.'],
              quiz: {
                question: 'O que é a Decomposição no pensamento computacional?',
                options: ['Destruir o computador quando der erro', 'Dividir um problema complexo em partes menores gerenciáveis', 'Trocar a cor do código', 'Fazer cálculos matemáticos de cabeça'],
                correctAnswerIndex: 1,
                explanation: 'Exatamente! Dividir para conquistar é o segredo de todo bom programador.'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-logica-programacao',
    level: 2,
    levelName: 'NÍVEL 2 — CRIADORES DIGITAIS',
    title: 'Lógica de Programação',
    tagline: 'Variáveis, condições Se/Senão e repetições: a linguagem universal do código.',
    description: 'Domine a estrutura fundamental de qualquer linguagem de programação. Aprenda como tomar decisões lógicas, criar laços de repetição e manipular variáveis.',
    category: 'lógica',
    iconName: 'Binary',
    durationHours: 10,
    lessonCount: 5,
    completedLessons: 3,
    xpReward: 650,
    difficulty: 'Iniciante',
    colorAccent: '#35C8D5',
    modules: [
      {
        id: 'mod-2-2',
        title: 'Módulo 1: Decisões e Variáveis',
        lessons: [
          {
            id: 'les-2-2-1',
            title: '1. Caixas Secretas: O que são Variáveis?',
            durationMin: 16,
            completed: true,
            content: {
              intro: 'Imagine caixas com etiquetas onde você pode guardar números, palavras e objetos mágicos.',
              theory: [
                'Uma variável é um espaço na memória do computador com um nome e um valor que pode mudar ao longo do tempo.',
                'Exemplos clássicos de variáveis num jogo: "vidas = 3", "pontuacao = 150", "nome_jogador = Alex".'
              ],
              practicalExampleTitle: 'Declarando Variáveis',
              practicalExampleCode: 'let vidas = 3;\nlet pontuacao = 0;\nlet temChaveDourada = true;\n\n// Se coletar uma moeda:\npontuacao = pontuacao + 10;',
              practicalExampleLanguage: 'javascript',
              keyTakeaways: ['Variáveis guardam informações.', 'O valor dentro da caixa pode ser lido e atualizado a qualquer momento.'],
              quiz: {
                question: 'Se a variável "estrelas = 5" e depois executamos "estrelas = estrelas + 2", quanto vale "estrelas"?',
                options: ['5', '2', '7', '10'],
                correctAnswerIndex: 2,
                explanation: '5 somado com 2 resulta em 7 guardado dentro da variável estrelas!'
              }
            }
          },
          {
            id: 'les-2-2-2',
            title: '2. Tomando Decisões: O Poder do SE e SENÃO',
            durationMin: 18,
            completed: true,
            content: {
              intro: 'Computadores tomam milhares de decisões lógicas por segundo. Veja como isso acontece.',
              theory: [
                'Estruturas condicionais testam se algo é VERDADEIRO (true) ou FALSO (false).',
                'SE tiver combustível suficiente, o foguete decola; SENÃO, ativa o alerta na base.'
              ],
              practicalExampleTitle: 'Código de Decisão do Foguete',
              practicalExampleCode: 'if (combustivel > 50) {\n  decolarParaMarte();\n} else {\n  abastecerNaEstacao();\n}',
              practicalExampleLanguage: 'javascript',
              keyTakeaways: ['O "if" testa uma condição.', 'O "else" só executa se a condição inicial for falsa.'],
              quiz: {
                question: 'Em um jogo, se o personagem tiver 0 vidas, o que o código deve fazer?',
                options: ['Continuar jogando normalmente', 'Aumentar a velocidade do jogo', 'Exibir tela de Game Over', 'Desligar a internet do computador'],
                correctAnswerIndex: 2,
                explanation: 'Usamos um condicional: "if (vidas === 0) { exibirGameOver(); }".'
              }
            }
          },
          {
            id: 'les-2-2-3',
            title: '3. Repetições Inteligentes: Laços de Repetição',
            durationMin: 20,
            completed: true,
            content: {
              intro: 'Cansado de fazer a mesma coisa 100 vezes? Deixe a máquina repetir para você.',
              theory: [
                'Laços de repetição (Loops) como "for" e "while" executam um bloco de código repetidas vezes até que uma condição termine.',
                'Em vez de escrever "andar(); andar(); andar();", dizemos "repita 3 vezes: andar();".'
              ],
              practicalExampleTitle: 'Loop para Coletar 5 Cristais',
              practicalExampleCode: 'for (let i = 1; i <= 5; i++) {\n  console.log("Coletando cristal número " + i);\n  coletarCristal();\n}',
              practicalExampleLanguage: 'javascript',
              keyTakeaways: ['Evita repetição manual desnecessária.', 'Economiza linhas e deixa o programa ultra veloz.'],
              quiz: {
                question: 'Qual é a maior vantagem de usar um laço de repetição (loop)?',
                options: ['Ouvir música enquanto digita', 'Automatizar ações repetitivas sem precisar reescrever o mesmo código', 'Trocar a cor do monitor', 'Fazer o código parar para sempre'],
                correctAnswerIndex: 1,
                explanation: 'Loops permitem que o computador repita tarefas milhões de vezes com pouquíssimas linhas de código!'
              }
            }
          },
          {
            id: 'les-2-2-4',
            title: '4. Funções: Os Superpoderes Reutilizáveis',
            durationMin: 20,
            completed: false,
            content: {
              intro: 'Em vez de inventar a roda toda vez, criamos receitas mágicas que podemos chamar quando quisermos.',
              theory: [
                'Uma função é um bloco de código com nome próprio que executa uma tarefa específica.',
                'Você pode passar dados para ela (parâmetros) e ela pode te devolver um resultado (retorno).'
              ],
              practicalExampleTitle: 'Criando a Função Pular',
              practicalExampleCode: 'function pularObstaculo(altura) {\n  aplicarImpulso(altura * 1.5);\n  tocarSomDePulo();\n}\n\n// Chamando a função:\npularObstaculo(10);',
              practicalExampleLanguage: 'javascript',
              keyTakeaways: ['Funções organizam o código.', 'Podem ser reaproveitadas quantas vezes precisar.'],
              quiz: {
                question: 'Por que agrupamos código dentro de funções?',
                options: ['Para esconder o código de amigos', 'Para poder reutilizar o mesmo comando facilmente em vários lugares', 'Porque o computador é obrigado a reiniciar', 'Para deixar o arquivo mais pesado'],
                correctAnswerIndex: 1,
                explanation: 'Reutilização e clareza são os grandes propósitos das funções!'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-programacao-em-blocos',
    level: 2,
    levelName: 'NÍVEL 2 — CRIADORES DIGITAIS',
    title: 'Programação em Blocos Interativa',
    tagline: 'Construa animações e joguinhos encaixando blocos visuais como Lego digital.',
    description: 'Aprenda lógica sem se preocupar com ponto-e-vírgula! Encaixe comandos coloridos, controle personagens na tela e crie suas primeiras histórias interativas.',
    category: 'programação',
    iconName: 'Boxes',
    durationHours: 8,
    lessonCount: 4,
    completedLessons: 0,
    xpReward: 500,
    difficulty: 'Iniciante',
    colorAccent: '#FF8978',
    modules: [
      {
        id: 'mod-2-3',
        title: 'Módulo 1: O Palco dos Atores',
        lessons: [
          {
            id: 'les-2-3-1',
            title: '1. Quando a Bandeira Verde for Clicada',
            durationMin: 15,
            completed: false,
            content: {
              intro: 'Descubra como eventos iniciam todas as ações no palco do Scratch e Blockly.',
              theory: [
                'Em programação por blocos, eventos são os gatilhos: "Quando clicar", "Quando tocar", "Quando a tecla espaço for pressionada".'
              ],
              practicalExampleTitle: 'Comando em Bloco',
              practicalExampleCode: '[Quando Bandeira Verde Clicada]\n  [Mova 10 passos]\n  [Diga "Olá, Galáxia!" por 2 segundos]',
              keyTakeaways: ['Eventos iniciam a ação.', 'Blocos se encaixam de cima para baixo.'],
              quiz: {
                question: 'O que é um "Evento" na programação em blocos?',
                options: ['Uma festa na escola', 'O gatilho que faz o código começar a rodar (ex: pressionar uma tecla)', 'O botão de desligar o monitor', 'Um erro no programa'],
                correctAnswerIndex: 1,
                explanation: 'O evento é o sinal de partida para que as ações comecem!'
              }
            }
          }
        ]
      }
    ]
  },

  // --- NÍVEL 3: DESENVOLVEDORES DO FUTURO ---
  {
    id: 'trk-python-iniciantes',
    level: 3,
    levelName: 'NÍVEL 3 — DESENVOLVEDORES DO FUTURO',
    title: 'Introdução ao Python Divertido',
    tagline: 'A linguagem mais popular da astronomia, ciência de dados e inteligência artificial.',
    description: 'Escreva código real com a sintaxe limpa e elegante do Python. Crie pequenos jogos no terminal, calculadoras espaciais e scripts automatizados.',
    category: 'programação',
    iconName: 'Terminal',
    durationHours: 12,
    lessonCount: 6,
    completedLessons: 0,
    xpReward: 800,
    difficulty: 'Intermediário',
    colorAccent: '#FFD45C',
    modules: [
      {
        id: 'mod-3-1',
        title: 'Módulo 1: Primeiros Passos com Python',
        lessons: [
          {
            id: 'les-3-1-1',
            title: '1. O Famoso "Olá, Mundo!" no Python',
            durationMin: 15,
            completed: false,
            content: {
              intro: 'Bem-vindo ao Python! Uma das linguagens mais amadas do planeta por sua simplicidade que parece inglês.',
              theory: [
                'No Python, para mostrar algo na tela usamos a função print().',
                'Texto sempre fica dentro de aspas: "Olá, Universo!".'
              ],
              practicalExampleTitle: 'Seu primeiro código Python',
              practicalExampleCode: '# Criando um explorador estelar em Python\nnome = "Alexandre"\nplaneta = "Terra"\nprint(f"Astronauta {nome} partindo do planeta {planeta}!")',
              practicalExampleLanguage: 'python',
              keyTakeaways: ['print() exibe mensagens.', 'Sintaxe limpa sem chaves ou ponto-e-vírgula.'],
              quiz: {
                question: 'Como exibimos a palavra "Conecta" no terminal usando Python?',
                options: ['escreva "Conecta"', 'print("Conecta")', 'mostrar(Conecta)', 'echo.conecta[]'],
                correctAnswerIndex: 1,
                explanation: 'A função print() com o texto entre aspas é o comando padrão do Python!'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-html-css-web',
    level: 3,
    levelName: 'NÍVEL 3 — DESENVOLVEDORES DO FUTURO',
    title: 'Criação de Sites com HTML & CSS',
    tagline: 'Aprenda a construir e estilizar páginas web que qualquer pessoa no mundo pode visitar.',
    description: 'Descubra como montar o esqueleto de uma página com tags HTML e vesti-la com cores, gradientes, sombras e fontes personalizadas usando CSS moderno.',
    category: 'programação',
    iconName: 'Layout',
    durationHours: 14,
    lessonCount: 6,
    completedLessons: 0,
    xpReward: 850,
    difficulty: 'Intermediário',
    colorAccent: '#246BFD',
    modules: [
      {
        id: 'mod-3-2',
        title: 'Módulo 1: Esqueleto e Estilo',
        lessons: [
          {
            id: 'les-3-2-1',
            title: '1. O que são Tags HTML?',
            durationMin: 18,
            completed: false,
            content: {
              intro: 'HTML significa HyperText Markup Language: a linguagem que estrutura cada parágrafo, botão e imagem na internet.',
              theory: [
                'Tags funcionam como caixas com etiqueta de abertura e fechamento: <tag>Conteúdo</tag>.',
                'Exemplos fundamentais: <h1> para título principal, <p> para parágrafos, <button> para botões clicáveis.'
              ],
              practicalExampleTitle: 'Código HTML de um cartão espacial',
              practicalExampleCode: '<div class="card-espacial">\n  <h1>Base Lunar Conecta</h1>\n  <p>Status da missão: Prontos para lançamento!</p>\n  <button>Iniciar Foguete</button>\n</div>',
              practicalExampleLanguage: 'html',
              keyTakeaways: ['HTML cuida da estrutura e do conteúdo.', 'Tags sempre devem ser bem fechadas.'],
              quiz: {
                question: 'Qual tag HTML é usada para criar o título mais importante de uma página?',
                options: ['<title-big>', '<p>', '<h1>', '<head-one>'],
                correctAnswerIndex: 2,
                explanation: '<h1> é o Heading nível 1, o título principal hierárquico da página!'
              }
            }
          }
        ]
      }
    ]
  },

  // --- NÍVEL 4: INOVADORES COM IA ---
  {
    id: 'trk-fundamentos-ia',
    level: 4,
    levelName: 'NÍVEL 4 — INOVADORES COM IA',
    title: 'Fundamentos de Inteligência Artificial',
    tagline: 'Desmistificando como as máquinas aprendem através de dados e padrões matemáticos.',
    description: 'Entenda como redes neurais artificiais reconhecem imagens, como modelos de linguagem processam palavras e por que a IA não é mágica, é matemática e computação.',
    category: 'ia',
    iconName: 'Bot',
    durationHours: 10,
    lessonCount: 5,
    completedLessons: 0,
    xpReward: 900,
    difficulty: 'Avançado',
    colorAccent: '#6546D7',
    modules: [
      {
        id: 'mod-4-1',
        title: 'Módulo 1: Aprendizado de Máquina Desvendado',
        lessons: [
          {
            id: 'les-4-1-1',
            title: '1. Como a Máquina Aprende com Exemplos?',
            durationMin: 16,
            completed: false,
            content: {
              intro: 'Diferente da programação comum onde damos regras prontas, no Machine Learning mostramos milhares de exemplos para o computador aprender o padrão.',
              theory: [
                'Para uma IA aprender a reconhecer um gato, não escrevemos "tem bigode e orelhas pontudas".',
                'Nós mostramos 50.000 fotos de gatos e 50.000 fotos de outros animais. O algoritmo ajusta conexões matemáticas até acertar com precisão impressionante.'
              ],
              practicalExampleTitle: 'Treinamento de Modelo',
              practicalExampleCode: 'Dados de Entrada (Fotos rotuladas) ➔ Rede Neural (Ajuste de Pesos) ➔ Predição ("Isso é um gato com 98% de certeza!")',
              keyTakeaways: ['IAs aprendem com dados e exemplos.', 'Bons dados geram modelos justos e inteligentes.'],
              quiz: {
                question: 'Como uma IA de Machine Learning aprende uma nova habilidade?',
                options: ['Comendo livros de biblioteca', 'Sendo treinada com milhares de exemplos e dados para encontrar padrões', 'Ligando e desligando o computador 10 vezes', 'Por telepatia quântica'],
                correctAnswerIndex: 1,
                explanation: 'O aprendizado supervisionado alimenta o modelo com dados de alta qualidade para calibrar seus pesos!'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-engenharia-prompts',
    level: 4,
    levelName: 'NÍVEL 4 — INOVADORES COM IA',
    title: 'Engenharia de Prompts para Jovens',
    tagline: 'Aprenda a fazer as perguntas certas e usar a IA como uma super-parceira de estudos.',
    description: 'Instruções claras geram respostas brilhantes. Aprenda técnicas como dar contexto, especificar formato, definir papéis (personas) e usar o método passo-a-passo.',
    category: 'ia',
    iconName: 'MessageSquareCode',
    durationHours: 8,
    lessonCount: 4,
    completedLessons: 0,
    xpReward: 850,
    difficulty: 'Intermediário',
    colorAccent: '#35C8D5',
    modules: [
      {
        id: 'mod-4-2',
        title: 'Módulo 1: A Arte da Conversa com IA',
        lessons: [
          {
            id: 'les-4-2-1',
            title: '1. A Fórmula de um Bom Prompt',
            durationMin: 15,
            completed: false,
            content: {
              intro: 'O que você digita para a IA é chamado de "Prompt". Um prompt vago dá respostas chatas; um prompt detalhado gera respostas espetaculares.',
              theory: [
                'Regra de Ouro: Papel + Tarefa + Contexto + Formato.',
                'Exemplo fraco: "Me fale sobre robôs."',
                'Exemplo mestre: "Atue como um cientista espacial empolgado e explique como os robôs exploram Marte para um jovem de 13 anos em 3 tópicos curtos."'
              ],
              practicalExampleTitle: 'Fórmula RCP (Papel, Contexto, Proposta)',
              practicalExampleCode: '[PAPEL]: Você é um tutor paciente de programação.\n[CONTEXTO]: Estou aprendendo JavaScript no Conecta Futuro.\n[TAREFA]: Me explique o que é um array usando uma analogia divertida com estojos escolares.\n[FORMATO]: Curto, com 1 exemplo de código.',
              keyTakeaways: ['Seja específico.', 'Diga o formato desejado (tabela, tópicos, código, história).', 'A IA pensa melhor quando você pede para ela raciocinar passo a passo.'],
              quiz: {
                question: 'Qual dos seguintes prompts gerará a explicação mais clara e personalizada para um estudante?',
                options: ['Explique código', 'O que é computador?', 'Atue como um tutor paciente e explique variáveis para um jovem de 14 anos com uma analogia de caixas mágicas', 'Diga tudo'],
                correctAnswerIndex: 2,
                explanation: 'Fornecer papel (tutor), público (14 anos) e analogia dá direção exata para a inteligência artificial!'
              }
            }
          }
        ]
      }
    ]
  },
  {
    id: 'trk-etica-ia-cidadania',
    level: 4,
    levelName: 'NÍVEL 4 — INOVADORES COM IA',
    title: 'Ética em IA e Cidadania Digital',
    tagline: 'Com grandes poderes tecnológicos vêm grandes responsabilidades.',
    description: 'Como combater vieses algorítmicos, reconhecer imagens e textos gerados (deepfakes), respeitar a privacidade alheia e garantir que a tecnologia sirva a humanidade.',
    category: 'ia',
    iconName: 'Compass',
    durationHours: 6,
    lessonCount: 3,
    completedLessons: 0,
    xpReward: 750,
    difficulty: 'Intermediário',
    colorAccent: '#FF8978',
    modules: [
      {
        id: 'mod-4-3',
        title: 'Módulo 1: Tecnologia com Consciência',
        lessons: [
          {
            id: 'les-4-3-1',
            title: '1. O que são Vieses em Inteligência Artificial?',
            durationMin: 14,
            completed: false,
            content: {
              intro: 'A IA não tem preconceitos biológicos, mas pode herdar os preconceitos existentes nos dados que os seres humanos colocaram na internet.',
              theory: [
                'Se um modelo for treinado apenas com fotos de médicos homens, ele pode achar erroneamente que mulheres não podem ser médicas.',
                'Engenheiros responsáveis devem auditar dados para garantir justiça, diversidade e inclusão em qualquer sistema inteligente.'
              ],
              practicalExampleTitle: 'Exemplo Real',
              practicalExampleCode: 'Dados justos e diversos = IA justa que atende todas as pessoas com respeito e precisão.',
              keyTakeaways: ['IAs refletem os dados com que foram treinadas.', 'Devemos questionar e verificar as fontes.'],
              quiz: {
                question: 'Como podemos garantir que uma ferramenta de IA seja justa para todas as pessoas?',
                options: ['Deixar o computador decidir sozinho sem checar', 'Auditar os dados de treinamento com equipes diversas e testar contra vieses', 'Usar a ferramenta no escuro', 'Esconder os erros do público'],
                correctAnswerIndex: 1,
                explanation: 'A auditoria humana e a inclusão de dados diversos são indispensáveis para uma tecnologia ética!'
              }
            }
          }
        ]
      }
    ]
  }
];

export const initialQuests: Quest[] = [
  {
    id: 'qst-primeira-aula',
    title: 'Pioneiro do Universo',
    description: 'Conclua sua primeira aula no Conecta Futuro e inicie sua jornada espacial.',
    xp: 150,
    category: 'especial',
    progress: 1,
    maxProgress: 1,
    completed: true,
    claimed: true,
    badgeReward: 'bdg-primeiro-passo'
  },
  {
    id: 'qst-desafio-logica',
    title: 'Mente Algorítmica',
    description: 'Complete 3 aulas na trilha de Lógica de Programação.',
    xp: 250,
    category: 'trilha',
    progress: 3,
    maxProgress: 3,
    completed: true,
    claimed: false
  },
  {
    id: 'qst-conversa-ia',
    title: 'Diálogo com Conectinho',
    description: 'Faça uma pergunta sobre tecnologia para o Professor IA.',
    xp: 100,
    category: 'diaria',
    progress: 1,
    maxProgress: 1,
    completed: true,
    claimed: false
  },
  {
    id: 'qst-quiz-perfeito',
    title: 'Mestre dos Quizzes',
    description: 'Acerte 5 perguntas de quiz de primeira sem errar.',
    xp: 300,
    category: 'especial',
    progress: 4,
    maxProgress: 5,
    completed: false,
    claimed: false
  },
  {
    id: 'qst-lab-projeto',
    title: 'Criador Estelar',
    description: 'Abra e teste um dos projetos no Laboratório Criativo.',
    xp: 200,
    category: 'criatividade',
    progress: 0,
    maxProgress: 1,
    completed: false,
    claimed: false
  }
];

export const badgesList: Badge[] = [
  {
    id: 'bdg-primeiro-passo',
    title: 'Primeiro Salto',
    description: 'Deu os primeiros passos na plataforma e completou uma lição.',
    icon: 'Rocket',
    unlocked: true,
    unlockedDate: '02/11/2026',
    category: 'bronze'
  },
  {
    id: 'bdg-seguranca-maxima',
    title: 'Guardião Digital',
    description: 'Completou a trilha de Segurança Online e Cidadania.',
    icon: 'Shield',
    unlocked: true,
    unlockedDate: '04/11/2026',
    category: 'silver'
  },
  {
    id: 'bdg-curioso-ia',
    title: 'Amigo do Robô',
    description: 'Conversou com o Professor IA e tirou 5 dúvidas complexas.',
    icon: 'Bot',
    unlocked: true,
    unlockedDate: '06/11/2026',
    category: 'bronze'
  },
  {
    id: 'bdg-mestre-hardware',
    title: 'Engenheiro de Peças',
    description: 'Conquistou nota máxima no teste de componentes de computador.',
    icon: 'Cpu',
    unlocked: true,
    unlockedDate: '07/11/2026',
    category: 'silver'
  },
  {
    id: 'bdg-streak-7',
    title: 'Constelação de Fogo',
    description: 'Manteve 7 dias consecutivos de aprendizado contínuo.',
    icon: 'Flame',
    unlocked: true,
    unlockedDate: 'Hoje',
    category: 'gold'
  },
  {
    id: 'bdg-pioneiro-python',
    title: 'Encantador de Serpentes',
    description: 'Escreveu suas primeiras linhas de código Python com sucesso.',
    icon: 'Code2',
    unlocked: false,
    category: 'silver'
  },
  {
    id: 'bdg-criador-web',
    title: 'Arquiteto da Web',
    description: 'Publicou seu primeiro projeto interativo com HTML e CSS.',
    icon: 'Globe',
    unlocked: false,
    category: 'gold'
  },
  {
    id: 'bdg-inovador-ia',
    title: 'Alquimista de Prompts',
    description: 'Dominou técnicas avançadas de interação com IA com ética.',
    icon: 'Sparkles',
    unlocked: false,
    category: 'cosmic'
  }
];

export const certificatesList: Certificate[] = [
  {
    id: 'cert-fundamentos-01',
    title: 'Certificado de Conclusão — Explorador Digital',
    trackName: 'Fundamentos de Informática & Segurança Digital',
    studentName: 'Alexandre Campos',
    issuedDate: '05 de Novembro de 2026',
    code: 'CF-EXP-2026-9812A',
    hours: 12,
    skills: ['Hardware', 'Software', 'Arquitetura da Internet', 'Segurança de Senhas', 'Privacidade Online']
  }
];

export const careersList: Career[] = [
  {
    id: 'car-desenvolvedor',
    title: 'Desenvolvedor(a) de Software',
    subtitle: 'O arquiteto que constrói os aplicativos, jogos e sistemas do mundo moderno.',
    description: 'Programadores usam linguagens de código para criar soluções reais: desde o aplicativo de entregas até o piloto automático de carros elétricos.',
    icon: 'Code2',
    color: '#246BFD',
    dailyTasks: [
      'Escrever código limpo e testar funcionalidades novas.',
      'Corrigir bugs e melhorar a velocidade de programas.',
      'Trabalhar em equipe com designers e gerentes de produto.',
      'Pesquisar novas tecnologias e ferramentas para resolver enigmas.'
    ],
    essentialSkills: [
      'Lógica de programação e raciocínio estruturado.',
      'Curiosidade e paciência para investigar erros.',
      'Comunicação em equipe e empatia com o usuário.'
    ],
    tools: ['VS Code', 'GitHub', 'Python', 'JavaScript / TypeScript', 'React'],
    studyRoadmap: [
      '1. Lógica de Programação e Pensamento Computacional.',
      '2. Domínio de HTML, CSS e JavaScript básico.',
      '3. Aprender uma linguagem de backend (Python ou Node.js).',
      '4. Construir projetos práticos para criar um portfólio próprio.'
    ],
    freeCourses: [
      { name: 'Curso em Vídeo de Python (Prof. Guanabara)', platform: 'YouTube', urlText: 'Aulas 100% gratuitas em PT-BR', type: 'Gratuito' },
      { name: 'freeCodeCamp (Desenvolvimento Web Responsivo)', platform: 'freeCodeCamp', urlText: 'Interativo e com certificado grátis', type: 'Gratuito' },
      { name: 'Trilha Desenvolvedor do Futuro', platform: 'Conecta Futuro', urlText: 'Na nossa plataforma', type: 'Conecta' }
    ],
    marketOverview: 'Uma das profissões mais demandadas do Brasil e do mundo, com milhares de vagas remotas permitindo trabalhar de qualquer cidade.'
  },
  {
    id: 'car-ia',
    title: 'Especialista em Inteligência Artificial',
    subtitle: 'Quem ensina os computadores a pensar, criar e resolver problemas complexos.',
    description: 'Cria e treina modelos de redes neurais artificiais para diagnosticar doenças, prever mudanças no clima, criar artes e automatizar tarefas repetitivas.',
    icon: 'Bot',
    color: '#6546D7',
    dailyTasks: [
      'Treinar algoritmos com grandes volumes de dados.',
      'Avaliar se a IA está cometendo erros ou gerando respostas tendenciosas.',
      'Ajustar hiperparâmetros para deixar os modelos mais eficientes.',
      'Garantir segurança ética e respeito à privacidade dos usuários.'
    ],
    essentialSkills: [
      'Matemática básica e raciocínio estatístico.',
      'Programação em Python.',
      'Pensamento crítico e forte senso de ética.'
    ],
    tools: ['Python', 'PyTorch / TensorFlow', 'Jupyter Notebooks', 'Google Colab', 'Hugging Face'],
    studyRoadmap: [
      '1. Fundamentos de Informática e Lógica de Programação.',
      '2. Python aplicado a dados (Bibliotecas NumPy e Pandas).',
      '3. Noções de Estatística e Aprendizado de Máquina.',
      '4. Engenharia de Prompts e Ética Aplicada.'
    ],
    freeCourses: [
      { name: 'Elements of AI (Universidade de Helsinque)', platform: 'Web', urlText: 'Curso introdutório gratuito legendado', type: 'Gratuito' },
      { name: 'Kaggle Learn (Python & Intro to Machine Learning)', platform: 'Kaggle', urlText: 'Exercícios práticos gratuitos no navegador', type: 'Gratuito' },
      { name: 'Trilha Inovadores com IA', platform: 'Conecta Futuro', urlText: 'Aqui na plataforma', type: 'Conecta' }
    ],
    marketOverview: 'A carreira com o crescimento mais acelerado da década, com carência global de profissionais éticos e capacitados.'
  },
  {
    id: 'car-dados',
    title: 'Cientista e Analista de Dados',
    subtitle: 'O detetive que encontra segredos valiosos em montanhas de informações.',
    description: 'Transforma dados brutos em gráficos, previsões e insights estratégicos para governos, ONGs, hospitais e empresas tomarem decisões acertadas.',
    icon: 'BarChart3',
    color: '#35C8D5',
    dailyTasks: [
      'Limpar e organizar tabelas com milhares de registros.',
      'Construir painéis visuais com gráficos interativos.',
      'Descobrir tendências de comportamento de pessoas e sistemas.',
      'Apresentar descobertas de forma simples para quem não entende de código.'
    ],
    essentialSkills: [
      'Curiosidade investigativa.',
      'Gosto por números, padrões e gráficos.',
      'Capacidade de contar histórias com dados (Data Storytelling).'
    ],
    tools: ['Excel / Google Sheets Avançado', 'SQL', 'Python / R', 'Power BI', 'Metabase'],
    studyRoadmap: [
      '1. Dominar planilhas e fórmulas lógicas.',
      '2. Aprender banco de dados e consultas SQL.',
      '3. Visualização de dados e gráficos eficientes.',
      '4. Python para análise estatística.'
    ],
    freeCourses: [
      { name: 'SQL para Iniciantes', platform: 'Khan Academy', urlText: 'Gratuito e em português', type: 'Gratuito' },
      { name: 'Google Data Analytics no Coursera (Bolsas)', platform: 'Coursera / Instituto G', urlText: 'Programa de bolsas para jovens', type: 'Gratuito com Bolsa' }
    ],
    marketOverview: 'Todas as indústrias modernas dependem de dados para não tomar decisões no escuro.'
  },
  {
    id: 'car-seguranca',
    title: 'Especialista em Cibersegurança',
    subtitle: 'O escudo invisível que defende pessoas, hospitais e satélites contra invasões.',
    description: 'Testa vulnerabilidades em sistemas (Hacking Ético), monitora redes contra ameaças e protege os dados de cidadãos contra fraudes e espionagem.',
    icon: 'Shield',
    color: '#FF8978',
    dailyTasks: [
      'Simular ataques para descobrir fraquezas antes dos invasores.',
      'Investigar incidentes de segurança e conter vírus ou ransomwares.',
      'Configurar firewalls, criptografia e políticas de proteção.',
      'Treinar equipes sobre como não cair em e-mails falsos (phishing).'
    ],
    essentialSkills: [
      'Pensamento analítico e persistência de detetive.',
      'Entendimento profundo de redes e sistemas operacionais.',
      'Conduta ética inegociável.'
    ],
    tools: ['Linux', 'Wireshark', 'Burp Suite', 'Nmap', 'Python para Scripts'],
    studyRoadmap: [
      '1. Fundamentos de Redes de Computadores e Protocolos (TCP/IP).',
      '2. Domínio do sistema operacional Linux.',
      '3. Criptografia básica e autenticação.',
      '4. Prática em laboratórios seguros (TryHackMe, OverTheWire).'
    ],
    freeCourses: [
      { name: 'Fundamentos de Cibersegurança Cisco Networking Academy', platform: 'Cisco Skills For All', urlText: 'Gratuito em português', type: 'Gratuito' },
      { name: 'TryHackMe (Módulos Básicos)', platform: 'TryHackMe', urlText: 'Prática gamificada gratuita', type: 'Gratuito' }
    ],
    marketOverview: 'Existe um déficit mundial de mais de 3 milhões de profissionais em segurança da informação. Empregabilidade altíssima.'
  },
  {
    id: 'car-ux-ui',
    title: 'Designer de UX / UI',
    subtitle: 'Quem garante que a tecnologia seja linda, intuitiva, acessível e fácil de usar.',
    description: 'Combina psicologia, arte visual e tecnologia para desenhar interfaces de aplicativos que qualquer pessoa, de qualquer idade, consiga usar sem frustração.',
    icon: 'Palette',
    color: '#FFD45C',
    dailyTasks: [
      'Entrevistar usuários para entender suas dores e necessidades.',
      'Desenhar protótipos de telas e testar a usabilidade com pessoas reais.',
      'Escolher paletas de cores com bom contraste e tipografia acessível.',
      'Trabalhar lado a lado com os desenvolvedores de frontend.'
    ],
    essentialSkills: [
      'Empatia genuína com as dificuldades de outras pessoas.',
      'Olho estético para proporção, hierarquia visual e cores.',
      'Criatividade e capacidade de simplificar coisas complicadas.'
    ],
    tools: ['Figma', 'FigJam', 'Pen & Paper', 'Coolors', 'Whimsical'],
    studyRoadmap: [
      '1. Princípios de Design Visual (Hierarquia, Contraste, Espaçamento).',
      '2. Pesquisa com usuários (UX Research) e testes de usabilidade.',
      '3. Domínio da ferramenta Figma para prototipagem.',
      '4. Acessibilidade digital (WCAG) para pessoas com deficiência.'
    ],
    freeCourses: [
      { name: 'Aprenda Figma do Zero', platform: 'YouTube / Figma Official', urlText: 'Tutoriais gratuitos e práticos', type: 'Gratuito' },
      { name: 'Guia de Acessibilidade Web (W3C Brasil)', platform: 'Ceweb.br', urlText: 'Artigos e materiais educativos abertos', type: 'Gratuito' }
    ],
    marketOverview: 'Produtos difíceis de usar perdem clientes. Por isso, bons designers de UX/UI são disputados pelas melhores empresas.'
  }
];

export const creativeProjectsList: CreativeProject[] = [
  {
    id: 'prj-space-runner',
    title: 'Corrida Espacial Cósmica',
    category: 'Jogos',
    difficulty: 'Iniciante',
    description: 'Um jogo estilo arcade onde o jogador controla uma nave espacial esquivando de asteroides e coletando estrelas de XP.',
    status: 'concluido',
    progressPercent: 100,
    techStack: ['JavaScript Canvas', 'Animação por Frames', 'Áudio Sintetizado'],
    interactiveType: 'game'
  },
  {
    id: 'prj-web-portfolio',
    title: 'Meu Cartão de Identidade Intergaláctica',
    category: 'Web',
    difficulty: 'Iniciante',
    description: 'Um mini-site pessoal com botões interativos, foto de perfil personalizada e efeitos de luz estelar com CSS.',
    status: 'em_andamento',
    progressPercent: 65,
    techStack: ['HTML5', 'CSS Grid', 'Gradientes Cósmicos'],
    interactiveType: 'builder'
  },
  {
    id: 'prj-story-ai',
    title: 'História Interativa: A Fuga da Lua Titã',
    category: 'Histórias',
    difficulty: 'Iniciante',
    description: 'Um livro-jogo interativo onde o leitor escolhe os caminhos e decisões do robô explorador em outro planeta.',
    status: 'explorar',
    progressPercent: 0,
    techStack: ['Lógica Condicional', 'Variáveis de Escolha'],
    interactiveType: 'prompt'
  },
  {
    id: 'prj-detect-star',
    title: 'Detector de Constelações com IA',
    category: 'IA',
    difficulty: 'Intermediário',
    description: 'Experimento visual que usa reconhecimento de padrões para conectar pontos luminosos na tela e formar constelações.',
    status: 'explorar',
    progressPercent: 0,
    techStack: ['Visão Computacional Simples', 'Canvas Interativo'],
    interactiveType: 'code'
  }
];

export const educatorStudentsList: EducatorStudent[] = [
  {
    id: 'est-01',
    name: 'Alexandre Campos',
    age: 14,
    currentTrack: 'Lógica de Programação',
    progressPercent: 68,
    lastActive: 'Hoje às 10:45',
    status: 'destaque',
    completedExercises: 24,
    questionsAskedToAI: 12,
    mentorNotes: 'Excelente raciocínio lógico em variáveis e loops. Muito participativo.'
  },
  {
    id: 'est-02',
    name: 'Beatriz Vasconcelos',
    age: 13,
    currentTrack: 'Fundamentos de Informática',
    progressPercent: 32,
    lastActive: 'Há 3 dias',
    status: 'precisa_apoio',
    completedExercises: 8,
    questionsAskedToAI: 4,
    mentorNotes: 'Teve dúvidas sobre o conceito de memória RAM vs SSD. Sugerir reforço prático.'
  },
  {
    id: 'est-03',
    name: 'Carlos Eduardo Santos',
    age: 15,
    currentTrack: 'Introdução ao Python',
    progressPercent: 85,
    lastActive: 'Ontem às 16:20',
    status: 'destaque',
    completedExercises: 31,
    questionsAskedToAI: 19,
    mentorNotes: 'Já criando pequenos scripts de texto em Python. Indicado para o Laboratório Criativo.'
  },
  {
    id: 'est-04',
    name: 'Daniela Ferreira',
    age: 12,
    currentTrack: 'Programação em Blocos',
    progressPercent: 55,
    lastActive: 'Hoje às 09:15',
    status: 'em_dia',
    completedExercises: 16,
    questionsAskedToAI: 7,
    mentorNotes: 'Adora criar histórias animadas. Progresso constante e dedicado.'
  },
  {
    id: 'est-05',
    name: 'Enzo Gabriel Lima',
    age: 16,
    currentTrack: 'Segurança Online',
    progressPercent: 42,
    lastActive: 'Há 5 dias',
    status: 'precisa_apoio',
    completedExercises: 10,
    questionsAskedToAI: 2,
    mentorNotes: 'Acesso irregular à internet durante a semana. Enviar incentivo pelo portal.'
  },
  {
    id: 'est-06',
    name: 'Fernanda Rocha',
    age: 14,
    currentTrack: 'Engenharia de Prompts com IA',
    progressPercent: 78,
    lastActive: 'Hoje às 11:30',
    status: 'em_dia',
    completedExercises: 22,
    questionsAskedToAI: 25,
    mentorNotes: 'Muito curiosa com IA ética. Faz perguntas reflexivas e profundas.'
  }
];

export const adminMetrics: AdminStats = {
  totalStudents: 1420,
  activeSchools: 18,
  completionRate: 76.4,
  avgHoursPerWeek: 4.8,
  totalXPGenerated: 842500,
  socialImpactScore: 98
};
