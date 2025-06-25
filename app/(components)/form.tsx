import SizeSelector, { SizeToken } from "@/components/common/SizeSelector";
import CustomSelect from "@/components/common/CustomSelect";
import Header from "@/components/Header";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { CheckIcon, Moon, Sun } from "lucide-react-native";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  ScrollView,
  Separator,
  Slider,
  styled,
  Switch,
  Text,
  TextArea,
  ToggleGroup,
  XStack,
  YStack,
} from "tamagui";

export default function FormPage() {
  const [size, setSize] = useState<SizeToken>("$3");

  const [form, setForm] = useState({
    fullName: "",
    bio: "",
    accepted: false,
    notifications: true,
    gender: "male",
    country: "india",
    theme: "light",
    volume: 50,
  });

  const handleChange = (key: keyof typeof form, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("✅ Form data:", form);
  };
  return (
    <ThemedSafeAreaView>
      <YStack flex={1} p="$4" bg="$background">
        <Header />
        <Text fontSize="$7" fontWeight="800" items="center">
          Form Components Showcase
        </Text>
        <SizeSelector onChange={setSize} />
        <Separator />
        <ScrollView>
          <YStack gap="$4">
            <YStack>
              <Label size={size}>Full Name</Label>
              <Input
                size={size}
                placeholder="Enter your name"
                value={form.fullName}
                onChangeText={(text) => handleChange("fullName", text)}
              />
            </YStack>

            <YStack>
              <Label size={size}>Bio</Label>
              <TextArea
                size={size}
                placeholder="Write something..."
                value={form.bio}
                onChangeText={(text) => handleChange("bio", text)}
              />
            </YStack>

            <YStack>
              <YStack>
                <Label size={size}>Gender</Label>
                <RadioGroup
                  value={form.gender}
                  onValueChange={(val) => handleChange("gender", val)}
                >
                  <XStack gap="$4" items="center">
                    <RadioGroup.Item size={size} value="male" id="male">
                      <RadioGroup.Indicator />
                    </RadioGroup.Item>
                    <Label size={size} htmlFor="male">
                      Male
                    </Label>
                    <RadioGroup.Item size={size} value="female" id="female">
                      <RadioGroup.Indicator />
                    </RadioGroup.Item>
                    <Label size={size} htmlFor="female">
                      Female
                    </Label>
                  </XStack>
                </RadioGroup>
              </YStack>
            </YStack>

            <YStack>
              <CustomSelect
                label="Country"
                size={size}
                native={true}
                value={form.country}
                onChange={(val) => handleChange("country", val)}
                options={[
                  { label: "India", value: "india" },
                  { label: "USA", value: "usa" },
                  { label: "UK", value: "uk" },
                ]}
              />
            </YStack>

            <YStack>
              <Label size={size}>Theme</Label>
              <ToggleGroup
                type="single"
                value={form.theme}
                onValueChange={(val) => handleChange("theme", val)}
              >
                <ToggleGroup.Item
                  p={size}
                  size={size}
                  value="light"
                  color={form.theme === "light" ? "$background" : "$color"}
                  backgroundColor={
                    form.theme === "light" ? "$color" : "transparent"
                  }
                >
                  <Sun />
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  p={size}
                  size={size}
                  value="dark"
                  color={form.theme === "dark" ? "$background" : "$color"}
                  backgroundColor={
                    form.theme === "dark" ? "$color" : "transparent"
                  }
                >
                  <Moon />
                </ToggleGroup.Item>
              </ToggleGroup>
            </YStack>

            <YStack>
              <Label size={size}>Volume: {form.volume}%</Label>
              <Slider
                size={size}
                value={[form.volume]}
                step={5}
                max={100}
                onValueChange={(val) => handleChange("volume", val[0])}
              >
                <Slider.Track>
                  <Slider.TrackActive />
                </Slider.Track>
                <Slider.Thumb size={size} circular index={0} />
              </Slider>
            </YStack>

            <YStack mt="$5">
              <XStack gap="$3" items="center">
                <Label size={size}>Notifications</Label>
                <Switch
                  size={size}
                  checked={form.notifications}
                  onCheckedChange={(val) =>
                    handleChange("notifications", !!val)
                  }
                >
                  <Switch.Thumb animation="quicker" />
                </Switch>
              </XStack>
            </YStack>

            <YStack mt="$3">
              <XStack gap="$3" items="center">
                <Checkbox
                  size={size}
                  checked={form.accepted}
                  onCheckedChange={(val) => handleChange("accepted", !!val)}
                >
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox>
                <Label size={size}>I accept the terms</Label>
              </XStack>
            </YStack>

            <Button size={size} onPress={handleSubmit}>
              Submit
            </Button>
          </YStack>
        </ScrollView>
      </YStack>
    </ThemedSafeAreaView>
  );
}
