import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';

export function Sheet({ children }: { children: React.ReactNode }) {
  return (
    <Animated.View entering={SlideInDown.springify().damping(20).stiffness(200)} style={styles.sheet}>
      <View style={styles.handle} />
      {children}
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 12,
    paddingBottom: 34,
    paddingHorizontal: 24,
    minHeight: '92%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 10,
  },
  handle: { width: 36, height: 4, borderRadius: 2, backgroundColor: '#E8E8E8', alignSelf: 'center', marginBottom: 16 }
});