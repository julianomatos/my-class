"use client";

import React from "react";
import { Star, LayoutGrid } from "lucide-react";

export type FilterMode = "favorites" | "all";

interface FavoritesFilterPillProps {
  mode: FilterMode;
  onModeChange: (mode: FilterMode) => void;
  favoritesCount?: number;
}

export const FavoritesFilterPill: React.FC<FavoritesFilterPillProps> = ({
  mode,
  onModeChange,
  favoritesCount = 0,
}) => {
  return (
    <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800 rounded-full w-full max-w-xs mx-auto shadow-inner">
      <button
        type="button"
        onClick={() => onModeChange("favorites")}
        className={`flex-1 py-1.5 px-3 rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
          mode === "favorites"
            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
        }`}
      >
        <Star
          className={`w-3.5 h-3.5 ${
            mode === "favorites"
              ? "text-amber-400 fill-amber-400"
              : "text-zinc-400"
          }`}
        />
        Minhas Aulas
        {favoritesCount > 0 && (
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              mode === "favorites"
                ? "bg-amber-400 text-zinc-950 font-extrabold"
                : "bg-zinc-800 text-zinc-400"
            }`}
          >
            {favoritesCount}
          </span>
        )}
      </button>

      <button
        type="button"
        onClick={() => onModeChange("all")}
        className={`flex-1 py-1.5 px-3 rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
          mode === "all"
            ? "bg-zinc-700 text-white shadow-sm"
            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
        }`}
      >
        <LayoutGrid className="w-3.5 h-3.5" />
        Todas
      </button>
    </div>
  );
};
