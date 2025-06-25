import Header from "@/components/Header";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  Circle,
  Image,
  ListItem,
  Paragraph,
  ScrollView,
  Square,
  Text,
  YStack,
} from "tamagui";
import { Settings, User, LogOut } from "@tamagui/lucide-icons";
import { LinearGradient } from "tamagui/linear-gradient";

export default function ContentPage() {
  return (
    <ThemedSafeAreaView>
      <YStack flex={1} p="$4" gap="$4">
        <Header />
        <Text fontSize="$7" fontWeight="800" text="center">
          Content Components
        </Text>

        <ScrollView>
          {/* Avatar */}

          <YStack items="center" gap="$2">
            <Text fontSize="$5" fontWeight="700">
              Avatar
            </Text>
            <Avatar circular size="$8">
              <AvatarImage
                src="https://i.pravatar.cc/300"
                accessibilityLabel="User avatar"
              />
              <Text color="$background" fontWeight="700">
                HP
              </Text>
            </Avatar>
            <Text color="$color" fontSize="$3">
              Hardik Panchasara
            </Text>
          </YStack>

          {/* Card */}
          <YStack gap="$2" mt="$4">
            <Text fontSize="$5" fontWeight="700">
              Card
            </Text>
            <Card bordered elevate size="$4" bg="$background" padded>
              <LinearGradient
                colors={["$blue10", "$blue6"]}
                start={[0, 0]}
                end={[1, 1]}
                position="absolute"
                fullscreen
                z={-1}
              />

              <Card.Header>
                <Text fontSize="$6" fontWeight="800">
                  New Update
                </Text>
                <Paragraph>Version 2.0 is out now with dark mode!</Paragraph>
              </Card.Header>
              <Card.Footer justify="flex-end">
                <Text fontWeight="600" color="$color">
                  Learn more
                </Text>
              </Card.Footer>
            </Card>
          </YStack>

          {/* Image */}
          <YStack gap="$2" mt="$4">
            <Text fontSize="$5" fontWeight="700">
              Image
            </Text>
            <Image
              source={{ uri: "https://i.pravatar.cc/200/300" }}
              width="100%"
              height={160}
              borderRadius="$4"
              resizeMode="cover"
            />
          </YStack>

          {/* List Items with Square and Circle */}
          <YStack gap="$2">
            <Text fontSize="$5" fontWeight="700">
              List Items
            </Text>

            <ListItem
              rounded="$4"
              icon={
                <Circle size={32} bg="$blue10" items="center" justify="center">
                  <User size={18} color="white" />
                </Circle>
              }
              title={
                <Text fontSize="$5" fontWeight="600">
                  Profile
                </Text>
              }
            />

            <ListItem
              rounded="$4"
              icon={
                <Square size={32} bg="$red10" items="center" justify="center">
                  <Settings size={18} color="white" />
                </Square>
              }
              title={
                <Text fontSize="$5" fontWeight="600">
                  Settings
                </Text>
              }
            />

            <ListItem
              rounded="$4"
              icon={
                <Circle size={32} bg="$red10" items="center" justify="center">
                  <LogOut size={18} color="white" />
                </Circle>
              }
              title={
                <Text fontSize="$5" fontWeight="600">
                  Logout
                </Text>
              }
            />
          </YStack>
        </ScrollView>
      </YStack>
    </ThemedSafeAreaView>
  );
}
