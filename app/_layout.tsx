import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import {AppProvider} from '@/context/AppContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const DarkTheme = {
    dark: true,
    colors: {
      primary: 'rgb(10, 132, 255)',
      background: 'rgb(255,255,255)',
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const DefaultTheme = {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#f2f6fc',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(216, 216, 216)',
      notification: 'rgb(255, 59, 48)',
    }
  }

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins_100: require('../assets/fonts/Poppins-Thin.ttf'),
    Poppins_200: require('../assets/fonts/Poppins-ExtraLight.ttf'),
    Poppins_300: require('../assets/fonts/Poppins-Light.ttf'),
    Poppins_400: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_500: require('../assets/fonts/Poppins-Medium.ttf'),
    Poppins_600: require('../assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_700: require('../assets/fonts/Poppins-Bold.ttf'),
    Poppins_800: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    Poppins_900: require('../assets/fonts/Poppins-Black.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <ThemeProvider value={DefaultTheme} /*value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}*/>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </AppProvider>
  );
}
