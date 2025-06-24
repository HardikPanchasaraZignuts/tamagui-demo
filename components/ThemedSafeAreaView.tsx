import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, useThemeName } from "tamagui";

export default function ThemedSafeAreaView({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const themeName = useThemeName();

  return (
    <SafeAreaView
      key={themeName}
      style={{ flex: 1, backgroundColor: theme.background.val }}
    >
      {children}
    </SafeAreaView>
  );
}
