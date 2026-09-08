import { useCallback } from 'react';
import { AZERBAIJAN_BOUNDS } from '../constants/MapBounds';

export function useAzerbaijanBounds() {
  const isInsideAzerbaijan = useCallback((lat: number, lng: number) => {
    return (
      lat >= AZERBAIJAN_BOUNDS.southWest.lat &&
      lat <= AZERBAIJAN_BOUNDS.northEast.lat &&
      lng >= AZERBAIJAN_BOUNDS.southWest.lng &&
      lng <= AZERBAIJAN_BOUNDS.northEast.lng
    );
  }, []);
  return { isInsideAzerbaijan, bounds: AZERBAIJAN_BOUNDS };
}