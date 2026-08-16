import React from "react";

interface HeroCardProps {
  dayName: string;
  count: number;
}

export const HeroCard: React.FC<HeroCardProps> = ({ dayName, count }) => {
  const countText =
    count === 0
      ? "Nenhuma disciplina com aula hoje"
      : count === 1
      ? "1 disciplina com aula hoje"
      : `${count} disciplinas com aula hoje`;

  return (
    <div className="w-full bg-blue-600 rounded-2xl p-5 sm:p-6 text-white shadow-xl shadow-blue-600/15 border border-blue-500/40 relative overflow-hidden">
      {/* Dynamic background shine element */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between gap-4 relative z-10">
        {/* Left Content */}
        <div className="flex-1 min-w-0">
          <span className="block text-[11px] font-bold tracking-widest text-blue-100/80 uppercase mb-1">
            DIA DE HOJE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight truncate">
            {dayName}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100/90 font-medium mt-1">
            {countText}
          </p>
        </div>

        {/* Right Badge */}
        <div className="bg-blue-500/40 backdrop-blur-sm border border-blue-400/40 rounded-xl px-4 py-2.5 text-center min-w-[76px] shrink-0 shadow-inner">
          <span className="block text-[10px] font-extrabold text-blue-100 tracking-wider uppercase mb-0.5">
            AULAS
          </span>
          <span className="block text-2xl sm:text-3xl font-black text-white leading-none">
            {count}
          </span>
        </div>
      </div>
    </div>
  );
};
