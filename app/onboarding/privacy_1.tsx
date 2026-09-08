import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { PrivacySheet } from '../../components/onboarding/PrivacySheet';

export default function PrivacyScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'flex-end' }}>
      <PrivacySheet onAccept={() => router.replace('/onboarding/profile')} />
    </View>
  );
}