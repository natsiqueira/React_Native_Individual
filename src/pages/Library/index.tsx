import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua Biblioteca (Calma ai , para o trabalho final a gente faz algo mais completo)</Text>
    </View>
  );
};