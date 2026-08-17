import React from "react";
import { BookOpen, DoorClosed } from "lucide-react";

interface HeaderProps {
  title?: string;
  userAvatarUrl?: string;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = "Salas de Aula",
  userName = "Aluno",
}) => {
  return (
    <header className="w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 sticky top-0 z-50 px-4 py-3 sm:px-6">
      <div className="max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <DoorClosed className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-zinc-50 leading-tight">
              {title}
            </h1>
            <p className="text-[11px] text-zinc-400 font-medium leading-none">
              Onde estudo hoje?
            </p>
          </div>
        </div>

        {/* User Avatar Mock */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-blue-400 shadow-inner">
            {/* {userName.substring(0, 2).toUpperCase()} */}
            ADS
          </div>
        </div>
      </div>
    </header>
  );
};
