import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV({ id: 'bakusafemap-storage' });

export const StorageKeys = {
  hasAcceptedPrivacy: 'hasAcceptedPrivacy',
  hasCompletedProfile: 'hasCompletedProfile',
  hasSeenWelcome: 'hasSeenWelcome',
  profile: 'profile',
  settings: 'settings',
} as const;