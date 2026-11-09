import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, CheckCircle2, Info } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-slide-in ${
            toast.type === 'xp'
              ? 'bg-[#1b1742]/95 border-[#FFD45C]/50 text-white shadow-[#FFD45C]/10'
              : toast.type === 'success'
              ? 'bg-[#1b1742]/95 border-[#35C8D5]/50 text-white shadow-[#35C8D5]/10'
              : 'bg-[#1b1742]/95 border-[#6546D7]/50 text-white shadow-[#6546D7]/10'
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'xp' ? (
              <div className="w-8 h-8 rounded-lg bg-[#FFD45C]/20 text-[#FFD45C] flex items-center justify-center font-bold text-xs">
                <Sparkles className="w-4 h-4 animate-bounce" />
              </div>
            ) : toast.type === 'success' ? (
              <div className="w-8 h-8 rounded-lg bg-[#35C8D5]/20 text-[#35C8D5] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-[#6546D7]/20 text-[#7E62E6] flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold tracking-tight text-white">{toast.title}</h4>
            <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
