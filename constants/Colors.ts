/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions } from "react-native";

const tintColorLight = '#1888f0';
const tintColorDark = '#fff';

export const Colors = {
  dimensions: {
    window: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    }
  },
  light: {
    text: '#121212',
    background: '#f2f6fc',
    secondary: '#e2ecfc',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#f2f6fc',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  shadow: {
    shadowColor: '#00000050',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2.5,
  },
  button: {
    color: '#fff',
    backgroundColor: '#ececfc',
    borderRadius: 8,
    padding: 10
  },
  fontSizes: {
    titles: {
      'h6': 14,
      'h5': 18,
      'h4': 22,
      'h3': 26,
      'h2': 30,
      'h1': 32
    }
  }
};
