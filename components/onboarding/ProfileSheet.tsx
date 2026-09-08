import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Sheet } from '../ui/Sheet';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { saveProfile } from '../../store/profileStore';
import * as ImagePicker from 'expo-image-picker';

export function ProfileSheet({ onContinue }: { onContinue: () => void }) {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [avatar, setAvatar] = useState<string | undefined>();

  const pickAvatar = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, aspect: [1,1], quality: 0.8 });
    if (!res.canceled) setAvatar(res.assets[0].uri);
  };

  return (
    <Sheet>
      <Text style={styles.title}>Давайте оформим ваш профиль</Text>
      <Text style={styles.sub}>Это останется на устройстве</Text>
      <Pressable onPress={pickAvatar} style={styles.avatarWrap}>
        {avatar ? <Image source={{ uri: avatar }} style={styles.avatar} /> : <View style={styles.avatarPlaceholder}><Text style={styles.avatarText}>👤</Text></View>}
      </Pressable>
      <View style={{ gap: 16, marginTop: 24 }}>
        <Input label="Имя" placeholder="Спасатель" value={name} onChangeText={setName} />
        <Input label="О себе" placeholder="Живу в Баку, делаю город чище" value={about} onChangeText={setAbout} multiline numberOfLines={3} style={{ height: 80, paddingTop: 12 }} />
      </View>
      <View style={{ marginTop: 32 }}>
        <Button title="Продолжить" onPress={() => { saveProfile({ name: name || 'Спасатель', about, avatarUri: avatar, createdAt: new Date().toISOString() }); onContinue(); }} />
      </View>
    </Sheet>
  );
}
const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: '700', color: '#111', letterSpacing: -0.4 },
  sub: { fontSize: 14, color: '#888', marginTop: 6 },
  avatarWrap: { alignSelf: 'center', marginTop: 24 },
  avatar: { width: 96, height: 96, borderRadius: 48 },
  avatarPlaceholder: { width: 96, height: 96, borderRadius: 48, backgroundColor: '#F5F5F3', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E8E8E8' },
  avatarText: { fontSize: 32 }
});