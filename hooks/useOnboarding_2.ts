import { useState, useEffect } from 'react';
import { storage, StorageKeys } from '../store/storage';

export function useOnboarding() {
  const [state, setState] = useState({
    hasAcceptedPrivacy: false,
    hasCompletedProfile: false,
    hasSeenWelcome: false,
    loaded: false,
  });

  useEffect(() => {
    setState({
      hasAcceptedPrivacy: storage.getBoolean(StorageKeys.hasAcceptedPrivacy) || false,
      hasCompletedProfile: storage.getBoolean(StorageKeys.hasCompletedProfile) || false,
      hasSeenWelcome: storage.getBoolean(StorageKeys.hasSeenWelcome) || false,
      loaded: true,
    });
  }, []);

  return state;
}