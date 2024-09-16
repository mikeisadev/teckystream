// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';


export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={20} style={[{ marginBottom: 0 }, style]} {...rest} />;
}
