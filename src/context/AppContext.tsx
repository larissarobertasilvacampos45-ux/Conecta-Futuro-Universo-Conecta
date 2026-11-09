import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  UserRole,
  StudentProfile,
  CourseTrack,
  Quest,
  Badge,
  Certificate,
  Career,
  CreativeProject,
  EducatorStudent,
  AdminStats,
  AccessibilitySettings,
  AvatarConfig
} from '../types';
import {
  initialStudentProfile,
  courseTracks as defaultTracks,
  initialQuests as defaultQuests,
  badgesList as defaultBadges,
  certificatesList as defaultCertificates,
  careersList,
  creativeProjectsList,
  educatorStudentsList as defaultStudents,
  adminMetrics
} from '../data/mockData';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'xp' | 'info';
}

interface AppContextType {
  currentView: string;
  userRole: UserRole;
  student: StudentProfile;
  tracks: CourseTrack[];
  activeTrackId: string | null;
  activeLessonId: string | null;
  quests: Quest[];
  badges: Badge[];
  certificates: Certificate[];
  careers: Career[];
  projects: CreativeProject[];
  educatorStudents: EducatorStudent[];
  adminStats: AdminStats;
  accessibility: AccessibilitySettings;
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'register';
  confettiActive: boolean;
  toasts: ToastMessage[];

