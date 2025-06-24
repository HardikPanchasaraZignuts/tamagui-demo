import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Button, Text, XStack } from 'tamagui'
import { Menu } from "@tamagui/lucide-icons";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const navigation = useNavigation();
  return (
    <XStack justify="space-between" items="center" py="$3">
      <Button icon={Menu} size="$3" circular onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      <Text fontSize="$6" fontWeight="700" flex={1} text={"center"} >Theme Showroom</Text>
      <ThemeToggle />
    </XStack>
  );
}