"use client";

import React, { useState, useMemo } from "react";
import { Header } from "./Header";
import { TabNavigation, TabType } from "./TabNavigation";
import { HeroCard } from "./HeroCard";
import { AlertBanner } from "./AlertBanner";
import { ClassCard } from "./ClassCard";
import { SearchInput } from "./SearchInput";
import { classesData, ClassEntry } from "@/data/classes";
import { getCurrentDayName, ACADEMIC_DAYS } from "@/utils/date";
import { CalendarX, SearchX, CalendarDays } from "lucide-react";

export const ClassScheduleView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("hoje");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Clear search when switching tabs to avoid stale results
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  // Detect current day on client
  const todayName = useMemo(() => getCurrentDayName(), []);

  // Filter classes for "Hoje"
  const todayClasses = useMemo<ClassEntry[]>(() => {
    return classesData.filter(
      (c: ClassEntry) => c.dia_semana.toLowerCase() === todayName.toLowerCase()
    );
  }, [todayName]);

  // Filtered classes for "Hoje" with search query applied
  const filteredTodayClasses = useMemo<ClassEntry[]>(() => {
    if (!searchQuery.trim()) return todayClasses;
    const query = searchQuery.toLowerCase().trim();
    return todayClasses.filter(
      (c: ClassEntry) =>
        c.disciplina.toLowerCase().includes(query) ||
        c.sala.toLowerCase().includes(query) ||
        c.modalidade.toLowerCase().includes(query)
    );
  }, [todayClasses, searchQuery]);

  // Classes grouped by day for "Semana" tab
  const weekClassesGrouped = useMemo<Map<string, ClassEntry[]>>(() => {
    const query = searchQuery.toLowerCase().trim();
    const map = new Map<string, ClassEntry[]>();

    ACADEMIC_DAYS.forEach((day: string) => {
      let list = classesData.filter(
        (c: ClassEntry) => c.dia_semana.toLowerCase() === day.toLowerCase()
      );

      if (query) {
        list = list.filter(
          (c: ClassEntry) =>
            c.disciplina.toLowerCase().includes(query) ||
            c.sala.toLowerCase().includes(query) ||
            c.modalidade.toLowerCase().includes(query)
        );
      }

      map.set(day, list);
    });

    return map;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Fixed Header */}
      <Header />

      {/* Main Container */}
      {/* pb-safe handles iOS home-bar overlap */}
      <main className="flex-1 w-full max-w-md sm:max-w-3xl lg:max-w-6xl mx-auto px-4 py-4 sm:py-6 pb-safe flex flex-col gap-4">
        {/* Navigation Tabs */}
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

        {/* TAB: HOJE */}
        {activeTab === "hoje" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-200">
            {/* Hero Card with current day and total classes count */}
            <HeroCard dayName={todayName} count={todayClasses.length} />

            {/* Alert Banner */}
            <AlertBanner />

            {/* Search Input */}
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Buscar por disciplina ou sala..."
            />

            {/* Classes List Header */}
            <div className="flex items-center justify-between mt-1 mb-0.5">
              <h3 className="text-xs font-bold tracking-wider text-zinc-400 uppercase">
                {searchQuery ? "Resultados da Busca" : "Aulas de Hoje"}
              </h3>
              <span className="text-xs font-medium text-zinc-500">
                {filteredTodayClasses.length} de {todayClasses.length} aulas
              </span>
            </div>

            {/* Classes Cards Container */}
            {filteredTodayClasses.length > 0 ? (
              <div className="flex flex-col gap-3">
                {filteredTodayClasses.map((item: ClassEntry) => (
                  <ClassCard
                    key={item.id}
                    disciplina={item.disciplina}
                    horario={item.horario}
                    sala={item.sala}
                    modalidade={item.modalidade}
                  />
                ))}
              </div>
            ) : searchQuery ? (
              /* Search Empty State */
              <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3 my-4">
                <div className="p-3 bg-zinc-800/80 rounded-full text-zinc-400">
                  <SearchX className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-zinc-300">
                  Nenhuma aula encontrada para &quot;{searchQuery}&quot;
                </p>
                <p className="text-xs text-zinc-500 max-w-xs">
                  Tente buscar por outro nome de disciplina ou pelo número da sala.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  Limpar busca
                </button>
              </div>
            ) : (
              /* Day Off / Sunday Empty State */
              <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3 my-4">
                <div className="p-3 bg-blue-600/10 rounded-full text-blue-400">
                  <CalendarX className="w-7 h-7" />
                </div>
                <p className="text-base font-bold text-zinc-200">
                  Sem aulas programadas para hoje
                </p>
                <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                  Aproveite seu descanso! Alterne para a aba &quot;<strong className="text-zinc-200">Semana</strong>&quot; acima para conferir a grade completa da semana.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB: SEMANA */}
        {activeTab === "semana" && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-200">
            {/* Header info */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-zinc-50 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-blue-500" />
                  Grade Semanal
                </h2>
                <p className="text-xs text-zinc-400">
                  Visualização completa de Segunda a Sábado
                </p>
              </div>
            </div>

            {/* Search Input for Week */}
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Filtrar matérias ou salas na semana..."
            />

            {/* Horizontal Scroll Layout for Mobile & Desktop Grid */}
            <div className="w-full overflow-x-auto pb-6 snap-x touch-pan-x custom-scrollbar">
              <div className="flex gap-4 min-w-max lg:min-w-full lg:grid lg:grid-cols-3 xl:grid-cols-6">
                {ACADEMIC_DAYS.map((day: string) => {
                  const list = weekClassesGrouped.get(day) || [];
                  const isToday =
                    day.toLowerCase() === todayName.toLowerCase();

                  return (
                    <div
                      key={day}
                      className={`w-[290px] sm:w-[320px] lg:w-full shrink-0 snap-start flex flex-col gap-3 bg-zinc-900/40 border rounded-2xl p-3.5 sm:p-4 transition-colors ${
                        isToday
                          ? "border-blue-600/50 bg-blue-950/10 ring-1 ring-blue-600/30"
                          : "border-zinc-800/80"
                      }`}
                    >
                      {/* Day Column Header */}
                      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-zinc-100">
                            {day}
                          </span>
                          {isToday && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-600 text-white tracking-wider uppercase">
                              HOJE
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-zinc-500 bg-zinc-800/60 px-2 py-0.5 rounded-md">
                          {list.length} {list.length === 1 ? "aula" : "aulas"}
                        </span>
                      </div>

                      {/* Day Column Content */}
                      {list.length > 0 ? (
                        <div className="flex flex-col gap-2.5">
                          {list.map((item: ClassEntry) => (
                            <ClassCard
                              key={item.id}
                              disciplina={item.disciplina}
                              horario={item.horario}
                              sala={item.sala}
                              modalidade={item.modalidade}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="py-8 text-center text-xs text-zinc-500 bg-zinc-900/40 border border-dashed border-zinc-800 rounded-xl">
                          Nenhuma aula encontrada
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
