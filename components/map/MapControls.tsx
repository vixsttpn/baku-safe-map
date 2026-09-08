import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from '../../constants/Colors';

export function MapControls({ onLocate, onCompass, on3D, is3D }: any) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={onLocate}><View style={styles.dot} /></Pressable>
      <Pressable style={styles.btn} onPress={onCompass}><View style={[styles.dot, { transform: [{ rotate: '45deg' }] }]} /></Pressable>
      <Pressable style={[styles.btn, is3D && styles.active]} onPress={on3D}><View style={styles.dot3D} /></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { position: 'absolute', right: 16, bottom: 120, gap: 12 },
  btn: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 16, shadowOffset: { width: 0, height: 4 }, elevation: 4, borderWidth: 1, borderColor: '#F0F0F0' },
  active: { backgroundColor: '#111', borderColor: '#111' },
  dot: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#111' },
  dot3D: { width: 18, height: 18, borderWidth: 2, borderColor: '#111', borderRadius: 4 }
});