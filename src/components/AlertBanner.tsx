import React from "react";
import { Megaphone } from "lucide-react";

interface AlertBannerProps {
  message?: React.ReactNode;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ message }) => {
  return (
    <aside className="w-full bg-zinc-900 border-l-4 border-blue-600 rounded-r-xl p-3.5 sm:p-4 shadow-md flex items-start gap-3 my-4">
      <div className="p-1.5 bg-blue-600/10 rounded-lg shrink-0 mt-0.5">
        <Megaphone className="w-4 h-4 text-blue-500" />
      </div>
      <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
        {message || (
          <>
            Atenção: verifique o número da sua <strong className="font-semibold text-white">sala de hoje</strong> antes de se deslocar.
          </>
        )}
      </div>
    </aside>
  );
};
