import Header from "@/components/Header";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { ChevronDown } from "lucide-react-native";
import { useState } from "react";
import {
  Accordion,
  Button,
  Group,
  ScrollView,
  Separator,
  Tabs,
  Text,
  useTheme,
  XStack,
  YStack,
} from "tamagui";

export default function OrganizePage() {
  const theme = useTheme();

  const [tab, setTab] = useState("tab1");
  const [gender, setGender] = useState("male");
  return (
    <ThemedSafeAreaView>
      <YStack flex={1} p="$4">
        <Header />
        <Text fontSize="$7" fontWeight="800" mb="$4" text="center">
          Organize Components
        </Text>

        <Separator my="$4" />

        <ScrollView>
          {/* Accordion */}
          <Text fontSize="$5" fontWeight="700" mt="$4">
            Accordion
          </Text>
          <Accordion type="single" collapsible>
            {[
              {
                title: "What is Tamagui?",
                content:
                  "Tamagui is a universal UI kit and style system for RN + Web.",
              },
              {
                title: "Why use Tamagui?",
                content:
                  "It provides performance, theme control and unified styling.",
              },
            ].map((item, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                borderWidth={1}
                borderColor="$borderColor"
                bg="$background"
                rounded="$6"
                overflow="hidden"
                my="$2"
              >
                <Accordion.Trigger
                  flexDirection="row"
                  justify="space-between"
                  items="center"
                  p="$3"
                >
                  <Text fontSize="$5" fontWeight="600">
                    {item.title}
                  </Text>
                  <ChevronDown color={theme.color.val} />
                </Accordion.Trigger>
                <Accordion.Content p="$3" pt={0}>
                  <Text fontSize="$4" color="$color">
                    {item.content}
                  </Text>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>

          <Separator my="$4" />
          {/* Tabs */}
          <Text fontSize="$5" fontWeight="700" mb="$2">
            Tabs
          </Text>
          <Tabs
            defaultValue="tab1"
            flexDirection="column"
            value={tab}
            onValueChange={setTab}
          >
            <Tabs.List
              justifyContent="center"
              borderRadius="$4"
              overflow="hidden"
              borderWidth={1}
              borderColor="$borderColor"
              bg="$background"
              mb="$3"
            >
              {["tab1", "tab2"].map((t, i) => (
                <Tabs.Tab
                  key={t}
                  unstyled
                  value={t}
                  flex={1}
                  py="$2"
                  px="$4"
                  borderRightWidth={i === 0 ? 1 : 0}
                  borderColor="$borderColor"
                >
                  <YStack
                    bg={tab === t ? "$color" : "$background"}
                    px="$2"
                    py="$1"
                    rounded="$4"
                  >
                    <Text
                      fontWeight="700"
                      items="center"
                      color={tab === t ? "$background" : "$color"}
                    >
                      {t === "tab1" ? "First" : "Second"}
                    </Text>
                  </YStack>
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Tabs.Content value="tab1">
              <Text px="$2" fontSize="$4">
                This is the content of the First tab.
              </Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text px="$2" fontSize="$4">
                This is the content of the Second tab.
              </Text>
            </Tabs.Content>
          </Tabs>

          <Separator my="$4" />

          {/* Group (e.g. Radio Button Style) */}
          <Text fontSize="$5" mb={"$2"} fontWeight="700">
            Group
          </Text>
          <Group bordered p={"$4"}>
            <XStack gap={"$2"}>
              <Button
                size="$3"
                variant={gender === "male" ? undefined : "outlined"}
                onPress={() => setGender("male")}
              >
                Male
              </Button>
              <Button
                size="$3"
                variant={gender === "female" ? undefined : "outlined"}
                onPress={() => setGender("female")}
              >
                Female
              </Button>
            </XStack>
          </Group>
        </ScrollView>
      </YStack>
    </ThemedSafeAreaView>
  );
}
