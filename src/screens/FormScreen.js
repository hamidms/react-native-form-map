import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [hobi, setHobi] = useState('');

  const handleNext = () => {
    navigation.navigate('Map', { nama });
    navigation.navigate('Home', { nama });
    navigation.navigate('Form', { nama });
  };

  return (
    <View style={styles.container}>
      <Text>Masukkan Data Diri:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hobi"
        value={hobi}
        onChangeText={(text) => setHobi(text)}
      />

      <Button title="Lanjut" onPress={handleNext} />
    </View>
  );
};

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
