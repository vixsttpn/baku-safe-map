import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';
export function Input({ label, ...props }: any) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={{ gap: 8 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={Colors.textTertiary}
        style={[styles.input, focused && styles.focused]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  label: { fontSize: 13, fontWeight: '600', color: '#111', letterSpacing: -0.2 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 16, paddingHorizontal: 16, height: 52, fontSize: 16, color: '#111' },
  focused: { borderColor: '#111111' }
});