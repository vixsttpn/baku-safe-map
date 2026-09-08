import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { View, Image, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useAppUpdate } from '../hooks/useAppUpdate';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);
  const { updateAvailable } = useAppUpdate();

  useEffect(() => {
    async function prepare() {
      await new Promise(r => setTimeout(r, 800));
      setAppReady(true);
      await SplashScreen.hideAsync();
      await new Promise(r => setTimeout(r, 1200));
      setSplashVisible(false);
    }
    prepare();
  }, []);

  if (splashVisible) {
    return (
      <View style={styles.splash}>
        <Animated.View entering={FadeIn.duration(600)} exiting={FadeOut.duration(400)}>
          <Image source={require('../assets/logo/app-icon-512.png')} style={styles.logo} />
        </Animated.View>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade', animationDuration: 500 }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding/privacy" />
      <Stack.Screen name="onboarding/profile" />
      <Stack.Screen name="onboarding/welcome" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
const styles = StyleSheet.create({
  splash: { flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 140, height: 140, borderRadius: 32 }
});