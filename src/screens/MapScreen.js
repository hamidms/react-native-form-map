import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 600,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   
const MapScreen = ({ route }) => {
  const nama = route.params ? route.params.nama : undefined;

  return (
    <View>
      <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, {nama}!</Text>

      <Text>Ini adalah halaman Map Anda.</Text>
      <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
    </View>
  );
};

export default MapScreen;
