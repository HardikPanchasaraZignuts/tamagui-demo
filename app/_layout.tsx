import DrawerWrapper from "@/components/DrawerWrapper";
import { useThemeStore } from "@/stores/useThemeStore";
import tamaguiConfig from "@/tamagui.config";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";

export default function RootLayout() {
  const { theme } = useThemeStore();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) return null;
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
        <DrawerWrapper />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
