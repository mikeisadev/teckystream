import React from "react";
import { View, StyleSheet, type ViewProps } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

export type RegularViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
}

export default function ThemedView({ style, lightColor, darkColor, children }: RegularViewProps) {
  const bgColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <View style={[{backgroundColor: bgColor}, styles.RegularView, style]}>{children}</View>
}

const styles = StyleSheet.create({
  RegularView: {
    padding: 10
  }
})