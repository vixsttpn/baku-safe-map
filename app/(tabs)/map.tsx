import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { softMapStyle, repairColors } from '@/constants/mapStyle'

export default function MapScreen() {
  const [loc, setLoc] = useState<any>(null)
  useEffect(()=>{(async()=>{
    const {status}=await Location.requestForegroundPermissionsAsync()
    if(status==='granted'){ const p=await Location.getCurrentPositionAsync({}); setLoc(p.coords) }
  })()},[])
  return (
    <View style={{flex:1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={softMapStyle}
        showsPointsOfInterest={false}
        showsBuildings={false}
        showsTraffic={false}
        style={{flex:1}}
        initialRegion={loc?{latitude:loc.latitude, longitude:loc.longitude, latitudeDelta:0.05, longitudeDelta:0.05}:{latitude:40.4093, longitude:49.8671, latitudeDelta:0.1, longitudeDelta:0.1}}
      >
        <Marker coordinate={{latitude:40.4093, longitude:49.8671}} pinColor={repairColors.default} />
      </MapView>
    </View>
  )
}
