import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import { CustomMap } from '../../components/map/CustomMap';
import { MapControls } from '../../components/map/MapControls';
import { useAppUpdate } from '../../hooks/useAppUpdate';
import { getProfile } from '../../store/profileStore';
import Animated, { SlideInDown } from 'react-native-reanimated';

export default function MapScreen() {
  const { updateAvailable, latestVersion, apkUrl } = useAppUpdate();
  const profile = getProfile();
  const [is3D, setIs3D] = useState(false);

  return (
    <View style={styles.container}>
      <CustomMap />
      <MapControls is3D={is3D} onLocate={() => {}} onCompass={() => {}} on3D={() => setIs3D(!is3D)} />

      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarContent}>
          <Text style={styles.title}>BakuSafeMap</Text>
          <Text style={styles.sub}>Только Азербайджан • 3D • Чисто</Text>
        </View>
        <View style={styles.profileBadge}>
          <Text style={styles.profileText}>{profile?.name?.[0] || 'С'}</Text>
        </View>
      </View>

      {/* Update banner */}
      {updateAvailable && (
        <Animated.View entering={SlideInDown.duration(500)} style={styles.updateBanner}>
          <Text style={styles.updateText}>Вышла новая версия {latestVersion}, пожалуйста обновитесь до последней версии</Text>
          <Pressable onPress={() => apkUrl && Linking.openURL(apkUrl)} style={styles.updateBtn}>
            <Text style={styles.updateBtnText}>Обновить</Text>
          </Pressable>
        </Animated.View>
      )}

      {/* Bottom info */}
      <View style={styles.bottomCard}>
        <Text style={styles.bottomTitle}>Карта Баку</Text>
        <Text style={styles.bottomSub}>Границы: только Азербайджан • minZoom 7.5 • 3D здания включены</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  topBar: { position: 'absolute', top: 50, left: 16, right: 16, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 24, shadowOffset: { width: 0, height: 8 }, elevation: 4, borderWidth: 1, borderColor: '#F0F0F0' },
  topBarContent: { gap: 2 },
  title: { fontSize: 16, fontWeight: '700', color: '#111', letterSpacing: -0.2 },
  sub: { fontSize: 11, color: '#888', fontFamily: 'monospace' },
  profileBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center' },
  profileText: { color: '#FFF', fontWeight: '700' },
  updateBanner: { position: 'absolute', top: 110, left: 16, right: 16, backgroundColor: '#111', borderRadius: 16, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  updateText: { color: '#FFF', fontSize: 12, flex: 1, marginRight: 12 },
  updateBtn: { backgroundColor: '#FFF', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 100 },
  updateBtnText: { color: '#111', fontWeight: '700', fontSize: 12 },
  bottomCard: { position: 'absolute', bottom: 24, left: 16, right: 16, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#F0F0F0' },
  bottomTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  bottomSub: { fontSize: 11, color: '#888', marginTop: 4 }
});