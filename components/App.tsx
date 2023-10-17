import React, { useEffect, useState, useRef } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";

import { styles } from "./styles";

const getRandomCoordinate = (currentLocation: { coords: any; timestamp?: number; mocked?: boolean | undefined; }) => {
  const earthRadius = 6378.1; // em quilômetros
  const radius = 2 + Math.random() * (5 - 2); // raio entre 2 e 5 km
  const x0 = currentLocation.coords.latitude;
  const y0 = currentLocation.coords.longitude;

  // Converte o raio de quilômetros para graus
  const radiusInDegrees = radius / earthRadius;

  // Gera um ângulo aleatório em radianos
  const u = Math.random();
  const v = Math.random();
  const w = radiusInDegrees * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  // Converte as coordenadas de deslocamento para a nova latitude e longitude
  const newX = x / Math.cos(y0);

  const foundLatitude = newX + x0;
  const foundLongitude = y + y0;

  return { latitude: foundLatitude, longitude: foundLongitude };
};

export default function MapScreen() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [nearbyLocations, setNearbyLocations] = useState([]);

  const mapRef = useRef<MapView>(null);

  async function requestForegroundPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);

      // Gera novas localizações próximas
      const newNearbyLocations = [];
      for (let i = 0; i < 7; i++) {
        const newCoordinate = getRandomCoordinate(currentPosition);
        newNearbyLocations.push(newCoordinate);
      }
      setNearbyLocations(newNearbyLocations);
    }
  }

  useEffect(() => {
    requestForegroundPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        mapRef.current?.animateCamera({
          center: response.coords,
        });
      }
    );
  }, []);

  const renderCustomMarker = () => (
    <View style={styles.customMarker}>
      <View style={styles.customMarkerContent} />
    </View>
  );

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            {renderCustomMarker()}
          </Marker>
          {nearbyLocations.map((coordinate, index) => (
            <Marker key={index} coordinate={coordinate} />
          ))}
        </MapView>
      )}
    </View>
  );
}
