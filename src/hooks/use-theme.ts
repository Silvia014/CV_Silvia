import { useCallback } from "react";

/**
 * Toggles the `.dark` class on <html> and persists the choice.
 * The initial class is set by an inline script in __root.tsx to avoid FOUC.
 */
export function useThemeToggle() {
  return useCallback(() => {
    if (typeof document === "undefined") return;
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore storage errors */
    }
  }, []);
}
