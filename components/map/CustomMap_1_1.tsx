import React, { useState, useRef, useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { AZERBAIJAN_BOUNDS, INITIAL_REGION, MIN_ZOOM } from '../../constants/MapBounds';
import { LightCleanMapStyle } from '../../constants/MapStyle';
import { useAzerbaijanBounds } from '../../hooks/useAzerbaijanBounds';

export function CustomMap({ children, onRegionChange }: { children?: React.ReactNode; onRegionChange?: (r: Region)=>void }) {
  const mapRef = useRef<MapView>(null);
  const { isInsideAzerbaijan } = useAzerbaijanBounds();
  const [is3D, setIs3D] = useState(false);

  const handleRegionChangeComplete = useCallback((region: Region) => {
    // enforce bounds with bounce
    if (!isInsideAzerbaijan(region.latitude, region.longitude)) {
      mapRef.current?.animateToRegion(INITIAL_REGION, 600);
      return;
    }
    onRegionChange?.(region);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={INITIAL_REGION}
        customMapStyle={LightCleanMapStyle}
        showsUserLocation
        showsCompass={false}
        pitchEnabled
        rotateEnabled
        minZoomLevel={MIN_ZOOM}
        maxZoomLevel={19}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        {children}
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  map: { flex: 1 }
});