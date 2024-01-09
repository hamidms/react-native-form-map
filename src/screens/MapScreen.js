// Import React dan komponen yang dibutuhkan
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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
   
// Buat komponen halaman profil
const MapScreen = ({ route }) => {
  // Ambil data nama dari route.params
  const nama = route.params ? route.params.nama : undefined;

  return (
    <View>
      {/* Tampilkan nama pengguna di kanan atas layar */}
      <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, {nama}!</Text>

      {/* Tampilkan konten profil lainnya di sini */}
      <Text>Ini adalah halaman Map Anda.</Text>
      <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
