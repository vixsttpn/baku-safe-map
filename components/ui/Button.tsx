import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from '../../constants/Colors';
import { softHaptic } from '../../utils/haptics';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Button({ title, onPress, variant='primary', style, textStyle, disabled }: Props) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <AnimatedPressable
      onPressIn={() => { scale.value = withSpring(0.97, { damping: 15, stiffness: 200 }); softHaptic(); }}
      onPressOut={() => { scale.value = withSpring(1, { damping: 15, stiffness: 200 }); }}
      onPress={onPress}
      disabled={disabled}
      style={[styles.base, variant==='primary' ? styles.primary : styles.secondary, animatedStyle, style, disabled && { opacity: 0.5 }]}
    >
      <Text style={[styles.text, variant==='primary' ? styles.textPrimary : styles.textSecondary, textStyle]}>{title}</Text>
    </AnimatedPressable>
  );
}
const styles = StyleSheet.create({
  base: { height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  primary: { backgroundColor: Colors.button },
  secondary: { backgroundColor: Colors.background, borderWidth: 1, borderColor: Colors.border },
  text: { fontSize: 16, fontWeight: '600', letterSpacing: -0.2 },
  textPrimary: { color: Colors.buttonText },
  textSecondary: { color: Colors.text },
});