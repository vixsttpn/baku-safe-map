import { storage, StorageKeys } from './storage';

export type Profile = {
  name: string;
  about: string;
  avatarUri?: string;
  createdAt: string;
};

export function saveProfile(p: Profile) {
  storage.set(StorageKeys.profile, JSON.stringify(p));
  storage.set(StorageKeys.hasCompletedProfile, true);
}

export function getProfile(): Profile | null {
  const raw = storage.getString(StorageKeys.profile);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}