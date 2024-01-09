// Import React dan komponen yang dibutuhkan
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Buat komponen halaman isi data diri
const FormScreen = ({ navigation }) => {
  // State untuk menyimpan NAMA dan HOBI
  const [nama, setNama] = useState('');
  const [hobi, setHobi] = useState('');

  // Fungsi untuk menangani pengiriman data dan navigasi ke halaman berikutnya
  const handleNext = () => {
    // Kirim data ke halaman berikutnya menggunakan navigation
    navigation.navigate('Map', { nama });
    navigation.navigate('Home', { nama });
    navigation.navigate('Form', { nama });
  };

  return (
    <View style={styles.container}>
      <Text>Masukkan Data Diri:</Text>

      {/* Form untuk NAMA */}
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />

      {/* Form untuk HOBI */}
      <TextInput
        style={styles.input}
        placeholder="Hobi"
        value={hobi}
        onChangeText={(text) => setHobi(text)}
      />

      {/* Tombol untuk lanjut ke halaman berikutnya */}
      <Button title="Lanjut" onPress={handleNext} />
    </View>
  );
};

// Stylesheet untuk styling komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: 200,
  },
});

export default FormScreen;
