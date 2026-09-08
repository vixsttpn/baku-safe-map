import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { ProfileSheet } from '../../components/onboarding/ProfileSheet';

export default function ProfileOnboarding() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'flex-end' }}>
      <ProfileSheet onContinue={() => router.replace('/onboarding/welcome')} />
    </View>
  );
}