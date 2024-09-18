import { Platform, LayoutAnimation, UIManager } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const Animation2 = () => {
  LayoutAnimation.configureNext({
    duration: 200,
    create: { type: "linear", property: "opacity", delay: 100 },
    update: { type: "linear", springDamping: 0.4 },
    delete: { type: "linear", property: "opacity", duration: 100 },
  });
};
