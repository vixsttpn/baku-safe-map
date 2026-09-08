import * as Haptics from 'expo-haptics';
export async function softHaptic() { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); }
export async function mediumHaptic() { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); }
export async function successHaptic() { await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); }