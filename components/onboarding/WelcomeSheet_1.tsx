import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Sheet } from '../ui/Sheet';
import { Button } from '../ui/Button';
import { storage, StorageKeys } from '../../store/storage';

export function WelcomeSheet({ onStart }: { onStart: () => void }) {
  return (
    <Sheet>
      <View style={styles.center}>
        <Image source={require('../../assets/logo/app-icon-192.png')} style={{ width: 96, height: 96, borderRadius: 24 }} />
        <Text style={styles.title}>Добро пожаловать в BakuSafeMap</Text>
        <Text style={styles.sub}>Чистая карта Азербайджана</Text>
        <Text style={styles.desc}>Только Азербайджан. Никакого мусора. Только главные дороги, чистая карта и 3D здания.</Text>
      </View>
      <View style={{ marginTop: 32 }}>
        <Button title="Начать" onPress={() => { storage.set(StorageKeys.hasSeenWelcome, true); onStart(); }} />
      </View>
    </Sheet>
  );
}
const styles = StyleSheet.create({
  center: { alignItems: 'center', marginTop: 16 },
  title: { fontSize: 24, fontWeight: '700', color: '#111', textAlign: 'center', marginTop: 24, letterSpacing: -0.5 },
  sub: { fontSize: 16, color: '#111', fontWeight: '600', marginTop: 8 },
  desc: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 12, lineHeight: 20, paddingHorizontal: 12 }
});