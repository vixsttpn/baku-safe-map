import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { WelcomeSheet } from '../../components/onboarding/WelcomeSheet';

export default function Welcome() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'flex-end' }}>
      <WelcomeSheet onStart={() => router.replace('/(tabs)/map')} />
    </View>
  );
}