  // Actions
  navigateTo: (view: string, params?: { trackId?: string; lessonId?: string }) => void;
  setUserRole: (role: UserRole) => void;
  openAuthModal: (mode?: 'login' | 'register') => void;
  closeAuthModal: () => void;
  completeLesson: (lessonId: string, trackId: string, earnedXp?: number) => void;
  claimQuest: (questId: string) => void;
  updateAvatar: (avatar: Partial<AvatarConfig>) => void;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
  triggerToast: (title: string, message: string, type?: 'success' | 'xp' | 'info') => void;
  triggerConfetti: () => void;
  onConfettiEnd: () => void;
  sendMentorMessage: (studentId: string, message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'conecta_futuro_state_v1';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<string>('landing');
  const [userRole, setUserRoleState] = useState<UserRole>('student');
  const [activeTrackId, setActiveTrackId] = useState<string | null>('trk-logica-programacao');
  const [activeLessonId, setActiveLessonId] = useState<string | null>('les-2-2-4');

  const [student, setStudent] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_student`);
      return saved ? JSON.parse(saved) : initialStudentProfile;
    } catch {
      return initialStudentProfile;
    }
  });

  const [tracks, setTracks] = useState<CourseTrack[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_tracks`);
      return saved ? JSON.parse(saved) : defaultTracks;
    } catch {
      return defaultTracks;
    }
  });

  const [quests, setQuests] = useState<Quest[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_quests`);
      return saved ? JSON.parse(saved) : defaultQuests;
    } catch {
      return defaultQuests;
    }
  });

  const [badges, setBadges] = useState<Badge[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_badges`);
      return saved ? JSON.parse(saved) : defaultBadges;
    } catch {
      return defaultBadges;
    }
  });

  const [certificates, setCertificates] = useState<Certificate[]>(defaultCertificates);
  const [educatorStudents, setEducatorStudents] = useState<EducatorStudent[]>(defaultStudents);
  const [adminStats] = useState<AdminStats>(adminMetrics);

  const [accessibility, setAccessibility] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_a11y`);
      return saved ? JSON.parse(saved) : { fontSize: 'normal', reducedMotion: false, highContrast: false };
    } catch {
      return { fontSize: 'normal', reducedMotion: false, highContrast: false };
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [confettiActive, setConfettiActive] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_student`, JSON.stringify(student));
      localStorage.setItem(`${STORAGE_KEY}_tracks`, JSON.stringify(tracks));
      localStorage.setItem(`${STORAGE_KEY}_quests`, JSON.stringify(quests));
      localStorage.setItem(`${STORAGE_KEY}_badges`, JSON.stringify(badges));
      localStorage.setItem(`${STORAGE_KEY}_a11y`, JSON.stringify(accessibility));
    } catch {
      // storage unavailable or full
    }
  }, [student, tracks, quests, badges, accessibility]);

  const triggerToast = (title: string, message: string, type: 'success' | 'xp' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const triggerConfetti = () => {
    setConfettiActive(true);
  };

  const onConfettiEnd = () => {
    setConfettiActive(false);
  };

  const navigateTo = (view: string, params?: { trackId?: string; lessonId?: string }) => {
    if (params?.trackId) setActiveTrackId(params.trackId);
    if (params?.lessonId) setActiveLessonId(params.lessonId);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: accessibility.reducedMotion ? 'auto' : 'smooth' });
  };

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);
    if (role === 'educator') {
      setCurrentView('educator');
      triggerToast('Modo Educador Ativado', 'Bem-vindo ao Painel de Acompanhamento Pedagógico.', 'info');
    } else if (role === 'admin') {
      setCurrentView('admin');
      triggerToast('Modo Administrador Ativado', 'Acesso à gestão geral e métricas de impacto social.', 'info');
    } else {
      setCurrentView('journey');
      triggerToast('Modo Explorador', 'Você está navegando como Alexandre (Estudante).', 'info');
    }
  };

  const openAuthModal = (mode: 'login' | 'register' = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const completeLesson = (lessonId: string, trackId: string, earnedXp: number = 50) => {
    let wasAlreadyCompleted = false;

    setTracks((prevTracks) =>
      prevTracks.map((track) => {
        if (track.id !== trackId) return track;
        let completedCount = 0;
        let totalCount = 0;
        const updatedModules = track.modules.map((mod) => {
          const updatedLessons = mod.lessons.map((les) => {
            totalCount++;
            if (les.id === lessonId) {
              if (les.completed) wasAlreadyCompleted = true;
              return { ...les, completed: true };
            }
            if (les.completed) completedCount++;
            return les;
          });
          return { ...mod, lessons: updatedLessons };
        });

        const newCompleted = Math.min(totalCount, completedCount + (wasAlreadyCompleted ? 0 : 1));
        return {
          ...track,
          modules: updatedModules,
          completedLessons: newCompleted
        };
      })
    );

    if (!wasAlreadyCompleted) {
      setStudent((prev) => {
        const newXp = prev.xp + earnedXp;
        const newLessons = prev.completedLessons + 1;
        let newLevel = prev.level;
        let newLevelTitle = prev.levelTitle;
        let newNextXp = prev.nextLevelXp;

        if (newXp >= prev.nextLevelXp) {
          newLevel += 1;
          newNextXp += 1500;
          if (newLevel === 5) newLevelTitle = 'Comandante da Frota';
          if (newLevel >= 6) newLevelTitle = 'Mestre Cósmico da IA';
          triggerToast('NÍVEL DESBLOQUEADO!', `Parabéns, você subiu para o Nível ${newLevel} (${newLevelTitle})!`, 'xp');
          triggerConfetti();
        } else {
          triggerToast('Aula Concluída!', `+${earnedXp} XP adicionados à sua jornada espacial!`, 'xp');
        }

        return {
          ...prev,
          xp: newXp,
          level: newLevel,
          levelTitle: newLevelTitle,
          nextLevelXp: newNextXp,
          completedLessons: newLessons
        };
      });

      // Update quests progress
      setQuests((prev) =>
        prev.map((q) => {
          if (q.id === 'qst-desafio-logica' && trackId === 'trk-logica-programacao') {
            const nextP = Math.min(q.maxProgress, q.progress + 1);
            return { ...q, progress: nextP, completed: nextP >= q.maxProgress };
          }
          return q;
        })
      );
    }
  };

  const claimQuest = (questId: string) => {
    const quest = quests.find((q) => q.id === questId);
    if (!quest || !quest.completed || quest.claimed) return;

    setQuests((prev) =>
      prev.map((q) => (q.id === questId ? { ...q, claimed: true } : q))
    );

    setStudent((prev) => {
      const newXp = prev.xp + quest.xp;
      return {
        ...prev,
        xp: newXp
      };
    });

    triggerToast('Recompensa Resgatada!', `+${quest.xp} XP creditados com sucesso!`, 'xp');
    triggerConfetti();
  };

  const updateAvatar = (newAvatar: Partial<AvatarConfig>) => {
    setStudent((prev) => ({
      ...prev,
      avatar: { ...prev.avatar, ...newAvatar }
    }));
    triggerToast('Avatar Atualizado', 'Sua identidade visual cósmica foi salva!', 'success');
  };

  const updateAccessibility = (settings: Partial<AccessibilitySettings>) => {
    setAccessibility((prev) => ({ ...prev, ...settings }));
  };

  const sendMentorMessage = (studentId: string, message: string) => {
    setEducatorStudents((prev) =>
      prev.map((est) =>
        est.id === studentId
          ? { ...est, mentorNotes: `${est.mentorNotes} | [Mensagem enviada: ${message}]` }
          : est
      )
    );
    triggerToast('Incentivo Enviado', 'Mensagem motivacional enviada com carinho para o estudante.', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        userRole,
        student,
        tracks,
        activeTrackId,
        activeLessonId,
        quests,
        badges,
        certificates,
        careers: careersList,
        projects: creativeProjectsList,
        educatorStudents,
        adminStats,
        accessibility,
        isAuthModalOpen,
        authModalMode,
        confettiActive,
        toasts,
        navigateTo,
        setUserRole,
        openAuthModal,
        closeAuthModal,
        completeLesson,
        claimQuest,
        updateAvatar,
        updateAccessibility,
        triggerToast,
        triggerConfetti,
        onConfettiEnd,
        sendMentorMessage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
