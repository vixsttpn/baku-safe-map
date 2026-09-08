export const LightCleanMapStyle = [
  { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#6B6B6B" }] },
  { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#FFFFFF" }] },
  { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#E8E8E8" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#EAF2FF" }] },
  { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#F9F8F6" }] },
  { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }] }
];

export const MinimalGreyMapStyle = [
  { "elementType": "geometry", "stylers": [{ "color": "#F5F5F5" }] },
  { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
  { "featureType": "road", "stylers": [{ "visibility": "simplified" }] }
];

export const MapThemes = {
  light: LightCleanMapStyle,
  minimal: MinimalGreyMapStyle,
  satellite: [] // system satellite
} as const;