import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import  ParallaxScrollView  from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

interface MarkerData {
  latlng: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
}

const TabTwoScreen: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markers, setMarkers] = useState<MarkerData[]>([
    {
      latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: 'Marker Title',
      description: 'Marker Description',
    },
  ]);

  const onRegionChange = (newRegion: Region) => {
    setRegion(newRegion);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <View style={styles.mapContainer}>
        <MapView region={region} onRegionChange={onRegionChange} style={styles.map}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default TabTwoScreen;
