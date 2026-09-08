import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
export function Map3DButton({ active, onPress }: { active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.btn, active && styles.active]}>
      <Text style={[styles.text, active && styles.textActive]}>3D</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  btn: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0F0F0' },
  active: { backgroundColor: '#111' },
  text: { fontWeight: '700', color: '#111' },
  textActive: { color: '#FFF' }
});