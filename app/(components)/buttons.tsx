import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { Button, Stack, Text, XStack, YStack } from "tamagui";
import Header from "@/components/Header";
import { useState } from "react";

export default function ButtonsPage() {
  const buttonSizes = ["$1", "$2", "$3", "$4", "$5", "$6"] as const;
  const [sizeIndex, setSizeIndex] = useState(3);
  const size = buttonSizes[sizeIndex];

  const increaseSize = () => {
    if (sizeIndex < buttonSizes.length - 1) setSizeIndex((prev) => prev + 1);
  };

  const decreaseSize = () => {
    if (sizeIndex > 0) setSizeIndex((prev) => prev - 1);
  };

  return (
    <ThemedSafeAreaView>
      <YStack flex={1} p="$4" bg="$background">
        <Header />
        {/* Size controls */}
        <YStack gap="$2" my="$4">
          <Text fontSize="$6" text="center" fontWeight="700">
            Button Size: {size}
          </Text>
          <XStack gap="$3" justify="center">
            <Button onPress={decreaseSize} disabled={sizeIndex === 0}>
              -
            </Button>
            <Button
              onPress={increaseSize}
              disabled={sizeIndex === buttonSizes.length - 1}
            >
              +
            </Button>
          </XStack>
        </YStack>

        {/* Buttons */}

        <YStack my="$4" gap="$6">
          <Stack gap="$2">
            <Text text="center" fontWeight="700">
              Solid
            </Text>
            <Button size={size} >Default</Button>
          </Stack>
          <Stack gap="$2">
            <Text text="center" fontWeight="700">
              Outline
            </Text>
            <Button size={size} variant="outlined">Outlined</Button>
          </Stack>
          <Stack gap="$2">
            <Text text="center" fontWeight="700">
              Inverse
            </Text>
            <Button size={size} themeInverse>Inverse</Button>
          </Stack>
          <Stack gap="$2">
            <Text text="center" fontWeight="700">
              Dissabled
            </Text>
            <Button size={size} disabled>Dissabled</Button>
          </Stack>
          <Stack gap="$2">
            <Text text="center" fontWeight="700">
              Chromeless
            </Text>
            <Button size={size} chromeless>Chromeless</Button>
          </Stack>
        </YStack>
      </YStack>
    </ThemedSafeAreaView>
  );
}
