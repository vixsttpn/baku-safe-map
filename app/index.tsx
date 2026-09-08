import { View, Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import * as Location from 'expo-location'

export default function Index() {
  const router = useRouter()
  const handleStart = async () => {
    try { await Location.requestForegroundPermissionsAsync() } catch {}
    router.replace('/map')
  }
  return (
    <LinearGradient colors={['#fdf6f0','#e8f1f8','#e5f3e8']} style={{flex:1, justifyContent:'center', alignItems:'center', padding:24}}>
      <Text style={{fontSize:32, fontWeight:'800', color:'#2d2d2d'}}>Baku Safe Map</Text>
      <Text style={{marginTop:12, color:'#8a8a8a', textAlign:'center'}}>Мягкая карта без лишних названий магазинов. Только дороги и ремонты.</Text>
      <Pressable onPress={handleStart} style={{marginTop:32, backgroundColor:'#2d2d2d', paddingHorizontal:32, paddingVertical:14, borderRadius:24}}>
        <Text style={{color:'#fff', fontWeight:'700'}}>Начать</Text>
      </Pressable>
    </LinearGradient>
  )
}
