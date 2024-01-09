import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
   
const MapScreen = ({ route }) => {
  const nama = route.params ? route.params.nama : undefined;

  return (
    <View style={styles.container}>

      <View style={{flex: 1}}>
        <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, {nama}!</Text>
        <Text>Ini adalah halaman Map </Text>
      </View>

      <View style={styles.mapLayer}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          region={{
            latitude: -6.203197,
            longitude: 106.780583,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mapLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
