import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

const IOS_SYMBOLS: Record<string, SymbolViewProps['name']> = {
  'home': 'house.fill',
  'report-problem': 'exclamationmark.triangle.fill',
  'arrow-back' : 'arrow.left',
  'book' : 'book.fill', // used (in paper)
  'image' : 'photo', // used (in paper)
  'settings' : 'gear', // used (in paper)
  'engineering' : 'person.2.fill', // used (in paper)
  'notifications' : 'bell.fill', // used (in paper)
  'check' : 'checkmark', // used (in paper)
  'block' : 'slash.circle.fill', // used (in paper)
  'search' : 'magnifyingglass', // used (in paper)
  'filter-list' : 'line.horizontal.3.decrease', // used (in paper)
  'add' : 'plus', // used (in paper)
  'arrow-drop-up' : 'arrowtriangle.up.fill', // used (in paper)
  'arrow-drop-down' : 'arrowtriangle.down.fill', // used (in paper)
  'bolt' : 'bolt.fill', // used (in paper)
  'build' : 'wrench.fill', // used (in paper)
  'notifications-off' : 'bell.slash.fill', // used (in paper)
  'percent' : 'percent', // used (in paper)
  'edit' : 'pencil', // used (in paper)
  'receipt-long' : 'doc.text.magnifyingglass', // used (in paper)
  'account-circle' : 'person.crop.circle', // used (in paper)
  'close' : 'cross'
  // Add more mappings here
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: keyof typeof IOS_SYMBOLS;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const symbolName = IOS_SYMBOLS[name] ?? 'questionmark.circle'; // fallback if missing

  return (
    <SymbolView
      name={symbolName}
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      style={[{ width: size, height: size }, style]}
    />
  );
}
