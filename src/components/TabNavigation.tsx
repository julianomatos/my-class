"use client";

import React from "react";

export type TabType = "hoje" | "semana";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav
      aria-label="Abas de Navegação"
      className="w-full my-2 sticky top-[61px] z-40 bg-zinc-950/70 backdrop-blur-md pt-1 pb-2"
    >
      <div className="bg-zinc-900/90 p-1 rounded-full border border-zinc-800 flex items-center gap-1 w-full max-w-md mx-auto shadow-inner">
        <button
          type="button"
          id="tab-hoje"
          role="tab"
          aria-selected={activeTab === "hoje"}
          aria-controls="panel-hoje"
          onClick={() => onTabChange("hoje")}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-200 text-center ${
            activeTab === "hoje"
              ? "bg-zinc-700 text-white shadow-md"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          }`}
        >
          Hoje
        </button>
        <button
          type="button"
          id="tab-semana"
          role="tab"
          aria-selected={activeTab === "semana"}
          aria-controls="panel-semana"
          onClick={() => onTabChange("semana")}
          className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-200 text-center ${
            activeTab === "semana"
              ? "bg-zinc-700 text-white shadow-md"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          }`}
        >
          Semana
        </button>
      </div>
    </nav>
  );
};
