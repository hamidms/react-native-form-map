import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
  const nama = route.params ? route.params.nama : undefined;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1}}>
        <Text style={ styles.rightTitle }>{nama}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text>Selamat Datang, {nama}!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  rightTitle: {
    alignSelf: 'flex-end', 
    margin: 10,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
