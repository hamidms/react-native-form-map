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

      <View style={{flex: 1}}>
        <Text style={ styles.rightTitle }>{nama}</Text>
      </View>

      <View style={styles.form}>
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

        <Button title="Simpan" onPress={handleNext} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  form: {
    flex: 4,
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
  rightTitle: {
    alignSelf: 'flex-end', 
    margin: 10,
    fontWeight: 'bold'
  }
});

export default FormScreen;
