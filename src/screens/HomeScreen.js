import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ route }) => {
  const nama = route.params ? route.params.nama : undefined;

  return (
    <View>
      {nama !== undefined ? (
        <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, {nama}!</Text>
      ) : (
        <Text style={{ alignSelf: 'flex-end', margin: 10 }}>Halo, Pengguna!</Text>
      )}

      <Text>Ini adalah halaman profil Anda.</Text>
    </View>
  );
};

export default HomeScreen;
