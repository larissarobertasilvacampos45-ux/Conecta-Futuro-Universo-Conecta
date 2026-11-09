export type UserRole = 'student' | 'educator' | 'admin' | 'guest';

export interface AvatarConfig {
  suit: 'cadete-roxo' | 'astronauta-azul' | 'explorador-ciano' | 'guardiao-dourado';
  visor: 'visor-sorriso' | 'visor-holograma' | 'visor-estelar' | 'visor-cyber';
  pet: 'robo-conectinho' | 'cachorro-cyber' | 'gato-espacial' | 'drone-orb';
  background: 'nebulosa-purpura' | 'galaxia-azul' | 'supernova-dourada' | 'aurora-cosmica';
}

export interface StudentProfile {
  id: string;
  name: string;
  username: string;
  age: number;
  level: number;
  levelTitle: string;
  xp: number;
  nextLevelXp: number;
  streakDays: number;
  completedLessons: number;
  unlockedBadgesCount: number;
  avatar: AvatarConfig;
  currentTrackId: string;
  guardianAuthorized: boolean;
}

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  reducedMotion: boolean;
  highContrast: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LessonContent {
  intro: string;
  theory: string[];
  practicalExampleTitle?: string;
  practicalExampleCode?: string;
  practicalExampleLanguage?: string;
  keyTakeaways: string[];
  quiz?: QuizQuestion;
}

export interface Lesson {
  id: string;
  title: string;
  durationMin: number;
  completed: boolean;
  content: LessonContent;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseTrack {
  id: string;
  level: 1 | 2 | 3 | 4;
  levelName: string;
  title: string;
  tagline: string;
  description: string;
  category: 'informática' | 'lógica' | 'programação' | 'ia' | 'segurança';
  iconName: string;
  durationHours: number;
  lessonCount: number;
  completedLessons: number;
  xpReward: number;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  colorAccent: string;
  modules: CourseModule[];
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  xp: number;
  category: 'diaria' | 'trilha' | 'criatividade' | 'especial';
  progress: number;
  maxProgress: number;
  completed: boolean;
  claimed: boolean;
  badgeReward?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  category: 'bronze' | 'silver' | 'gold' | 'cosmic';
}

export interface Certificate {
  id: string;
  title: string;
  trackName: string;
  studentName: string;
  issuedDate: string;
  code: string;
  hours: number;
  skills: string[];
}

export interface FreeCourseSuggestion {
  name: string;
  platform: string;
  urlText: string;
  type: string;
}

export interface Career {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  dailyTasks: string[];
  essentialSkills: string[];
  tools: string[];
  studyRoadmap: string[];
  freeCourses: FreeCourseSuggestion[];
  marketOverview: string;
}

export interface CreativeProject {
  id: string;
  title: string;
  category: 'Jogos' | 'Web' | 'Histórias' | 'IA' | 'Algoritmos';
  difficulty: 'Iniciante' | 'Intermediário' | 'Desafio';
  description: string;
  status: 'em_andamento' | 'concluido' | 'explorar';
  progressPercent: number;
  techStack: string[];
  interactiveType: 'game' | 'code' | 'prompt' | 'builder';
}

export interface EducatorStudent {
  id: string;
  name: string;
  age: number;
  currentTrack: string;
  progressPercent: number;
  lastActive: string;
  status: 'em_dia' | 'precisa_apoio' | 'destaque';
  completedExercises: number;
  questionsAskedToAI: number;
  mentorNotes: string;
}

export interface AdminStats {
  totalStudents: number;
  activeSchools: number;
  completionRate: number;
  avgHoursPerWeek: number;
  totalXPGenerated: number;
  socialImpactScore: number;
}
