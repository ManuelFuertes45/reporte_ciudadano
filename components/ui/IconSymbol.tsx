// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

// type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING: Record<string, MaterialIconName> = { // This is where I add the symbols
  'home': 'home', // used (in paper)
  'arrow-back' : 'arrow-back',
  'book' : 'book', // used (in paper)
  'image' : 'image', // used (in paper)
  'report-problem' : 'report-problem', // used (in paper)
  'settings' : 'settings', // used (in paper)
  'engineering' : 'engineering', // used (in paper)
  'notifications' : 'notifications', // used (in paper)
  'check' : 'check', // used (in paper)
  'block' : 'block', // used (in paper)
  'search' : 'search', // used (in paper)
  'filter-list' : 'filter-list', // used (in paper)
  'add' : 'add', // used (in paper)
  'arrow-drop-up' : 'arrow-drop-up', // used (in paper)
  'arrow-drop-down' : 'arrow-drop-down', // used (in paper)
  'bolt' : 'bolt', // used (in paper)
  'build' : 'build', // used (in paper)
  'notifications-off' : 'notifications-off', // used (in paper)
  'percent' : 'percent', // used (in paper)
  'edit' : 'edit', // used (in paper)
  'receipt-long' : 'receipt-long', // used (in paper)
  'account-circle' : 'account-circle', // used (in paper)
} as const;

type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
