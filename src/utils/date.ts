export const DAYS_OF_WEEK = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
] as const;

export const ACADEMIC_DAYS = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
] as const;

/**
 * Returns the current day of the week as a Portuguese string (e.g. "Segunda-feira").
 * Can receive a custom Date object for testing.
 */
export function getCurrentDayName(date: Date = new Date()): string {
  const dayIndex = date.getDay();
  return DAYS_OF_WEEK[dayIndex] || "Segunda-feira";
}

/**
 * Formats full date to Brazilian format string (e.g. "16 de Agosto")
 */
export function getFormattedDate(date: Date = new Date()): string {
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
  });
}
