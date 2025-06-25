import Drawer from "expo-router/drawer";
import { Home, ImageIcon, Layers, NotebookPen } from "lucide-react-native";
import { useTheme } from "tamagui";

export default function DrawerWrapper() {
  const theme = useTheme();
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          backgroundColor: theme.background.val,
          borderRightWidth: 1,
          borderColor: theme.borderColor?.val,
        },
        drawerActiveTintColor: theme.color.val,
        drawerInactiveTintColor: theme.color.val,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => <Home color={color} size={20} />,
        }}
      />
      <Drawer.Screen
        name="(components)/form"
        options={{
          drawerLabel: "Form",
          drawerIcon: ({ color }) => <NotebookPen color={color} size={20} />,
        }}
      />
      <Drawer.Screen
        name="(components)/organize"
        options={{
          drawerLabel: "Organize",
          drawerIcon: ({ color }) => <Layers color={color} size={20} />,
        }}
      />
      <Drawer.Screen
        name="(components)/content"
        options={{
          drawerLabel: "Content",
          drawerIcon: ({ color }) => <ImageIcon color={color} size={20} />,
        }}
      />
    </Drawer>
  );
}
