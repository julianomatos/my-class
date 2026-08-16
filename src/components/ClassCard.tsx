import React from "react";
import { Clock, Laptop, MapPin } from "lucide-react";

interface ClassCardProps {
  disciplina: string;
  horario: string;
  sala: string;
  modalidade: string;
}

export const ClassCard: React.FC<ClassCardProps> = ({
  disciplina,
  horario,
  sala,
  modalidade,
}) => {
  const isRemoto = modalidade?.toLowerCase().includes("remoto");

  return (
    <div className="w-full bg-zinc-900 border border-zinc-800/90 rounded-2xl p-3.5 sm:p-5 transition-all duration-200 hover:border-zinc-700/80 shadow-md flex justify-between items-center gap-3">
      {/* Left Info */}
      <div className="flex-1 min-w-0">
        {/* Discipline name: clamped to 2 lines on mobile to prevent overflow */}
        <h3 className="text-sm sm:text-base font-bold text-zinc-50 leading-snug tracking-tight mb-2 line-clamp-2">
          {disciplina}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-zinc-400">
          {/* Horario */}
          <span className="inline-flex items-center gap-1 font-medium text-zinc-300">
            <Clock className="w-3 h-3 text-zinc-400 shrink-0" />
            <span className="text-[11px]">{horario}</span>
          </span>

          {/* Modalidade Badge */}
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full border ${
              isRemoto
                ? "bg-purple-950/40 text-purple-300 border-purple-800/40"
                : "bg-zinc-800/80 text-zinc-300 border-zinc-700/60"
            }`}
          >
            {isRemoto ? (
              <Laptop className="w-2.5 h-2.5 shrink-0" />
            ) : (
              <MapPin className="w-2.5 h-2.5 shrink-0" />
            )}
            {modalidade}
          </span>
        </div>
      </div>

      {/* Right Sala Badge — fixed width so it never squishes */}
      <div className="bg-zinc-950/80 border border-blue-600/40 rounded-xl px-3 py-2 text-center flex flex-col items-center justify-center w-16 sm:w-20 shrink-0 shadow-sm">
        <span className="block text-[9px] sm:text-[10px] font-bold text-blue-400 tracking-wider uppercase leading-none mb-1">
          SALA
        </span>
        <span className="block text-lg sm:text-2xl font-black text-blue-400 leading-none">
          {sala}
        </span>
      </div>
    </div>
  );
};
