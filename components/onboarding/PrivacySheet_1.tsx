import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Sheet } from '../ui/Sheet';
import { Button } from '../ui/Button';
import { AppConfig } from '../../constants/AppConfig';
import { storage, StorageKeys } from '../../store/storage';
import { successHaptic } from '../../utils/haptics';

export function PrivacySheet({ onAccept }: { onAccept: () => void }) {
  return (
    <Sheet>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text style={styles.title}>Политика конфиденциальности</Text>
        <Text style={styles.text}>{AppConfig.privacyText}</Text>
        <Text style={styles.text}>Приложение BakuSafeMap показывает чистую карту Азербайджана. Мы не собираем персональные данные, не используем Firebase, не отслеживаем вас. Все данные хранятся локально на вашем устройстве.</Text>
        <Text style={styles.copy}>© 2026 BakuSafeMap, Official Author: Спасатель Баку</Text>
        <View style={{ height: 24 }} />
        <Button title="Принимаю" onPress={async () => { await successHaptic(); storage.set(StorageKeys.hasAcceptedPrivacy, true); onAccept(); }} />
        <View style={{ height: 12 }} />
        <Text style={styles.hint}>Нажимая принимаю, вы соглашаетесь с условиями использования</Text>
      </ScrollView>
    </Sheet>
  );
}
const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '700', color: '#111', letterSpacing: -0.5, marginTop: 8 },
  text: { fontSize: 16, lineHeight: 24, color: '#444', marginTop: 16 },
  copy: { fontSize: 12, color: '#999', marginTop: 24, fontFamily: 'monospace' },
  hint: { fontSize: 11, color: '#AAA', textAlign: 'center' }
});