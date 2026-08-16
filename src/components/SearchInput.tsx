"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Buscar por disciplina ou sala...",
}) => {
  return (
    <div className="relative w-full my-3">
      <div className="relative flex items-center w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all duration-200">
        <Search className="w-4 h-4 text-zinc-400 shrink-0 mr-2.5" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none border-none p-0 focus:outline-none focus:ring-0"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="p-1 text-zinc-400 hover:text-zinc-200 rounded-full hover:bg-zinc-800 transition-colors ml-1"
            aria-label="Limpar busca"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
