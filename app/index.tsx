import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Paragraph, Text, useTheme, YStack } from "tamagui";

export default function Index() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.val }}>
      <YStack flex={1} p="$4" bg="$background">
        <Header />
        <YStack flex={1} py={"$10"} gap={"$10"}>
          <Text fontSize={"$9"} fontWeight={"900"} text="center">
            Welcome to Theme Showroom
          </Text>
          <Paragraph
            fontSize={"$5"}
            fontWeight={"400"}
            text="center"
            mx={"auto"}
            maxW={300}
          >
            Explore Tamagui components in both Light and Dark themes.
          </Paragraph>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}
