import React from "react";
import { View, StyleSheet, type ViewProps } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from "@/constants/Colors";

export type RegularViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
}

export default function ThemedView({ style, lightColor, darkColor, children }: RegularViewProps) {
  // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')
  const backgroundColor = Colors.light.background

  return <View style={[{backgroundColor}, styles.RegularView, style]}>{children}</View>
}

const styles = StyleSheet.create({
  RegularView: {
    padding: 10,
    height: Colors.dimensions.window.height
  }
})