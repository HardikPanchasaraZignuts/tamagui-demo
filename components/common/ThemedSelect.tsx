import React from "react";
import {
  Adapt,
  Label,
  Select,
  Sheet,
  YStack,
  getFontSize,
} from "tamagui";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { LinearGradient } from "tamagui/linear-gradient";
import type { FontSizeTokens, SelectProps } from "tamagui";

type Option = {
  label: string;
  value: string;
};

type ThemedSelectProps = SelectProps & {
  id?: string;
  label?: string;
  value: string;
  onChange: (val: string) => void;
  options: Option[];
};

export default function ThemedSelect({
  id = "themed-select",
  label,
  value,
  onChange,
  options,
  size = "$3",
  native = false,
  ...props
}: ThemedSelectProps) {
  return (
    <YStack gap="$2">
      {label && (
        <Label size={size} htmlFor={id}>
          {label}
        </Label>
      )}

      <Select
        id={id}
        value={value}
        onValueChange={onChange}
        disablePreventBodyScroll
        native={native}
        {...props}
      >
        <Select.Trigger size={size} iconAfter={ChevronDown}>
          <Select.Value placeholder={`Select ${label ?? ""}`} />
        </Select.Trigger>

        <Adapt when="maxMd" platform="touch">
          <Sheet
            native={!!native}
            modal
            dismissOnSnapToBottom
            animation="medium"
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              bg="$shadowColor"
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            items="center"
            justify="center"
            height="$3"
            width="100%"
          >
            <YStack z={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={["$background", "transparent"]}
              rounded="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport minW={200}>
            <Select.Group>
              {label && <Select.Label>{label}</Select.Label>}
              {options.map((item, index) => (
                <Select.Item key={item.value} index={index} value={item.value}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>

            {/* {native && (
              <YStack
                position="absolute"
                r={0}
                t={0}
                b={0}
                items="center"
                justify="center"
                width="$4"
                pointerEvents="none"
              >
                <ChevronDown size={getFontSize(size as FontSizeTokens)} />
              </YStack>
            )} */}
          </Select.Viewport>

          <Select.ScrollDownButton
            items="center"
            justify="center"
            height="$3"
            width="100%"
          >
            <YStack z={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={["transparent", "$background"]}
              rounded="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    </YStack>
  );
}
