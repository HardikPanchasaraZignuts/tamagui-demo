import React from "react";
import { Button } from "tamagui";
import { useThemeStore } from "@/stores/useThemeStore";
import { Moon, Sun } from "@tamagui/lucide-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const Icon = theme === "light" ? Moon : Sun;

  return <Button onPress={toggleTheme} icon={Icon} size="$3" circular />;
}
