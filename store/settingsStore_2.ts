import { storage } from './storage';

export type MapTheme = 'light' | 'minimal' | 'satellite';
export type Settings = { theme: MapTheme; is3DEnabled: boolean; };

const KEY = 'settings';
export function getSettings(): Settings {
  const raw = storage.getString(KEY);
  if (!raw) return { theme: 'light', is3DEnabled: false };
  try { return JSON.parse(raw); } catch { return { theme: 'light', is3DEnabled: false }; }
}
export function saveSettings(s: Settings) { storage.set(KEY, JSON.stringify(s)); }