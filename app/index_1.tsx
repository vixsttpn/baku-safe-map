import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useOnboarding } from '../hooks/useOnboarding';

export default function Index() {
  const { hasAcceptedPrivacy, hasCompletedProfile, hasSeenWelcome, loaded } = useOnboarding();
  const router = useRouter();

  useEffect(() => {
    if (!loaded) return;
    if (!hasAcceptedPrivacy) router.replace('/onboarding/privacy');
    else if (!hasCompletedProfile) router.replace('/onboarding/profile');
    else if (!hasSeenWelcome) router.replace('/onboarding/welcome');
    else router.replace('/(tabs)/map');
  }, [loaded, hasAcceptedPrivacy, hasCompletedProfile, hasSeenWelcome]);

  return null;
}