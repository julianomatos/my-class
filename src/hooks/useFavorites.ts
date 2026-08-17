"use client";

import { useState, useEffect, useCallback } from "react";

const FAVORITES_STORAGE_KEY = "my_class_favorites_v1";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Load favorites from localStorage only after mounting on client (prevents hydration mismatch)
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos do localStorage:", error);
    }
  }, []);

  // Sync state changes with localStorage
  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter((favId) => favId !== id) : [...prev, id];
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
      } catch (error) {
        console.error("Erro ao salvar favoritos no localStorage:", error);
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.includes(id);
    },
    [favorites]
  );

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    isMounted,
    hasFavorites: favorites.length > 0,
  };
}
