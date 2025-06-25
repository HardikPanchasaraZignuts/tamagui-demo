import { useState } from "react";
import { Button, Text, XStack, YStack } from "tamagui";

export const SIZE_TOKENS = ["$1", "$2", "$3", "$4", "$5", "$6"] as const;
export type SizeToken = (typeof SIZE_TOKENS)[number];

const SizeSelector = ({
  onChange,
  initialIndex = 3,
}: {
  onChange: (size: SizeToken) => void;
  initialIndex?: number;
}) => {
    const [sizeIndex, setSizeIndex] = useState(initialIndex);
    const size = SIZE_TOKENS[sizeIndex];

    const increaseSize = () => {
      if (sizeIndex < SIZE_TOKENS.length - 1) {
        const next = sizeIndex + 1;
        setSizeIndex(next);
        onChange(SIZE_TOKENS[next]);
      }
    };

    const decreaseSize = () => {
      if (sizeIndex > 0) {
        const next = sizeIndex - 1;
        setSizeIndex(next);
        onChange(SIZE_TOKENS[next]);
      }
    };

  return (
    <YStack gap="$2" my="$4">
      <Text fontSize="$6" text="center" fontWeight="700">
        Component Size: {size}
      </Text>
      <XStack gap="$3" justify="center">
        <Button onPress={decreaseSize} disabled={sizeIndex === 0}>
          -
        </Button>
        <Button
          onPress={increaseSize}
          disabled={sizeIndex === SIZE_TOKENS.length - 1}
        >
          +
        </Button>
      </XStack>
    </YStack>
  );
};

export default SizeSelector