// Import React dan komponen yang dibutuhkan
import React from 'react';
import { View, Text } from 'react-native';

// Buat komponen halaman profil
const HomeScreen = ({ route }) => {
  // Ambil data nama dari route.params
  const nama = route.params ? route.params.nama : undefined;

  return (
    <View>
      {/* Tampilkan nama pengguna di kanan atas layar jika nama tidak undefined */}
      {nama !== undefined ? (
        <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, {nama}!</Text>
      ) : (
        <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, Pengguna!</Text>
      )}

      {/* Tampilkan konten profil lainnya di sini */}
      <Text>Ini adalah halaman profil Anda.</Text>
    </View>
  );
};

export default HomeScreen;
