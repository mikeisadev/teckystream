import React from "react";
import { SafeAreaView, FlatList, StyleSheet, type ViewProps } from "react-native";
import { Colors } from "@/constants/Colors";

export type SafeScreenViewProps = ViewProps

export default function SafeScreenView({ style, children }: SafeScreenViewProps) {

  return (
    <SafeAreaView style={style}>
    </SafeAreaView>
  )
}